import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchBottoms} from '../store/bottoms'
import {ItemDiv} from './stylizedComponents'
import posed from 'react-pose'
import styled from '../../node_modules/styled-components'

const Img = styled.img`
  height: 32vh;
  position: relative;

  overflow: hidden;
`

const Box = posed(Img)({
  idle: {scale: 1},
  hovered: {scale: 1.5}
})

class Bottoms extends Component {
  state = {
    hovering: true,
    selectedBottom: {}
  }
  async componentDidMount() {
    await this.props.fetchBottoms(this.props.selectedMood.id)
    this.selectBottom()
  }

  selectBottom() {
    let index = Math.floor(Math.random() * this.props.bottoms.length)
    const bottom = this.props.bottoms[index]
    this.setState({selectedBottom: bottom})
  }

  render() {
    return (
      <ItemDiv>
        {this.state.selectedBottom.id && (
          <Box
            src={`${this.state.selectedBottom.imgUrl}`}
            pose={this.state.hovering ? 'idle' : 'hovered'}
            onMouseEnter={() => this.setState({hovering: false})}
            onMouseLeave={() => this.setState({hovering: true})}
          />
        )}
      </ItemDiv>
    )
  }
}

const mapStateToProps = state => ({
  bottoms: state.bottoms,
  selectedMood: state.allMoods.selectedMood
})

const mapDispatchToProps = dispatch => ({
  fetchBottoms: moodId => dispatch(fetchBottoms(moodId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bottoms)
