import {Baner, Content} from "../Global.style";
import axios from "axios";
import {baseUrl} from "../../index";
import {Routing} from "../../services/Routing";
import {useNavigate} from "react-router-dom";
import {AddBaner, AddButton, AddLabel} from "./Add.style";
export const Add = ():JSX.Element=>{

    const navigator = useNavigate();

    let name ='';
    let imageUrl ='';
    let description ='';
    let price = 0;

    const sendData = ()=>{
        axios.post(`${baseUrl}/beds`, {
            "name": name,
            "description": description,
            "price" : price,
            "url": imageUrl
        }
        )
            .then((res)=>{
                navigator(Routing.shop)
            })
    }


    return <Content>
        <AddBaner>
            <AddLabel>
                Nazwa produktu:
                <input type="text" onChange={(e)=>{name = e.target.value}} />
            </AddLabel>
            <AddLabel>
                Opis Produktu:
                <input type="text" onChange={(e)=>{description = e.target.value}} />
            </AddLabel>
            <AddLabel>
                Cena:
                <input type="number" onChange={(e)=>{price = Number(e.target.value)}} />
            </AddLabel>
            <AddLabel>
                Url zdjecia:
                <input type="text" onChange={(e)=>{imageUrl = e.target.value}} />
            </AddLabel>
        <AddButton onClick={sendData}>Dodaj produkt</AddButton>
        </AddBaner>
    </Content>
}