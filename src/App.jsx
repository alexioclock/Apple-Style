import Banner from "./components/Banner"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Banner />
      <Model />
      <Features />
    </main>
  )
}

export default App
