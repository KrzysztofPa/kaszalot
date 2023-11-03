import styled from 'styled-components'
import { Content } from '../Global.style'

export const ContactForm = styled.form`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SendMassage = styled.p`
  color: green;
  font-weight: bold;
`

export const ContactInput = styled.input`
  min-width: 14rem;
`

export const ContactTextArea = styled.textarea`
  min-width: 14rem;
`

export const ContactContent = styled(Content)`
  background: url("/contact_background.jpg") bottom;
  background-size: cover;
  margin: 0;
  min-height: 100vh;
`

export const FBLogo = styled.a`
width: 2rem;
height:2rem;
margin:auto;

`

export const FBIMG = styled.img`
    width: 2rem;
height:2rem;
    
    `