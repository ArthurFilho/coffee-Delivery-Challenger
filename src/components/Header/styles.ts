import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.white};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContent = styled.div`
  display: flex;
`

export const TextLogo = styled.p`
  margin-left: 5px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`
interface BackgroundColor {
backgroundColor?: "purple" | "gold";
}

export const IconsHeader = styled.button<BackgroundColor>`
  display: flex;
  margin-right: 10px;
  border-radius: 6px;
  padding: 1.25rem;
  border: 0;
  font-weight: bold;
  height: 50px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  color: #4B2995; 

           

  background-color: ${props => props.backgroundColor == 'purple' ? props.theme['purple-100'] : props.theme['gold-100'] }
`
