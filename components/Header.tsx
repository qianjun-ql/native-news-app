import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.userImg}
          source={{
            uri: "https://xsgames.co/randomusers/assets/avatars/female/9.jpg",
          }}
        />
        <View style={{ gap: 3 }}>
          <Text style={styles.welcomeTxt}>Welcome!</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  welcomeTxt: { fontSize: 12, color: Colors.darkGrey },
  userName: { fontSize: 14, fontWeight: "700", color: Colors.black },
});
