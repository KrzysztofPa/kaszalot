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
  min-height: 15rem;
  margin-bottom: 2rem;
`

export const ContactContent = styled(Content)`
  background-size: cover;
  margin: 0;
  min-height: 100vh;
`

export const SMLogo = styled.a`
width: 2rem;
height:2rem;
margin:1rem;
`

export const SMImg = styled.img`
width: 2rem;
height:2rem;
`