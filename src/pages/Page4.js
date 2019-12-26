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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit';
import {dataPage4} from './data';
import {Table, Row, Rows} from 'react-native-table-component';
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


export default class Page4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Tipo', 'Contratado', 'Nao Contratado', 'Bloqueado'],
      tableData: [
        ['Sem Trocas', '12.000' , '15.000', '18.000'],
        ['Uma Troca', '25.000', '12.000', '18.000'],
        ['De 2 a 5 Trocas', '19.000', '35.000', '28.000'],
        ['De 2 a 5 Trocas', '19.000', '35.000', '28.000'],
        ['Acima de 6 Trocas', '35.000', '15.000', '13.000']
      ]
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Pontos Trocados',
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
    const state = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <BarChart
          width={width}
          height={height}
          data={dataPage4}
          chartConfig={{
            backgroundColor: '#000000',
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={styles.graphStyle}
        />
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
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
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
