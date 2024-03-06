import { Text, Image, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Nomba from "./Nomba";
import Email from "./Email";
import Checkbox from "expo-checkbox";

const Start = () => {
  const Navigator = useNavigation();
  const [toggle, setToggle] = useState("Email");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "red",
        height: "100%",
        justifyContent: "center",
        paddingTop: 90,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 25,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
          Get Started
        </Text>
        <Text style={{ fontSize: 10, marginTop: 3 }}>
          Sign up today and start placing your order
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderColor: "red",
            width: 250,

            marginTop: 7,
          }}
        >
          <TouchableOpacity
            style={{
              width: 160,
              padding: 10,
              left: 1,
              borderWidth: 1,
              borderTopLeftRadius: 9,
              borderBottomLeftRadius: 9,
              backgroundColor: toggle == "Phone" ? "red" : "white",
            }}
            onPress={() => setToggle("Phone")}
          >
            <Text style={{ alignSelf: "center" }}>Phone Number</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 160,
              borderTopRightRadius: 9,
              borderBottomRightRadius: 9,
              padding: 10,
              borderWidth: 1,
              backgroundColor: toggle == "Email" ? "red" : "white",
            }}
            onPress={() => setToggle("Email")}
          >
            <Text style={{ textAlign: "center" }}>Email</Text>
          </TouchableOpacity>
        </View>
        {toggle == "Email" ? <Email /> : <Nomba />}

        <View style={{ marginVertical: 7, gap: 4, flexDirection: "row" }}>
          <Checkbox
            style={{ borderColor: "red" }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "red" : "red"}
          />

          <Text style={{ fontSize: 16 }}>
            If you are creating a new account, {""}
            <Text
              style={{ color: "red" }}
              onPress={() => Alert.alert("No refund after placing an order")}
            >
              Terms & Conditions {""}
            </Text>
            and {""}
            <Text
              style={{ color: "red" }}
              onPress={() => Alert.alert("Coming soon")}
            >
              Privacy Policy {""}
            </Text>
            will apply.
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              width: "90%",
              height: 50,
              marginTop: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                padding: 10,
                textAlign: "center",
              }}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>Have an accout? </Text>
            <TouchableOpacity onPress={() => Navigator.navigate("Otp")}>
              <Text style={{ color: "red", fontSize: 15 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Start;
