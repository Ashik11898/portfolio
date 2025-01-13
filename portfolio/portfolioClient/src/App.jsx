import NavbarSection from './sections/NavbarSection'
import './App.css'
import './assets/styles/sectionStyles.css'
import DeveloperCard from './sections/DeveloperCard'
import BlogDetails from './sections/BlogDetails'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import SkillsPage from './pages/SkillsPage'
import FormPage from './pages/FormPage'

function App() {

  return (
    <div className='app-parent'>
      
      <div className='load-pages'>
        <NavbarSection/>
        <div className='home-block'>
          <DeveloperCard/>
          <div className='left-container'>
            <BlogDetails/>
            <SkillsPage/>
            <ProjectsPage/>
            <ExperiencePage/>
            <FormPage/>
          </div> 
        </div>
      </div>
      
    </div>
  )
}

export default App
