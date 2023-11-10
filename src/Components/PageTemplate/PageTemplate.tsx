import AppBar from "../TopMenu/TopMenu";

interface OwnProps {
    Element: JSX.Element
}

export const PageTemplate = ({Element}: OwnProps): JSX.Element => {

    return <>
        <AppBar/>
        {Element}
    </>
}
