import  react,{useState} from "react";
import { InnerContainer,StyledFormArea,LeftIcon,StyledInputLabel,StyledButton,StylesTextInput,RightIcon,Colors,ButtonText,MsBox,Line, ExtraText,ExtraView,TextLink,TextLinkContent, WelcomeContainer } from "../src/components/styles";
import { StatusBar } from "expo-status-bar";

//icons


//colors
const {brand,darkLight,primary}=Colors
const Welcome=({navigation})=>{

    const [hidePassword, setHidePassword]=useState()
    return(
<InnerContainer>
    <StatusBar style="dark"></StatusBar>
 
     

    
       
        

     
       <WelcomeContainer>
            <StyledFormArea>
                <Line/>
              
   
<StyledButton onPress={()=>{navigation.navigate('Login')}}>
<ButtonText>
           Cerrar Sesion
            </ButtonText>
</StyledButton>

           

   
    

            </StyledFormArea>
    
</WelcomeContainer>
      

</InnerContainer>

    );
};

export default Welcome