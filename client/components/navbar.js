import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import styled from 'styled-components'
import {Menu, Icon} from 'semantic-ui-react'

const Container = styled.div`
  margin-right: 15px;
  height: 5vh;
`
const Header = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: -10px;
  margin-top: 10px;
  padding: 5px;
  margin-left: 15px;
  letter-spacing: 0px;
`

const Navbar = ({handleClick, isLoggedIn}) => (
  <Container>
    <Menu secondary>
      <Header>Your everyday outfit generator</Header>
      {isLoggedIn ? (
        <Menu.Menu position="right">
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">Home</Link> */}
          <Menu.Item href="#" onClick={handleClick}>
            <Icon name="user circle" size="large" />
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right">
          {/* The navbar will show these links before you log in */}
          <Link as={Link} to="/login">
            Login
          </Link>
          <Link as={Link} to="/signup">
            Sign Up
          </Link>
        </Menu.Menu>
      )}
    </Menu>
  </Container>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
