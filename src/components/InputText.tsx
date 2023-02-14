import React from "react";
import { View, TextInput } from "react-native";
type InputTextProps = {
  placeHolder: string;
  secureTextEntry: boolean;
};
const InputText = ({ placeHolder, secureTextEntry }: InputTextProps) => {
  return (
    <View style={{width:'80%'}}>
      <TextInput
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        style={{
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginTop: 7,
          backgroundColor: "white",
        }}
      ></TextInput>
    </View>
  );
};

export default InputText;
