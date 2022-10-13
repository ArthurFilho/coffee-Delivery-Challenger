import { Buttons, HeaderContainer, HeaderContent, IconsHeader, LogoContent } from "./styles";
import Logo from '../../assets/Logo.svg'
import Cart from '../../assets/ShoppingCart.svg'
import Icon from '../../assets/Icon.svg'

export function Header() {
    return(
        <HeaderContainer>
        <HeaderContent>
        <LogoContent>
          <img src={Logo}/>
        </LogoContent>
        <Buttons>
        <IconsHeader backgroundColor="purple"> <img src={Icon}/> Salvador, BA</IconsHeader>
        <IconsHeader backgroundColor="gold"><img src={Cart}/></IconsHeader>
        </Buttons>
        </HeaderContent>
        </HeaderContainer>
    )
}