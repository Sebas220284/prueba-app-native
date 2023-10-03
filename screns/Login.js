import  react,{useState} from "react";
import { StyledContainer,InnerContainer,PageLogo,PageTitle,SubTitle,StyledFormArea,LeftIcon,StyledInputLabel,StyledButton,StylesTextInput,RightIcon,Colors,ButtonText,MsBox,Line, ExtraText,ExtraView,TextLink,TextLinkContent } from "../src/components/styles";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
//icons
import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons'
import KeyBoardAvoind from "../src/components/KeyBoard";
import { View,ActivityIndicator } from "react-native";
import axios from "axios";

//colors
const {brand,darkLight,primary}=Colors
const Login=({navigation})=>{

    const [hidePassword, setHidePassword]=useState()
    const[message,setMessage]=useState()
    const [messageType,setMessageType]=useState()
    const handleLogin=(crendentials,setSubmitting)=>{
        handleMessage(null)
const  url='localhost:4000'

axios.post(url,crendentials).then((response)=>{const result=response.data;
const {message,status,data}=result;

if(status !=='SUCCESS'){
 handleMessage(message,status);
  
}else{
  navigation.navigate('Welcome',{ ...data[0] }); 
 
}
setSubmitting(false)
}).catch(error=>{
    console.log(error.JSON())
    setSubmitting(false)
    handleMessage('AAAA')
});
    };
    const handleMessage=(message,type='FAILED')=>{
setMessage(message);
setMessageType(type);

    }
    return(
        <KeyBoardAvoind>
<StyledContainer>
    <StatusBar style="dark"></StatusBar>
    <InnerContainer>
        <PageLogo source={require('./../assets/buss-react.jpeg')}>

        </PageLogo>
        <PageTitle>TUXBUSS</PageTitle>
        <SubTitle>Iniciar Sesion</SubTitle>

        <Formik initialValues={{email:'',password:''}}
        onSubmit={(values,{setSubmitting})=>{
           if(values.email =='' || values.password==''){
            handleMessage('plis fill all the fields');
            setSubmitting(false)
           }else{
            handleLogin(values,setSubmitting)

           }
        }}>{({handleChange,handleBlur,handleSubmit,values,isSubmitting})=>(
           //220/284
            <StyledFormArea>
                 <MyTextInput
            label="Correo Electronico"
            icon="mail"
            placeholder="ejemplo220@gmail.com"
            placeholderTextColor={darkLight}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"

            />
     





               <MyTextInput
            label="Contraseña"
            icon="lock"
            placeholder="* * * * * * *"
            placeholderTextColor={darkLight}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={hidePassword}
            isPassword={true}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}

            />
            <MsBox type={messageType}>{message}</MsBox>
        {!isSubmitting &&<StyledButton onPress={handleSubmit}>
<ButtonText>
                Iniciar Sesion
            </ButtonText>
</StyledButton>}
{isSubmitting &&<StyledButton disabled={true} >
<ActivityIndicator size={"large"} color={primary}/>
</StyledButton>}
<Line/>
           
<StyledButton google={true}  onPress={handleSubmit}>
    <Fontisto name="google" color={primary} size={25}/>
<ButtonText google={true}>
                Registrarse con Google
            </ButtonText>
</StyledButton>
    <ExtraView>
        <ExtraText>No tienes cuenta?</ExtraText>
        <TextLink onPress={()=>navigation.navigate('Signup')}>
            <TextLinkContent>Registrate</TextLinkContent>
        </TextLink>
        </ExtraView> 

            </StyledFormArea>
        )}

        </Formik>

    </InnerContainer>
</StyledContainer>
</KeyBoardAvoind>
    );
}
const MyTextInput=({label,icon, isPassword,hidePassword,setHidePassword,...props})=>{
return(
    <View>
<LeftIcon>
<Octicons name={icon} size={30} color={brand}/>
</LeftIcon>
<StyledInputLabel>{label}</StyledInputLabel>
<StylesTextInput {...props}></StylesTextInput>
{isPassword && (
    <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
<Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darkLight}></Ionicons>
    </RightIcon>
)}
    </View>
);
};
export default Login