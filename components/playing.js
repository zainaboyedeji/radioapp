import React from "react";
import { StyleSheet,View,Text,Image} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Playing({radio}) {
  return (
    <View style={styles.playing}>
      <Image
        source={{
            uri: radio.image,
          }}
          style={{
            width: "20%",
            height: "100%",
          }}
        />
	
	 <Text>{radio.name}</Text>
	  <AntDesign name="caretright" size={24} color="black" />
	  <AntDesign name="staro" size={24} color="black" />
    </View>  
  );
}

const styles =StyleSheet.create({
	playing: {
		position:"absolute",
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor:"white",
		flexDirection:"row",
		height:80,

	}
})