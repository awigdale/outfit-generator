import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTops} from '../store/tops'
import {ItemDiv, PosedImg} from './stylizedComponents'

class Tops extends Component {
  state = {isZoomed: false, selectedTop: {}}
  async componentDidMount() {
    await this.props.fetchTops(this.props.selectedMood.id)
    this.selectTop()
  }
  selectTop() {
    let index = Math.floor(Math.random() * this.props.tops.length)
    const top = this.props.tops[index]
    this.setState({selectedTop: top})
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
        {this.state.selectedTop.id && (
          <PosedImg
            src={`${this.state.selectedTop.imgUrl}`}
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
  tops: state.tops,
  selectedMood: state.allMoods.selectedMood
})

const mapDispatchToProps = dispatch => ({
  fetchTops: moodId => dispatch(fetchTops(moodId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tops)
