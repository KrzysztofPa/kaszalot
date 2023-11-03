import {useNavigate} from "react-router-dom";
import {Routing} from "../../services/Routing";
import {Baner, DefaultButton} from "../Global.style";
import {MainContent} from "./Main.style";

export const Main = (): JSX.Element => {

    const navigator = useNavigate();

    return <MainContent>
        <Baner>
            <h3>Bed shop</h3>
            <p>Twój sklep z łózkami</p>
            <DefaultButton onClick={() => navigator(Routing.shop)}>Przeglądaj ofertę</DefaultButton>
            <DefaultButton onClick={() => navigator(Routing.contact)}>Skontaktuj się z nami</DefaultButton>
        </Baner>
    </MainContent>
}
