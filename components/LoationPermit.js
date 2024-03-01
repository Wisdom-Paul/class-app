import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoationPermit = () => {
  const Navigator = useNavigation();
  return (
    <View
      Style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          marginTop: 80,
          alignSelf: "center",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Explore Restuarant Nearby
      </Text>
      <Image
        source={require("./../assets/oip.png")}
        style={{ marginTop: 250, width: 100, height: 150, alignSelf: "center" }}
      />
      <Text
        style={{
          color: "black",
          marginTop: "10%",
          textAlign: "center",
          alignSelf: "center",
          fontSize: 14,
          width: 350,
        }}
      >
        By granting permision, you can search for restuarants 
      </Text>
      <Text
        style={{
          color: "black",
          marginTop: "4%",
          textAlign: "center",
          alignSelf: "center",
          fontSize: 14,
          width: 350,
        }}
      >
       around you and receive more accurate delivery
       </Text>

      <TouchableOpacity
        style={{
          borderRadius: 15,
          padding: 14,
          backgroundColor: "red",
          width: 312,
          marginTop: 40,
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "white",
            textAlign: "center",
          }}
          onPress={() => Navigator.navigate("DeliveryMan")}
        >
          Grant Permission
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoationPermit;
