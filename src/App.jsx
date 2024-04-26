import { Outlet, ScrollRestoration } from "react-router-dom";
import { Layout } from "./components/layouts/layout";
import ScrollToTop from "./components/global/scrollToTop";
import Preloader from "./components/global/preloader";
import gsap from "gsap";

function App() {
  gsap.config({
    force3D: false,
  });

  return (
    <div className="relative">
      <Preloader />
      <ScrollRestoration />
      <ScrollToTop />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
