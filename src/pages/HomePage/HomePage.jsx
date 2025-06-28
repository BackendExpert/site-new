import React from 'react'
import AboutUs from './AboutUs'
import ServicesOverview from './ServicesOverview'
import WhyChooseUs from './WhyChooseUs'
import TechnologiesWeUse from './TechnologiesWeUse'
import ProjectsShowcase from './ProjectsShowcase'
import OurTeam from './OurTeam'
import ContactUs from './ContactUs'
import CTASection from './CTASection'
import HeroSection from './HeroSection'

const HomePage = () => {
  return (
    <div className='-mt-4'>
        <HeroSection />
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