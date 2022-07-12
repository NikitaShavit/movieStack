import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {View} from 'react-native-ui-lib'
import Slide from './slide'

export default function MovieCarousel(data) {
  return (
    <View>
    <FlatList
      pagingEnabled
      data={data.moviesData}
      renderItem={({item}) => {return <Slide data={item}/>}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPadding: {
    paddingHorizontal: 20
  },
  button: {
    marginVertical: 10
  }
})


// interface MovieCarouselProps {
//   moviesData: any;
//   selectCallback: (movieId?: string) => {};
// }

// export default function MovieCarousel(data: MovieCarouselProps) {