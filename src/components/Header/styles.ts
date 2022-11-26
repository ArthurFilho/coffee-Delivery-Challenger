import styled from 'styled-components'
import * as Switch from '@radix-ui/react-switch';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.white};
  padding: 2.5rem 0 7.5rem;
  height: 100px;
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

export const Badge = styled.div`
  background-color: ${props => props.theme['gold-400']};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
`

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
  position: relative;
  cursor: pointer;
  color: ${props => props.theme['purple-300']}; 

           

  background-color: ${props => props.backgroundColor == 'purple' ? props.theme['purple-100'] : props.theme['gold-100'] }
`

