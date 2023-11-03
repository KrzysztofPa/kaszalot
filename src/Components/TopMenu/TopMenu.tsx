import {useNavigate} from "react-router-dom";
import {Routing} from "../../services/Routing";
import {Image, MenuContent, NavButton} from "./TopMenu.style";

export const TopMenu = (): JSX.Element => {

    const navigator = useNavigate()

    return <>
        <MenuContent>
            <Image src='/logo.jpg' alt='logo' onClick={() => navigator(Routing.main)}/>
            <div>
                <NavButton onClick={() => navigator(Routing.main)}> Strona główna</NavButton>
                <NavButton onClick={() => navigator(Routing.shop)}> Sklep</NavButton>
                <NavButton onClick={() => navigator(Routing.contact)}> Kontakt</NavButton>
            </div>
        </MenuContent>
    </>
}
