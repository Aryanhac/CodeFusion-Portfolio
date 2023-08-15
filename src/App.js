import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import Services from './Components/Services'
import Project from './Components/Project'
import Statics from './Components/Statics'
import Thoughts from './Components/Thoughts'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Introduction></Introduction>
     <Services></Services>
     <Project></Project>
     <Statics></Statics>
     <Thoughts></Thoughts>
     <Footer></Footer>
    </div>
  );
}

export default App;
