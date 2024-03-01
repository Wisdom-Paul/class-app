import { Text, TouchableOpacity, Image, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStart = () => {
    const Navigator = useNavigation()
  return (
    <View
      style={{
        height: "100%",
        alignSelf: "center",
        alignContent: "center",
      }}
    >
      <View>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            backgroundColor: "red",
            padding: 10,
            alignSelf: "center",
            marginBottom: 50,
            width: 300,
            marginTop: 500
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15, alignSelf:'center' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{ borderRadius: 15, width:300,borderRadius:15, borderWidth:1, padding: 10, marginTop:1 }}
        onPress={()=>Navigator.navigate('Start')}
        > 
          <Text style={{ fontWeight: "bold", fontSize: 15, alignSelf:'center' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default GetStart;
