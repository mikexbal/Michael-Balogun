import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/HeaderComponent/header';
import Experience from './components/ExperienceComponent/experience';
import Projects from './components/ProjectsComponent/projects';





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
      <Projects />

    </>
    
  );
}

export default App;
