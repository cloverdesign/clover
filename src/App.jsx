import { Outlet, ScrollRestoration } from "react-router-dom"
import { Layout } from "./components/layouts/layout"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Lenis from "@studio-freight/lenis"
import ScrollToTop from "./components/global/scrollToTop"

function App() {

  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return (
    <div className="relative">
      <ScrollRestoration />
      <ScrollToTop />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}

export default App
