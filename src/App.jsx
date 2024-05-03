import React, { useState, useEffect } from "react"
import "./App.css"

import { Vanta, Portfolio, Experience, Contact, Skills, About } from "./pages"
import {
  Navbar,
  Scroll,
  VerticalLineRight,
  VerticalLineLeft,
  Footer,
} from "./components"

import PropagateLoader from "react-spinners/PropagateLoader"

export const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <PropagateLoader color={"#00abf0"} loading={loading} size={30} />
        </div>
      ) : (
        <div className="margin">
          <Navbar />
          <VerticalLineLeft />
          <VerticalLineRight />
          <Scroll />
          <Vanta />
          <Portfolio />
          <Experience />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  )
}
