import { View, Text, Button } from 'react-native'
import React from 'react'

const WritingScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>WritingScreen</Text>
      <Button
        title="เพิ่มงานเขียนใหม่"
        onPress={() => {
          navigation.navigate("AddEditWritingScreen")
        }}
      />
    </View>
  )
}

export default WritingScreen