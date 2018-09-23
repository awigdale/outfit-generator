import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchShoes} from '../store/shoes'
import styled from 'styled-components'
import posed from 'react-pose'
import {MainWrapper, ItemDiv} from './stylizedComponents'

const Img = styled.img`
  height: 32vh;
  position: relative;
`

const Box = posed(Img)({
  idle: {scale: 1},
  hovered: {scale: 1.5}
})

class Shoes extends Component {
  state = {hovering: true, selectedShoe: {}}
  async componentDidMount() {
    await this.props.fetchShoes(this.props.selectedMood.id)
    this.selectShoe()
  }

  selectShoe() {
    let index = Math.floor(Math.random() * this.props.shoes.length)
    const shoe = this.props.shoes[index]
    this.setState({selectedShoe: shoe})
  }

  render() {
    return (
      <ItemDiv>
        {this.state.selectedShoe.id && (
          <Box
            src={`${this.state.selectedShoe.imgUrl}`}
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
  shoes: state.shoes,
  selectedMood: state.allMoods.selectedMood
})

const mapDispatchToProps = dispatch => ({
  fetchShoes: moodId => dispatch(fetchShoes(moodId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shoes)
