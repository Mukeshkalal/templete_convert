import Header from "./Header";
import Footer from "./Footer";
export default function Layout(props) {
    return (
        <>
            <Header />
            <main style={{ minHeight: '70vh' }}>{props.children}</main>
            <Footer />
        </>
    )
}
