import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DeliveryMan = () => {
  const Navigator=useNavigation()
  
  return (
    <View
      Style={{
        backgroundColour: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
      <TouchableOpacity
    style={{ 
    }}
      >
    <Text style={{left: 300, marginTop:70, color:'black', fontSize:13,}}>skip</Text>
      </TouchableOpacity>
      </View>
      <Image
        source={require("./../assets/bikeman.png")}
        style={{ marginTop: 200, width: 100, height: 100, alignSelf: 'center'}}
      />
      <Text style={{ marginTop: 50, textAlign:'center', fontSize: 30, fontWeight: "bold" }}> Quench your craving</Text>
      <Text style={{ textAlign: "center", color: "black", marginTop: 15,fontSize:17, }}>
        Find your favorite meal from your favorite
      </Text>
      <Text style={{ textAlign: "center", color: "black", marginTop: 15,fontSize:17, }}>
        resturants and we will deliver it to your door
      </Text>
      <Text style={{ textAlign: "center", color: "black", marginTop: 15,fontSize:17, }}> step.
      </Text>


      <View>
        <TouchableOpacity
          style={{
            borderRadius: 16,
            padding: 20,
            width: 330,
            borderColor: "black",
            borderWidth: 2,
            backgroundColor: "red",
            marginTop: 50,
            alignSelf:'center',
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              color: "white",
              textAlign: "center",
            }}
            onPress={()=>Navigator.navigate('GetStart')}
            >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryMan;
