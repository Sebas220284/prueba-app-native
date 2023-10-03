import  react,{useState} from "react";
import { StyledContainer,InnerContainer,PageLogo,PageTitle,SubTitle,StyledFormArea,LeftIcon,StyledInputLabel,StyledButton,StylesTextInput,RightIcon,Colors,ButtonText,MsBox,Line, ExtraText,ExtraView,TextLink,TextLinkContent } from "../src/components/styles";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
//icons
import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons'

import KeyBoardAvoind from "../src/components/KeyBoard";

import { View,TouchableOpacity } from "react-native";

//colors
const {brand,darkLight,primary}=Colors
const Signup=({navigation})=>{
//date


    const [hidePassword, setHidePassword]=useState()
    const [show,setShow]=useState(false)
    const [date,setDate]=useState(new Date(2000,0,1));

    const [dob,setDob]=useState()
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
        console.log("Fecha seleccionada:", currentDate);
      };
      
  
      
      
    return(
        <KeyBoardAvoind>
<StyledContainer>
    <StatusBar style="dark"></StatusBar>
    <InnerContainer>
        
        <PageTitle>TUXBUSS</PageTitle>
        <SubTitle>Registrarse</SubTitle>


        <Formik initialValues={{email:'',password:'',fullName:'',dateOfBirth:'',confirmPassword:''}}
        onSubmit={(values)=>{
            console.log(values)
            navigation.navigate('Welcome')
        }}>{({handleChange,handleBlur,handleSubmit,values})=>(
           //220/284
            <StyledFormArea>
                 <MyTextInput
            label="Nombre completo"
            icon="person"
            placeholder="ejemplo"
            placeholderTextColor={darkLight}
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            value={values.fullName}
      

            />
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
               <MyTextInput
            label=" Confirmar Contraseña"
            icon="lock"
            placeholder="* * * * * * *"
            placeholderTextColor={darkLight}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry={hidePassword}
            isPassword={true}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}

            />
            <MsBox>...</MsBox>
<StyledButton onPress={handleSubmit}>
<ButtonText>
                Registrarse
            </ButtonText>
</StyledButton>
<Line/>
           

    <ExtraView>
        <ExtraText>Ya tienes cuenta?</ExtraText>
        <TextLink onPress={()=>navigation.navigate('Login')}>
            <TextLinkContent>Entrar</TextLinkContent>
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
const MyTextInput=({label,icon, isPassword,hidePassword,setHidePassword,showDataPicker,isDate,...props})=>{
return(
    <View>
<LeftIcon>
<Octicons name={icon} size={30} color={brand}/>
</LeftIcon>
<StyledInputLabel>{label}</StyledInputLabel>
{!isDate && <StylesTextInput {...props}/>
}
{isDate && (<TouchableOpacity onPress={showDataPicker}>
    <StylesTextInput {...props}/>

    </TouchableOpacity>)}
{isPassword && (
    <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
<Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darkLight}></Ionicons>
    </RightIcon>
)}
    </View>
);
};
export default Signup