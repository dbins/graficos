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

var width = Dimensions.get('window').width - 30; //full width
const height = 220;


const drawerButton = navigation => (
  <TouchableOpacity
    style={{padding: 5, color: 'white'}}
    onPress={() => {
      navigation.toggleDrawer();
    }}>
    <Icon name="bars" size={36} color={"#FFFFFF"} />
  </TouchableOpacity>
);

const drawerExitButton = navigation => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Page9');
    }}>
    <Icon name="chevron-right" size={36} color={"#FFFFFF"} />
  </TouchableOpacity>
);

export default class Page8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptions: {
        series: [
          {
            data: [1, 3, 2],
          },
        ],
      },
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Resumo',
    headerStyle: {
      backgroundColor: '#000000',
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.boxBotoes}>
          <View style={styles.boxBotaoMeio}>
            <Icon name="user" size={48} color="#900" />
            <Text style={styles.textoIndicador}>Clientes</Text>
            <Text style={styles.textoValor}>1.031.000</Text>
          </View>
          <View style={styles.boxBotaoMeio}>
            <Icon name="trophy" size={48} color="#900" />
            <Text style={styles.textoIndicador}>Qtde Trocas</Text>
            <Text style={styles.textoValor}>178.000</Text>
          </View>
        </View>

        <View style={styles.boxBotoes}>
          <View style={styles.boxBotaoMeio}>
            <Icon name="money" size={48} color="#900" />
            <Text style={styles.textoIndicador}>Pontos Acumulados</Text>
            <Text style={styles.textoValor}>15.755.000</Text>
          </View>
          <View style={styles.boxBotaoMeio}>
            <Icon name="truck" size={48} color="#900" />
            <Text style={styles.textoIndicador}>Pontos Trocados</Text>
            <Text style={styles.textoValor}>2.781.000</Text>
          </View>
        </View>

        <View style={styles.boxBotoes}>
          <View style={styles.boxBotaoMeio}>
            <Icon name="thumbs-o-down" size={48} color="#900" />
            <Text style={styles.textoIndicador}>Pontos Expirados</Text>
            <Text style={styles.textoValor}>578.000</Text>
          </View>

          <View style={styles.boxBotaoMeio}>
            <Icon name="thumbs-o-up" size={48} color="#900" />
            <Text style={styles.textoIndicador}>Clientes com Trocas</Text>
            <Text style={styles.textoValor}>22.000</Text>
          </View>
        </View>
      </ScrollView>
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
  containerChart: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  boxBotaoMeio: {
    margin: 10,
    width: '45%',
	height: 50,
    alignItems: 'center',
  },
  textoIndicador: {
    color: '#FFFFFF',
  },
  textoValor: {
    color: '#FFFF00',
  },
  boxBotoes: {
    flex: 1,
    margin: 10,
	flexDirection: 'row',
	backgroundColor: '#000000',
  },
});
