import { Badge, Buttons, HeaderContainer, HeaderContent, IconsHeader, LogoContent } from "./styles";
import Logo from '../../assets/Logo.svg'
import Cart from '../../assets/ShoppingCart.svg'
import Icon from '../../assets/Icon.svg'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextContents } from "../../context/Context";


export function Header() {

    const { cart } = useContext(ContextContents)

    return(
        <HeaderContainer>
        <HeaderContent>
        <LogoContent>
         <NavLink to="/"> <img src={Logo}/> </NavLink>
        </LogoContent>
        <Buttons>
        <IconsHeader backgroundColor="purple"> <img src={Icon}/> Salvador, BA</IconsHeader>
        <NavLink to="/checkoutpage"> 
            <IconsHeader backgroundColor="gold">
                <img src={Cart}/>
                {cart.coffees.length >= 1 ? <Badge> {cart.coffees.length} </Badge> : null }
            </IconsHeader>  
        </NavLink>
        </Buttons>
        </HeaderContent>
        </HeaderContainer>
    )
}