import Header from "../TopMenu/TopMenu";
import Footer from "../Footer/Footer";

interface OwnProps {
    Element: JSX.Element
}

export const PageTemplate = ({Element}: OwnProps): JSX.Element => {

    return <>
        <Header/>
        {Element}
        <Footer/>
    </>
}
