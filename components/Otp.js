import { Text, TouchableOpacity, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Otp = () => {
  const Navigator = useNavigation();
  return (
    <View style={{ height: "100%" }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 90,
          marginHorizontal: 20,
          paddingLeft: 10,
        }}
      >
        OTP Verification
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          marginTop: 5,
          fontSize: 15,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        Thank you for signing up, Enter the 4-digit that we have sent via the
        phone number
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            height: 50,
            width: 50,
            borderRadius: 10,
            textAlign: "center",
          }}
        ></TextInput>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            height: 50,
            width: 50,
            borderRadius: 10,
            textAlign: "center",
          }}
        ></TextInput>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            height: 50,
            width: 50,
            borderRadius: 10,
            textAlign: "center",
          }}
        ></TextInput>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            height: 50,
            width: 50,
            borderRadius: 10,
            textAlign: "center",
          }}
        ></TextInput>
      </View>
      <Text style={{ marginTop: 20, alignSelf: "center" }}>00:30</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
          width: 300,
          alignSelf: "center",
          marginTop:20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            alignSelf: "center",
          }}
          onPress={() => Navigator.navigate("Last")}
        >
          Verify my account
        </Text>
      </TouchableOpacity>

      <View style={{alignItems:'center',justifyContent:'center', marginTop:25,flexDirection:'row'}}>
        <Text style={{}}>Didnt receive code?</Text>
        <TouchableOpacity>
            <Text style={{color:'red'}}>Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Otp;
