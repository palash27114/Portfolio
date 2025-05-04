import Logosection from './components/Logosection'
import NavBar from './components/NavBar'
import ExperienceSection from './sections/ExperienceSection'
import FeatureCard from './sections/FeatureCard'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Skill from './sections/Skill'


const App = () => {
    return (
        <>
            <NavBar/>
           <Hero/>
           <Showcase/>
           <Logosection/>
           <FeatureCard/>
            <ExperienceSection/>
            <Skill/>
            <Footer/>
        </>
    )
}

export default App