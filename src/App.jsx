import { Outlet } from "react-router-dom"
import { Layout } from "./components/layouts/layout"

function App() {

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
