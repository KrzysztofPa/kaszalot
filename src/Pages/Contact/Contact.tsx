import {Baner, DefaultButton} from "../Global.style";
import {ContactContent, ContactForm, ContactInput, ContactTextArea, FBIMG, FBLogo, SendMassage} from "./Contact.style";
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
            <FBLogo href='https://www.facebook.com/'>
                <FBIMG src='https://www.facebook.com/images/fb_icon_325x325.png'></FBIMG>
            </FBLogo>
        </Baner>

    </ContactContent>
}
