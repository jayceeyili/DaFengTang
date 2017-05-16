import React from 'react'
import { Image } from 'semantic-ui-react'
import fakeImg from '../assets/image.png'
// import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <Image src={fakeImg} fluid />
)

export default HomeView


// <div>
//   <h4>Welcome!</h4>
//   <img
//     alt='This is a duck, because Redux!'
//     className='duck'
//     src={DuckImage} />
// </div>
