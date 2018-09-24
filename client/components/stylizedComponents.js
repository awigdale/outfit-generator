import styled from 'styled-components'
import posed from 'react-pose'

export const MainWrapper = styled.div`
  width: 100vw;
  background: transparent;
`

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 23px;
  background: transparent;
  color: #1b2121;
  border: none;
  position: relative;
  margin: 15px;
  top: -200px;

  outline: none;
`
export const ColorBox = styled.div`
  height: 32vh;
  width: 38vw;
  background: rgba(122, 5, 143, 0.75);
  display: inline-block;
  position: relative;
  top: 10px;
`

export const ClothingWrapper = styled.div`
  width: 40vw;
  height: 100vh;
  float: right;
  position: relative;
  top: -100vh;
  text-align: center;
`
export const ItemDiv = styled.div`
  width: 40vw;
`
export const Img = styled.img`
  height: 32vh;
  position: static;
  overflow: hidden;
`
export const Box = posed(Img)({
  idle: {scale: 1},
  hovered: {scale: 1.75}
})

export const PosedImg = posed(Img)({
  zoomedIn: {
    position: 'fixed',
    top: '200px',
    left: '700px',
    bottom: 0,
    right: 0,
    scale: 2.2,
    flip: true
  },
  zoomedOut: {
    position: 'static',
    height: '32vh',
    scale: 1.0,
    flip: true
  }
})
