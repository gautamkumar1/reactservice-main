import React from 'react'
import Common from './Common'
import abouts from '../assets/about.jpg'

const About = () => {
  return (
    <Common name='Welcome to Our About Page' imgsrc={abouts} visit="/contact" btnName="Contact Now"/>
  )
}

export default About