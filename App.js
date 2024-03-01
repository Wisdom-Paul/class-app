import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import Duolingo from "./components/Duolingo";
import LoationPermit from "./components/LoationPermit";
import DeliveryMan from "./components/DeliveryMan";
import Onboarding from "./components/Onboarding";
import GetStart from "./components/GetStart";
import Start from "./components/Start";
import Test from "./components/Test";
import Email from "./components/Email";
import Nomba from "./components/Nomba";
import Otp from "./components/Otp";
import Last from "./components/Last";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (

    
   
  <NavigationContainer>
    
    <Stack.Navigator>
    <Stack.Screen
        name="Duolingo"
        component={Duolingo}
        options={{ headerShown: false }}
        
      />


      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoationPermit"
        component={LoationPermit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeliveryMan"
        component={DeliveryMan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="GetStart"
      component={GetStart}
      options={{ headerShown: false }}
      >
      </Stack.Screen>
      <Stack.Screen
      name="Start"
      component={Start}
      options={{ headerShown: false}}
      >

    </Stack.Screen>
      <Stack.Screen
      name="Nomba"
      component={Nomba}
      options={{ headerShown: false}}
      >
      </Stack.Screen>
      <Stack.Screen
      name="Otp"
      component={Otp}
      options={{ headerShown: false}}
      >
      </Stack.Screen>
      <Stack.Screen
      name="Last"
      component={Last}
      options={{ headerShown: false}}
      >
      </Stack.Screen>
 
    
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
