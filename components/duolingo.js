import { Text, Image, TouchableOpacity, View } from "react-native";
const Duolingo = ()=>{
    return(
        <View
        style={{
          backgroundColor: "black",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("./../assets/Duolingo.png")}
          style={{ width: 150, height: 150 }}
        />
  
        <Text
          style={{
            color: `white`,
            fontSize: 40,
            fontWeight: `bold`,
            color: `#2BD800`,
            marginTop: 20,
          }}
        >
          duolingo
        </Text>
        <Text
          style={{
            color: "white",
            width: 255,
            height: 44,
            fontSize: 18,
            textAlign: `center`,
          }}
        >
          The free, fun, and effective way to learn a language!!
        </Text>
  
        <View style={{ marginTop: 120 }}>
          {/* Button for Get Started */}
          <TouchableOpacity
            style={{
              borderRadius: 16,
              backgroundColor: "#2BD800",
              padding: 24,
              width: 312,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color: "#191920",
                textAlign: "center",
              }}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
  
          {/* BUTTON FOR I ALREADY HAVE AN ACCOUNT */}
          <TouchableOpacity
            style={{
              borderRadius: 16,
              padding: 24,
              width: 312,
              borderColor: "#525D70",
              borderWidth: 2,
              backgroundColor: "#191920",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color: "#2BD800",
                textAlign: "center",
              }}
            >
              I ALREADY HAVE AN ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  
    );
}

export default Duolingo;