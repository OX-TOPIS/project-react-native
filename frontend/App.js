import 'react-native-gesture-handler'
import React from "react";
import { StyleSheet } from "react-native";
import Navigator from "./navigation/MyNavigator"
// import คอมโพเนนต์ที่จำเป็น


export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <Navigator />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
