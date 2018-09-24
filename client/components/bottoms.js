import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchBottoms} from '../store/bottoms'
import {ItemDiv, PosedImg} from './stylizedComponents'

class Bottoms extends Component {
  state = {
    isZoomed: false,
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

  zoomIn() {
    this.setState({isZoomed: true})
  }

  zoomOut() {
    this.setState({isZoomed: false})
  }

  render() {
    return (
      <ItemDiv>
        {this.state.selectedBottom.id && (
          <PosedImg
            src={`${this.state.selectedBottom.imgUrl}`}
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
  bottoms: state.bottoms,
  selectedMood: state.allMoods.selectedMood
})

const mapDispatchToProps = dispatch => ({
  fetchBottoms: moodId => dispatch(fetchBottoms(moodId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bottoms)
