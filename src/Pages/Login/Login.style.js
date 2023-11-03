import styled from 'styled-components'
import { Content } from '../Global.style'

export const ErrorAlert = styled.text`
  color: red;
`

export const LoginContent = styled(Content)`
  background: url("/login_background.jpg");
  background-size: cover;
  margin: 0;
  min-height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  margin: 0.2rem;

`
