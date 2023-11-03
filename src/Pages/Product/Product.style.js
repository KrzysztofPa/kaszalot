import styled from 'styled-components'
import { DefaultButton } from '../Global.style'

export const ProductContent = styled.div`
  height: calc(100vh - 3rem);
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  margin-top: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ProductLeft = styled.div`


`
export const ProductImage = styled.img`
  width: calc(80% - 5rem);
  margin: 5rem;
`

export const ProductRight = styled.div`


`

export const ProductDescription = styled.div`
  background-color: #f5f4f1;
  font-size: 0.9rem;
  margin: 3rem 5rem;
  padding: 2rem;
  border-radius: 1rem;
`

export const ProductName = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
`

export const ProductPrice = styled.p`

`

export const BuyButton = styled(DefaultButton)`
  background-color: #2d6be6;
  color: white;
  width: calc(100% - 5rem);
  padding: 1rem 0;
  font-size: 1.3rem;
  margin: 0 5rem;
`


export const DeleteButton = styled(DefaultButton)`
  background-color: red;
  color: white;
  width: calc(100% - 5rem);
  padding: 1rem 0;
  font-size: 1.3rem;
  margin: 0.2rem 5rem;
`