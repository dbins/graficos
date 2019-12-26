import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  View,
  ListView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
//https://github.com/highcharts/highcharts-react-native/issues/8


export default class Page9 extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Dashboard',
    headerStyle: {
      backgroundColor: '#1F63AE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: drawerButton(navigation),
    headerRight: drawerExitButton(navigation),
  });

  render() {
    return (
      <View contentContainerStyle={styles.container}>
		<Text>Entrar no Dahsboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
});
