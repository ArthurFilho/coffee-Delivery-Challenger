import { ContainerItemsProduct, ContainerProducts, HeaderText, ItemsProduct } from "./styles";

export function ProductsForSale(){
    return(
        <ContainerProducts>
            <HeaderText>Nossos cafés</HeaderText>

         <ContainerItemsProduct> <ItemsProduct>Expresso Tradicional</ItemsProduct> </ContainerItemsProduct>
        </ContainerProducts>
    )
}