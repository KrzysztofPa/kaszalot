import {TopMenu} from "../TopMenu/TopMenu";

interface OwnProps {
    Element: JSX.Element
}

export const PageTemplate = ({Element}: OwnProps): JSX.Element => {

    return <>
        <TopMenu/>
        {Element}
    </>
}
