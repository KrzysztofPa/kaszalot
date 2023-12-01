import {Baner, DefaultButton} from "../Global.style";
import {ContactContent, ContactForm, ContactInput, ContactTextArea, SMImg, SMLogo, SendMassage} from "./Contact.style";
import {useState} from "react";


export const Contact = (): JSX.Element => {

    const [sendMassage, setSendMassage] = useState('')

    const setMassage = (e: MouseEvent) => {
        e.preventDefault();
        setSendMassage('Wiadomośc została wysłana')
    }

    return <ContactContent>
        <Baner>
            <h2>Skontaktuj się z nami</h2>
            <p>Wyślij nam wiadomość, lub odwiedź nasze social-media, odpowiemy tak szybko jak to możliwe</p>
            <ContactForm>
                <label htmlFor='email'>
                    Mail:
                </label>
                <ContactInput type='email' id='email'/>
                <label htmlFor='massage'>
                    Wiadomość:
                </label>
                <ContactTextArea id='massage'/>

                <DefaultButton onClick={(e: any) => setMassage(e as unknown as MouseEvent)}>Wyślij</DefaultButton>

                <SendMassage>
                    {sendMassage}
                </SendMassage>
            </ContactForm>
            <SMLogo href='https://www.facebook.com/'>
                <SMImg src='https://www.facebook.com/images/fb_icon_325x325.png'></SMImg>
            </SMLogo>
            <SMLogo href='https://www.x.com/'>
                <SMImg src='https://img.freepik.com/darmowe-wektory/nowy-projekt-ikony-x-logo-twittera-2023_1017-45418.jpg?w=2000'></SMImg>
            </SMLogo>
            <SMLogo href='https://www.instagram.com/'>
                <SMImg src='https://cdn.iconscout.com/icon/free/png-256/free-instagram-216-721958.png'></SMImg>
            </SMLogo>
        </Baner>

    </ContactContent>
}
