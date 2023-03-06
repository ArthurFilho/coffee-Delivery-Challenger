import { ContainerMainPage, MainImage, TextContainer, MainText, SubText, TextIcons, ContainerIcons, ContainerAllThings} from "./styles";
import { Header } from '../../components/Header'
import Image from "../../assets/HomePage/coffee.svg"
import IconUm from "../../assets/HomePage/IconUm.svg"
import IconDois from "../../assets/HomePage/IconDois.svg"
import IconTrês from "../../assets/HomePage/IconTrês.svg"
import IconQuatro from "../../assets/HomePage/IconQuatro.svg"
import { ProductsForSale } from "../../components/ProductsForSale"

export function HomePage () {
    return(
        <ContainerAllThings>

        <Header />

        <ContainerMainPage >

            <TextContainer>
               
               <MainText> Encontre o café perfeito <br /> para qualquer hora do dia </MainText>

            <SubText> Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora </SubText>
           

        <ContainerIcons> 
            <TextIcons> 

                <div>
                    <img src={IconUm}/> 
                    <p> Compra simples e segura </p> 
                </div>

                <div>
                    <img src={IconTrês}/>  
                    <p> Entrega rápida e rastreada </p>    
                </div> 

            </TextIcons> 
            <TextIcons> 
                
                <div>
                    <img src={IconDois}/>  
                    <p> O café chega intacto </p> 
                </div>
             
                <div>
                    <img src={IconQuatro}/> 
                    <p> O café chega fresquinho </p>    
                </div> 

              </TextIcons> 
            </ContainerIcons>

            </TextContainer>
            
            <MainImage><img src={Image}/></MainImage>
        
        </ContainerMainPage>

        <ProductsForSale />

        </ContainerAllThings>
    )
}