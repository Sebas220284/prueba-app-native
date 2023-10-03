import React from "react";
import { KeyboardAvoidingView ,ScrollView,TouchableWithoutFeedback,Keyboard} from "react-native";
const KeyBoardAvoind=({children})=>{
    return(
<KeyboardAvoidingView style={{flex:1}}>
<ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
{children}
    </TouchableWithoutFeedback>
</ScrollView>
</KeyboardAvoidingView>
    );
}
export default KeyBoardAvoind