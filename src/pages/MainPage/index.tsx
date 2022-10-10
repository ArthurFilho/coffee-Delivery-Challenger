import { ContainerMainPage, MainImage, TextContainer, MainText, SubText, TextIcons, ContainerIcons} from "./styles";
import { Header } from '../../components/Header'
import Image from "../../assets/coffee.svg"
import IconUm from "../../icons/IconUm.svg"
import IconDois from "../../icons/IconDois.svg"
import IconTrês from "../../icons/IconTrês.svg"
import IconQuatro from "../../icons/IconQuatro.svg"

export function MainPage () {
    return(
        <div>

        <Header />

        <ContainerMainPage>

            <TextContainer>
               
               <MainText> Encontre o café perfeito para qualquer hora do dia </MainText>

            <SubText> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora </SubText>
           

          <ContainerIcons> <TextIcons> <img src={IconUm}/> &nbsp; <p> Compra simples e segura </p> </TextIcons> <TextIcons> <img src={IconDois}/> &nbsp; <p> Embalagem mantém o café intacto</p> </TextIcons> </ContainerIcons>

          <ContainerIcons> <TextIcons> <img src={IconTrês}/> &nbsp;  <p> Entrega rápida e rastreada </p> </TextIcons> <TextIcons> <img src={IconQuatro}/> &nbsp; <p> O café chega fresquinho até você</p> </TextIcons> </ContainerIcons>

            </TextContainer>
            <MainImage><img src={Image}/></MainImage>
        </ContainerMainPage>
        </div>
    )
}