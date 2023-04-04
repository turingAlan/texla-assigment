import { StyleSheet, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../constants/colors";

const PageLayout = (props) => {
  return <View style={styles.contianer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  contianer: {
    alignContent: "center",
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 60,
  },
});

export default PageLayout;
