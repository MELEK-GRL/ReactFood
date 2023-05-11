import Header from "../header/index"
import Footer from "../footer/index"
import Routers from "../../../routes/Routers"

export default function Layout() {
    return (
        <div className="w-full flex flex-col  justify-between items-center">
            <Header />
            <Routers/>
            <Footer />
        </div>
    )
}