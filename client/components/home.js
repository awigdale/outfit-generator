import React, {Component} from 'react'
import {connect} from 'react-redux'
import MoodBar from './moodBar'
import Shoes from './shoes'
import Tops from './tops'
import Bottoms from './bottoms'
import {Button, ClothingWrapper} from './stylizedComponents'
import styled from 'styled-components'
import posed from '../../node_modules/react-pose'
import {resetMood} from '../store/moods'
import {GetStarted} from './getStarted'

const DressMeButton = styled(Button)`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  position: relative;
  font-weight: 700;
  font-size: 60px;
  left: 400px;
  top: -300px;
  color: red;
  border: 2px solid #1b2121;
`

const ResetButton = styled(Button)`
  font-size: 90px;
  border: 2px solid #1b2121;
  position: relative;
  display: inline-block;
  top: -490px;
  left: 220px;
`

const Wrapper = styled.div`
  background: transparent;
  height: 100vh;
  width: 60vw;
`
const BlackWrapper = styled.div`
  background: #1b2121;
  height: 100vh;
  width: 60vw;
  position: fixed;
`
const StartedButton = styled.button`
  display: inline-block;
  position: relative;
  font-size: 30px;
  font-weight: 700;
  background: transparent;
  top: 150px;
  outline: none;
  border: 1px solid #1b2121;
  padding: 20px;
  width: 30vw;
`

const AnimatedBlackWrapper = posed(BlackWrapper)({
  enter: {opacity: 0.9},
  exit: {opacity: 0}
})

const TransparentWrapper = posed(Wrapper)({
  hidden: {opacity: 0.1},
  visible: {opacity: 1}
})

class HomePage extends Component {
  state = {
    isClicked: false,
    isVisible: true,
    isReset: false,
    isStarted: false
  }
  handleClick() {
    this.setState({isClicked: true, isVisible: false, isReset: true})
  }

  handleReset = () => {
    this.props.resetMood()
    this.setState({isClicked: false, isVisible: true, isReset: false})
  }

  handleStart = () => {
    this.setState({isStarted: true})
  }

  render() {
    return (
      <div>
        <AnimatedBlackWrapper pose={this.state.isStarted ? 'exit' : 'enter'} />

        <TransparentWrapper pose={this.state.isVisible ? 'visible' : 'hidden'}>
          <MoodBar />
          {this.props.selectedMood.id && (
            <DressMeButton onClick={() => this.handleClick()}>
              DRESS ME
            </DressMeButton>
          )}
        </TransparentWrapper>
        {!this.state.isStarted && (
          <ClothingWrapper>
            <GetStarted />
            <StartedButton onClick={this.handleStart}>
              Let's get started
            </StartedButton>
          </ClothingWrapper>
        )}
        {this.props.selectedMood.id &&
          this.state.isClicked && (
            <ClothingWrapper>
              <Tops />
              <Bottoms />
              <Shoes />
            </ClothingWrapper>
          )}
        {this.state.isReset && (
          <ResetButton onClick={this.handleReset}>reset</ResetButton>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedMood: state.allMoods.selectedMood,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  resetMood: () => dispatch(resetMood())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
