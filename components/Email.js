import { Text, TextInput, View, TouchableOpacity } from "react-native";
const Email = () => {
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

      <Text style={{ fontSize: 15 }}>Email</Text>
      <View style={{ borderWidth: 1, marginBottom: 20, borderRadius: 9 }}>
        <TextInput
          placeholder="mail"
          placeholderTextColor={"black"}
          keyboardType="default"
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

export default Email;
