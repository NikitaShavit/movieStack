import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, TouchableOpacity, Colors, Image, Typography, Shadows} from 'react-native-ui-lib'

const Card = (props) => {
  
  const {
    imgPath = null,
    shadow = false,
    selected = false, 
    setSelected
  } = props

  const image = imgPath? {uri: imgPath} : require('../images/no_picture.jpeg');
  const selectedIcon = require('../images/selected.png');

  const selectedOverlay = (
    <View center paddingT-50>
      <Image 
      source={selectedIcon}
      style={styles.selectedIconStyle}
      />
    </View>
  );

  const handleMoviePress = () => {
    setSelected(!selected);
  }

  return (
    <View center>
        <TouchableOpacity 
        center
        onPress={() => {handleMoviePress()}}
        style={[shadow && styles.shadow]}>
         <Image 
         source={image}
         overlayColor= {selected? Colors.grey30: undefined}
         overlayIntensity= {selected? Image.overlayIntensityType.MEDIUM: undefined}
         overlayType= {selected? 'SOLID': undefined}
         style={[styles.image, {overflow: 'hidden'} ]}
         customOverlayContent={selected? selectedOverlay: undefined}
         />
        </TouchableOpacity>
    </View>    
  )
}

Typography.loadTypographies({
  title: {fontSize: 24, fontWeight: '300', lineHeight: 30},
  year: {fontSize: 18, fontWeight: '300', lineHeight: 30},
})

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
    borderRadius: 50
  },
  shadow: Shadows.sh30.bottom,
  selectedIconStyle: {
    width: 100,
    height: 100,
  }
});

export default Card;