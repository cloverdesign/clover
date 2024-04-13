import { Outlet, ScrollRestoration } from "react-router-dom";
import { Layout } from "./components/layouts/layout";
import ScrollToTop from "./components/global/scrollToTop";

function App() {
  return (
    <div className="relative">
      <ScrollRestoration />
      <ScrollToTop />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
