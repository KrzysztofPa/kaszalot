import styled from 'styled-components'
import {Baner, DefaultButton} from "../Global.style";


export const AddBaner = styled(Baner)`
display:flex;
flex-direction: column;
justify-content: center
align-items: space-between;
 gap: 1rem;
`

export const AddButton = styled(DefaultButton)`
  background-color: #2d6be6;
  color: white;
  width: calc(100% - 5rem);
  padding: 1rem 0;
  font-size: 1.3rem;
  align-self:center;

`

export const AddLabel = styled.label`
    display:flex;
    justify-content: space-between;
    align-items: space-between;
    margin: 1rem, 1rem;
    `