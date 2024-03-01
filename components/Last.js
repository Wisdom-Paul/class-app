import { Text, Image, TouchableOpacity, View } from "react-native";

const Last = () => {
  return (
    <View>
      <Image
        source={require("./../assets/male.png")}
        style={{
          width: 250,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 150,
        }}
      />
      <Text
        style={{
          marginTop: 40,
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        You Are doing well
      </Text>
      <Text
        style={{
          marginTop: 10,
          textAlign: "center",
          fontSize: 17,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        Congratulations! Your account hass been successfully created. your're
        now ready to embark on a delicious journey with foodie delight.
      </Text>

      <TouchableOpacity
        style={{
          width: 300,
          padding: 15,
          marginTop: 20,
          backgroundColor: "red",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", textAlign:'center',fontSize:20 }}> Add address</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Last;
