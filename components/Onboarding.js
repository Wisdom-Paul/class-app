import { Text, Image, TouchableOpacity, View } from "react-native";
import {useNavigation} from "@react-navigation/native";
import DeliveryMan from "./DeliveryMan";

const Onboarding = () => {
  const Navigator=useNavigation()
  return (
    <View
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
        <TouchableOpacity style={{width:70,  alignItems: 'center', height:30, alignSelf:'flex-end', justifyContent:'center'}}>
        <Text style={{fontSize:13, fontWeight:'bold' }}>skip</Text>
        </TouchableOpacity>
      <View style={{height:500, justifyContent:'center'}}>
      <Image
          source={require("./../assets/foodplate.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text style={{fontWeight:'bold', alignItems:'center', textAlign:'center', fontSize: 30 }}>Discover New Cuisine</Text>
        <Text style={{fontSize:15, width:350, textAlign: 'center', marginTop: 30}}>From local favorites to global deleights. find the perfect dish for every taste.</Text>
      </View>
      <TouchableOpacity style={{
        borderRadius:10,
        borderColor: 'black',
        backgroundColor:'red',
        width:300,
        padding:15

      }}
      >
        onPress{()=>Navigator.navigate('DeliveryMan')}
        <Text style={{fontWeight:'bold', textAlign:'center', color:'white', fontSize:30}}>Next</Text>

      </TouchableOpacity>
    </View>
  );
};
export default Onboarding;
