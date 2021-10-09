import React, { useState } from "react";
import { StyleSheet,View,TextInput,TouchableWithoutFeedback,Keyboard } from "react-native";

export default function SearchRadio() {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
    <View>
      <TextInput
	     style={styles.input}
        placeholder="Search For A Radio Station"
        onChangeText={changeHandler}
      />
    </View>
      </TouchableWithoutFeedback>
    
  );
}

const styles =StyleSheet.create({
	input: {
		marginBottom:10,
		paddingHorizontal: 8,
		paddingVertical:6,
    borderWidth: 5,
	}
})