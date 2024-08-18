import React from 'react'
import Layout from '../components/Layout'
import MainpageLayout from '../components/MainpageLayout'
import EndTags from '../components/EndTags'
import Description from '../components/aboutpage/Description'
import Benifits from '../components/aboutpage/Benifits'
import AboutCarousal from '../components/aboutpage/AboutCarousal'
const About = () => {
  return (
    <>
        
        <MainpageLayout className=" md:mr-[0rem]">
        <Description/>
            
        </MainpageLayout>
        <MainpageLayout>
          <Benifits/>
          <AboutCarousal/>
        <EndTags/>
        </MainpageLayout>
        
    </>
  )
}

export default About