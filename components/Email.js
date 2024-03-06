import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";
// import { materialCommunityIcons } from "@expo/vector-icons";
import IconSet from "react-native-vector-icons/Ionicons";

const Email = () => {
  //code line for passsword shown
  const [password, setPassword] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordShown = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  //code line for confirm password shown
  const [confirmPassword, setConfirmPassword] = useState();
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const toggleConfirmPasswordShown = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <View style={{ width: "100%" }}>
      <Text style={{ fontSize: 15, marginVertical: 10 }}>Full Name</Text>
      <TextInput
        placeholder="Your Name"
        placeholderTextColor={"black"}
        keyboardType="default"
        style={{
          padding: 9,
          borderRadius: 10,
          paddingHorizontal: 5,
          borderWidth: 1,
        }}
      />

      <Text style={{ fontSize: 15, marginVertical: 10 }}>EMail</Text>
      <TextInput
        placeholder="Mail"
        placeholderTextColor={"black"}
        keyboardType="default"
        style={{
          padding: 9,
          borderRadius: 10,
          paddingHorizontal: 5,
          borderWidth: 1,
        }}
      />

      <Text style={{ fontSize: 15, marginVertical: 10 }}>Password</Text>
      <TextInput
        placeholder="Password"
        placeholderTextColor={"black"}
        keyboardType="default"
        style={{
          padding: 9,
          borderRadius: 10,
          paddingHorizontal: 5,
          borderWidth: 1,
        }}
        secureTextEntry={!isPasswordVisible}
        value={password}
        onValueChange={setPassword}
      />

      <IconSet
        name={isPasswordVisible ? "eye" : "eye-off"}
        onPress={togglePasswordShown}
        style={{ fontSize: 20, position: "absolute", top: "65%", left: "85%" }}
      />

      <Text style={{ fontSize: 15, marginVertical: 10 }}>Confirm Password</Text>
      <TextInput
        placeholder="confirm password"
        placeholderTextColor={"black"}
        keyboardType="default"
        value={confirmPassword}
        onValueChange={setConfirmPassword}
        secureTextEntry={!isConfirmPasswordVisible}
        style={{
          padding: 9,
          borderRadius: 10,
          paddingHorizontal: 5,
          borderWidth: 1,
        }}
      />
      <IconSet
        name={isConfirmPasswordVisible ? "eye" : "eye-off"}
        onPress={toggleConfirmPasswordShown}
        style={{ fontSize: 20, position: "absolute", top: "91%", left: "85%" }}
      />
    </View>
  );
};

export default Email;
