import { Outlet } from "react-router-dom"
import { Layout } from "./components/layouts/layout"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Lenis from "@studio-freight/lenis"

function App() {

  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
