import React, { useState } from 'react';
import Card from './card'
import {StyleSheet, Dimensions} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib'
import SmartScore from './score'
import { useEffect } from 'react';

export default function Slide ({data}) {
  const {overview, poster_path, release_date, title, vote_average, id} = data;
  const imgBasePath = 'https://image.tmdb.org/t/p/w200';

  const [fullOverview, setOverview] = useState(2);
  const [selected, setSelected] = useState(false);
  const idList = []

  function isIdInList(idNumber) {
    return idList.find((element) => {
      console.log('element:', element);
      return idNumber === id;
    })
  }
// TODO: pass the movie ID one level up.
  useEffect(() => {
    if (selected) {
      isIdInList(id)
      // console.log(id, isIdInList(id))
    };
  })
  

  return (
    <View style={styles.slideWindow}>
      <View center>
        <Card imgPath={imgBasePath + poster_path} shadow={true} rounded={true} selected={selected} setSelected={setSelected}/>
        <Text text50BO>{title}</Text> 
        <Text text60L>{release_date.substring(0,4)}</Text>

        {SmartScore(vote_average)}
      </View>
      <View flex>
        <Text text60BO>Overview:</Text>
        <Text text60L numberOfLines={fullOverview}>{overview}</Text>
        <Button 
          label= {fullOverview > 0 ? "Show More" : "Show Less"}
          size={Button.sizes.xSmall}
          onPress={() => {fullOverview > 0 ? setOverview(0) : setOverview(2)}} 
          outline
          marginH-110
          style={styles.button}
        />
        </View>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slideWindow: {
  width: windowWidth,
  },
  button: {
    marginVertical: 10
  }
})