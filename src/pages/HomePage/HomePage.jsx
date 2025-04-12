import React from 'react'
import Slider from './Slider'
import AboutUs from './AboutUs'
import ServicesOverview from './ServicesOverview'
import WhyChooseUs from './WhyChooseUs'
import TechnologiesWeUse from './TechnologiesWeUse'
import ProjectsShowcase from './ProjectsShowcase'
import OurTeam from './OurTeam'
import ContactUs from './ContactUs'
import CTASection from './CTASection'

const HomePage = () => {
  return (
    <div className='-mt-4'>
        <Slider />
        <AboutUs />
        <ServicesOverview />
        <WhyChooseUs />
        <TechnologiesWeUse />
        <ProjectsShowcase />
        <OurTeam />
        {/* <ContactUs /> */}
        <CTASection />
    </div>
  )
}

export default HomePage