import { useState } from "react";
import { Image, View, Text, TextInput } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text numberOfLines={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
        magni error molestiae maiores deleniti quae esse quia libero obcaecati,
        corporis accusantium vitae, voluptatibus sint sunt consectetur eos,
        accusamus quibusdam?
      </Text>

      {/* Remote image from internet
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQCBwdQkcp3RkMKUUmAdSB91OCYAP-vtuVw&s",
        }}
        style={{ width: 400, height: 400 }}
      /> */}

      {/* local image */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: 100, height: 100 }}
        blurRadius={30}
      />

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
    </View>
  );
}
