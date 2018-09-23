import React from 'react'
import styled from 'styled-components'
import {Login} from './auth-form'

const Wrapper = styled.div`
  display: inline-block;
  border: 1px solid #1b2121;
  width: 30vw;
  position: relative;
  padding: 10px;
  top: 100px;
`

const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  width: 33vw;
  display: inline-block;
  position: relative;
`
const Psmall = styled(P)`
  font-family: 'PT Serif', serif;
  font-size: 15px;
  font-weight: 400;
`

export const GetStarted = () => {
  return (
    <Wrapper>
      <Psmall>It's pretty simple:</Psmall>
      <P>1.Pick your mood</P>
      <P>2.Dress Me</P>
      <Psmall>More features coming soon.</Psmall>
    </Wrapper>
  )
}
