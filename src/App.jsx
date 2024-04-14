import { Outlet, ScrollRestoration } from "react-router-dom";
import { Layout } from "./components/layouts/layout";
import ScrollToTop from "./components/global/scrollToTop";
import Preloader from "./components/global/preloader";

function App() {
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
