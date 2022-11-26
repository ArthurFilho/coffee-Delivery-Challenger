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

export const ButtonChangeColor = styled(Switch.Root)`
  width: 42px;
  height: 25px;
  background-color: blue;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px var(--blackA7);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  :focus {
  box-shadow: 0 0 0 2px black;
}

[data-state='checked'] {
  background-color: black;
}
`

export const BallMov = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px var(--blackA7);
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

[data-state='checked'] {
  transform: translateX(19px);
}
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
  cursor: pointer;
  color: #4B2995; 

           

  background-color: ${props => props.backgroundColor == 'purple' ? props.theme['purple-100'] : props.theme['gold-100'] }
`

