import React from 'react';
import {Colors, Text, View} from 'react-native-ui-lib'

export default function SmartScore(score) {

  const scoreColorSelect = () => {
    if (score >= 7.5) {
      return Colors.green20
    } else if (5 < score && score < 7.5) {
      return Colors.yellow20
    } else {
      return Colors.red20
    }
  }

  if (score > 0) {
    return (
      <View row>
        <Text text65L>Score: </Text>
        <Text text65L color={scoreColorSelect()}>{score}</Text>
      </View>
    )
  } else {
    return(null)
  }
}
