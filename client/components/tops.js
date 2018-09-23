import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTops} from '../store/tops'
import posed from 'react-pose'
import styled from 'styled-components'
import {ItemDiv} from './stylizedComponents'

const Img = styled.img`
  height: 32vh;
  position: relative;
`

const Box = posed(Img)({
  idle: {scale: 1},
  hovered: {scale: 1.5}
})

class Tops extends Component {
  state = {hovering: true, selectedTop: {}}
  async componentDidMount() {
    await this.props.fetchTops(this.props.selectedMood.id)
    this.selectTop()
  }
  selectTop() {
    let index = Math.floor(Math.random() * this.props.tops.length)
    const top = this.props.tops[index]
    this.setState({selectedTop: top})
  }
  render() {
    return (
      <ItemDiv>
        {this.state.selectedTop.id && (
          <Box
            src={`${this.state.selectedTop.imgUrl}`}
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
  tops: state.tops,
  selectedMood: state.allMoods.selectedMood
})

const mapDispatchToProps = dispatch => ({
  fetchTops: moodId => dispatch(fetchTops(moodId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tops)
