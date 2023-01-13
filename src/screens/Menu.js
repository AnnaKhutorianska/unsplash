import React from "react";
import {
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { View } from "react-native";
import { useSelector } from "react-redux";
import { icons } from "../constants";
import { SCREENS } from "../constants/screens";

export const Menu = ({ navigation }) => {
  const photo = useSelector((state) => state.selectedPhoto?.urls?.regular);

  function handlePress() {
    navigation.goBack();
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.menuBlockExpensesWrapper}
        onPress={() => navigation.navigate(SCREENS.Expenses)}
      >
        <View style={styles.menuBlockExpenses}>
          <Text style={styles.blockText}>Check expenses</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuBlockInvestWrapper}
        onPress={() => navigation.navigate(SCREENS.Investment)}
      >
        <View style={styles.menuBlockInvest}>
          <Text style={styles.blockText}>Investment choice</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundImage: `url(${icons.menuBgn})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    flex: 1,
  },
  menuBlockExpensesWrapper: {
    position: "relative",
    maxHeight: 200,
    backgroundImage: `url(${icons.expenses})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flex: 1,
    margin: 20,
    borderRadius: 5,
  },
  menuBlockExpenses: {
    position: "absolute",
    top: "50%",
  },
  menuBlockInvestWrapper: {
    position: "relative",
    maxHeight: 200,
    backgroundImage: `url(${icons.invest})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    flex: 1,
    margin: 20,
    borderRadius: 5,
  },
  menuBlockInvest: {
    position: "absolute",
    top: "50%",
  },
  blockText: {
    fontSize: 20,
    fontWeight: 900,
    color: "#6d6875",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    margin: "auto",
    padding: 4,
  },
});
