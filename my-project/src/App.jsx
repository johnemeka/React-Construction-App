
import About from "./Components/About/About"
import ActiveBanner from "./Components/ActiveBanner/ActiveBanner"
import Articles from "./Components/Articles/Articles"
import Banner from "./Components/Banner/Banner"
import Features from "./Components/Features/Features"
import Footer from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import Project from "./Components/Projects/Project"
import Results from "./Components/Results/Results"

function App() {


  return (
    <>
    <div className="w-full flex flex-col">
      <Header/>
      <Features/>
      <About/>
      <Project/>
      <Banner/>
      <Articles/>
      <Results/>
      <ActiveBanner/>
      <Footer/>
    </div>
    </>
  )
}

export default App
