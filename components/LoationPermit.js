import { Text, View, Image, Button, TouchableOpacity } from "react-native";

const LoationPermit = () => {
  return (
    <View
      Style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text
        style={{
          marginTop: 80,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {" "}
        Explore restuarant Nearby
      </Text>
      <Image
        source={require("../assets/logo.png")}
        style={{ marginTop: 30, width: 90, height: 100, justifyContent: 'center',  }}
      />
      <Text
        style={{
          color: "white",
          marginTop: "10%",
          textAlign: "center",
          fontWeight: 700,
          alignSelf: "center",
        }}
      >
        By granting permision, you can search for restuarants near you and
        receive more accurate delivery
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 14,
          padding: 14,
          backgroundColor: "red",
          width: 312,
          marginTop: 15,
        }} >
        <Text
          style={{
            fontSize: 17,
            color: "white",
            textAlign: "center",
          }}
        >
          Grant Permission
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default LoationPermit;
