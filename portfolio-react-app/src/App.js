import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/HeaderComponent/header';
import Footer from './components/FooterComponent/footer';
import Education from './components/EducationComponent/education';
import Experience from './components/ExperienceComponent/experience';
import Projects from './components/ProjectsComponent/projects';

import TechStack from './components/TechComponent/techstack';



function App() {
  return (
    <>
      {/*  

        Home - brief intro about me
        Education - Current school education
        Experience - 
        Projets
        Tech Stack
      
      */}
      <Header />
      <Experience />

    </>
    
  );
}

export default App;
