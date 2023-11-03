import styled from 'styled-components'

export const colorMain = '#f1f1f6'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  transition: background 250ms;
`

export const DefaultButton = styled.button`
  background: inherit;
  color: #2d6be6;
  text-transform: uppercase;
  border: none;
  padding: .5rem;
  font-weight: bold;
  border-radius: .4rem;

  &:hover {
    background-color: #89aef5;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`

export const Baner = styled.div`
  opacity: 0.8;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #f5f4f1;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e4e2e1;
`
