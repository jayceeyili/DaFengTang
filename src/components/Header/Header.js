import React from 'react'
import { IndexLink, Link } from 'react-router'
// import { Link } from 'react-router-dom'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import './Header.scss'

export const Header = () => (
  <Segment inverted>
    <Menu inverted secondary>
      <Menu.Item as={IndexLink} to='/'>
        <Icon name='home' />
        主页
      </Menu.Item>
      <Menu.Item as={Link} to='/counter'>
        <Icon name='image' />
        作品集
      </Menu.Item>
      <Menu.Item as={Link} to='/counter'>
        <Icon name='newspaper' />
        故事
      </Menu.Item>
      <Menu.Item as={Link} to='/counter'>
        <Icon name='video play' />
        视频资料
      </Menu.Item>
    </Menu>
  </Segment>
)

export default Header

// <div>
//   <h1>React Redux Starter Kit</h1>
//   <IndexLink to='/' activeClassName='route--active'>
//     Home
//   </IndexLink>
//   {' · '}
//   <Link to='/counter' activeClassName='route--active'>
//     Counter
//   </Link>
// </div>
