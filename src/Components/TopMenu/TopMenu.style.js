import styled from 'styled-components'

export const MenuContent = styled.div`
  width: 90%;
  padding: 0 5%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  background-color: #f5f4f1;
  border-bottom: 1px solid #e4e2e1;
  position: absolute;
  opacity: 0.8;
  top: 0;
`

export const NavButton = styled.button`
  border: none;
  height: 100%;
  margin: 0 15px;
  font-size: 1.2rem;
  background-color: inherit;
  color: #55545a;

  &:hover {
    background-color: #e4e2e1;
    cursor: pointer;
  }
`

export const Image = styled.img`
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`
