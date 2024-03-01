import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { materialCommunityIcons } from "@expo/vector-icons";
import IconSet from "react-native-vector-icons/Ionicons";

const Nomba = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={{ justifyContent: "center", width: 325, marginTop: 15 }}>
      <Text style={{ fontSize: 15 }}>Full Name</Text>
      <View style={{ borderWidth: 1, marginBottom: 20, borderRadius: 9 }}>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor={"black"}
          keyboardType="default"
          style={{ padding: 9, borderRadius: 10, paddingHorizontal: 5 }}
        />
      </View>

      <Text style={{ fontSize: 15 }}>Phone Number</Text>
      <View style={{ borderWidth: 1, marginBottom: 20, borderRadius: 9 }}>
        <TextInput
          placeholder="Your Number"
          placeholderTextColor={"black"}
          keyboardType="numeric"
          style={{ padding: 9, borderRadius: 10, paddingHorizontal: 5 }}
        />
      </View>

      <Text style={{ fontSize: 15 }}>Password</Text>
      <View style={{ borderWidth: 1, marginBottom: 20, borderRadius: 9 }}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          keyboardType="default"
          style={{ padding: 9, borderRadius: 10, paddingHorizontal: 5 }}
          secureTextEntry={!isPasswordVisible}
          value={password}
          onValueChange={setPassword}

        />
        <IconSet
          onPress={setIsPasswordVisible}
          name={password ? "eye" : "eye-off"}
          stlye={{ fontSize: 16, }}
        />

      </View>

      <Text style={{ fontSize: 15 }}>Confirm Password</Text>
      <View style={{ borderWidth: 1, marginBottom: 20, borderRadius: 9 }}>
        <TextInput
          placeholder="confirm password"
          placeholderTextColor={"black"}
          keyboardType="default"
          style={{ padding: 9, borderRadius: 10, paddingHorizontal: 5 }}
        />
        </View>
    </View>
  );
};

export default Nomba;
