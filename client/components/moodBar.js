import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectMood, fetchMoods} from '../store/moods'
import styled from 'styled-components'
import {Menu, Container, Header} from 'semantic-ui-react'
import {Button, MainWrapper} from './stylizedComponents'
import posed from 'react-pose'

const Wrapper = styled.div`
  width: 60vw;
  height: 100vh;
  padding: 10px;
  background-image: url(img/yellow.jpeg);
  background-size: cover;
  text-align: left;
  overflow: hidden;
`

const HeaderDress = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 200px;
  font-weight: 800;
  letter-spacing: -20px;
  color: #1b2121;
  padding: 30px;
`
const HeaderUp = styled(HeaderDress)`
  color: #1b2121;
  position: relative;
  top: -140px;
  padding-left: 30px;
  padding-top: 0px;
  background: transparent;
  border: none;
`

const P = styled.p`
  font-family: 'PT Serif', serif;
  font-style: italic;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #1b2121;
  padding: 20px;
  position: relative;
  top: -200px;
`
const Mood = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 140px;
  font-weight: 800;
  letter-spacing: -12px;
  color: #1b2121;
  position: relative;
  top: -200px;
`

class MoodBar extends Component {
  componentDidMount() {
    this.props.fetchMoods()
  }
  async handleMoodClick(mood) {
    await this.props.selectMood(mood)
    this.setState(this.props.selectedMood)
  }
  render() {
    return (
      <MainWrapper>
        <Wrapper>
          <HeaderDress>Dress</HeaderDress>
          <HeaderUp>Up</HeaderUp>
          <Menu secondary>
            {!this.props.selectedMood.id && (
              <div>
                <P>Pick a mood:</P>
                {this.props.moods.map(mood => (
                  <Button
                    key={mood.id}
                    onClick={() => this.handleMoodClick(mood)}
                  >
                    {mood.mood}
                  </Button>
                ))}
              </div>
            )}
          </Menu>
          {this.props.selectedMood.id && (
            <div>
              <P>Today's mood: </P>
              <Mood>{this.props.selectedMood.mood}</Mood>
            </div>
          )}
        </Wrapper>
      </MainWrapper>
    )
  }
}

const mapStateToProps = state => ({
  moods: state.allMoods.moods,
  selectedMood: state.allMoods.selectedMood
})

const mapDispatchToProps = dispatch => ({
  selectMood: mood => dispatch(selectMood(mood)),
  fetchMoods: () => dispatch(fetchMoods())
})

export default connect(mapStateToProps, mapDispatchToProps)(MoodBar)
