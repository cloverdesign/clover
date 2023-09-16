import { Footer } from "../global/footer"
import { Nav } from "../global/nav"

export const Layout = ({ children }) => {
    return (
        <main className="font-body">
            <Nav />
            {children}
            <Footer />
        </main>
    )
}