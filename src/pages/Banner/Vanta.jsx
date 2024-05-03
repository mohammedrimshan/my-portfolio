import React from "react"
import { useState, useEffect, useRef } from "react"
import WAVES from "vanta/dist/vanta.waves.min"
import { Banner } from "./Banner"

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          waveHeight: 5.0,
          waveSpeed: 0.55,
          color: 0xd1b,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={myRef} className="Vanta">
      <Banner />
    </div>
  )
}

export default Vanta
