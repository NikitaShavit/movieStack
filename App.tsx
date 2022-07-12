import React, {Component} from 'react';
import 'react-native-gesture-handler'
import {StyleSheet, ScrollView} from 'react-native';
import {Text, Colors} from 'react-native-ui-lib';
import axios from 'axios'
import MovieCarousel from './src/components/carousel';

interface Movie {
  title: string,
  overview: string,
  poster_path: string,
  release_date: string,
  vote_average: number
}

interface StateType {
  testProp: string,
  movieData: Movie[],
  stackList: string[]
}

export default class movieApp extends Component<undefined,StateType> {

  constructor(props){
    super(props);
    this.state = {
      testProp: '1911',
      movieData: [],
      stackList: []
    }
  }

  testCallBack = (movieTitle: string) => {
    if (!this.state.stackList.find(movie => movie == movieTitle)){
      this.setState((prevState) => {
        stackList: [...(prevState.stackList && []), movieTitle]
      })
    } else {// TODO: filter title out.}
    console.log(this.state.testProp, this.state.stackList)
  }}
  
  apiKey = '9f5bfb9e46dc9d29842c84653c92251f';
  apiUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.apiKey + '&language=en-US&page=1';
  imgBasePath = 'https://image.tmdb.org/t/p/w200'
  
  componentDidMount() {
    axios.get(this.apiUrl).then(response => {
      this.setState({
        movieData: response.data.results
      });
    })
  }

  render() {
    if(this.state.movieData === undefined) {
      return(
        <Text center> Server Error </Text>
      )} else {
    return (
    <ScrollView style={styles.scrollingView} >
      <MovieCarousel moviesData={this.state.movieData}/>
      <Text center>Stack</Text>

    </ScrollView>
  )}};
}

const styles = StyleSheet.create({
  scrollingView: {
    paddingTop: 40,
    backgroundColor: Colors.rgba('#ebf7f7', 1)
  }
})