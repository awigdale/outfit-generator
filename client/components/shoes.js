import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchShoes} from '../store/shoes'
import {ItemDiv, PosedImg} from './stylizedComponents'

class Shoes extends Component {
  state = {isZoomed: false, selectedShoe: {}}
  async componentDidMount() {
    await this.props.fetchShoes(this.props.selectedMood.id)
    this.selectShoe()
  }

  selectShoe() {
    let index = Math.floor(Math.random() * this.props.shoes.length)
    const shoe = this.props.shoes[index]
    this.setState({selectedShoe: shoe})
  }

  zoomIn() {
    this.setState({isZoomed: true})
  }

  zoomOut() {
    this.setState({isZoomed: false})
  }

  render() {
    return (
      <ItemDiv>
        {this.state.selectedShoe.id && (
          <PosedImg
            src={`${this.state.selectedShoe.imgUrl}`}
            pose={this.state.isZoomed ? 'zoomedIn' : 'zoomedOut'}
            onClick={() =>
              this.state.isZoomed ? this.zoomOut() : this.zoomIn()
            }
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
