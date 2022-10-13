import { ContainerMainPage, MainImage, TextContainer, MainText, SubText, TextIcons, ContainerIcons} from "./styles";
import { Header } from '../../components/Header'
import Image from "../../assets/HomePage/coffee.svg"
import IconUm from "../../assets/HomePage/IconUm.svg"
import IconDois from "../../assets/HomePage/IconDois.svg"
import IconTrês from "../../assets/HomePage/IconTrês.svg"
import IconQuatro from "../../Assets/HomePage/IconQuatro.svg"
import { ProductsForSale } from "../../components/ProductsForSale"

export function HomePage () {
    return(
        <div>

        <Header />

        <ContainerMainPage>

            <TextContainer>
               
               <MainText> Encontre o café perfeito para qualquer hora do dia </MainText>

            <SubText> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora </SubText>
           

        <ContainerIcons> 
            <TextIcons> 
                <img src={IconUm}/> 
                &nbsp; 
                <p> Compra simples e segura </p> 
            </TextIcons> 
            
            <TextIcons> 
                <img src={IconDois}/> 
                &nbsp; 
                <p> Embalagem mantém o café intacto</p> 
            </TextIcons> 
        </ContainerIcons>

          <ContainerIcons> <TextIcons> <img src={IconTrês}/> &nbsp;  <p> Entrega rápida e rastreada </p> </TextIcons> <TextIcons> <img src={IconQuatro}/> &nbsp; <p> O café chega fresquinho até você</p> </TextIcons> </ContainerIcons>

            </TextContainer>
            
            <MainImage><img src={Image}/></MainImage>
        
        </ContainerMainPage>

        <ProductsForSale />

        </div>
    )
}