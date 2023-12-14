import styled from 'styled-components'

import {Content, DefaultButton} from '../Global.style'

export const ShopContent = styled(Content)`
  background-color: #ffffff;
  background-size: cover;
  margin: 0;
  min-height: 100vh;
`

export const ProductList = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;

  @media (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ListProductItem = styled.div`
  background-color: #f5f4f1;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #e4e2e1;
  transition: box-shadow .6s;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 10px 8px 24px -6px rgba(66, 68, 90, 1);
    -moz-box-shadow: 10px 8px 24px -6px rgba(66, 68, 90, 1);
    box-shadow: 10px 8px 24px -6px rgba(66, 68, 90, 1);
  }
`

export const ListProductImage = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 1rem;
  border: 1px solid #e4e2e1;
`

export const ListProductName = styled.p`

`

export const ListProductPrice = styled.p`
  font-weight: bold;
`
export const AddProduct = styled(DefaultButton)`
  background-color: #2d6be6;
  color: white;
  width: 50%;
  padding: 1rem 0;
  font-size: 1.3rem;
  position:absolute;
  bottom:5%;
  left:50%;
  transform: translate(-50%, 0);
  z-index: 5;
`