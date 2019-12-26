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
import {pieChartData} from './data';
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

export default class Page5 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Categoria', 'Contratado', 'Nao Contratado', 'Bloqueado'],
      tableData: [
        ['Eletrônicos', '276.000', '229.000', '188.000'],
        ['Decoração', '35.232', '29.232', '24.000'],
        ['Escritório', '5.872', '4.872', '4.000'],
		['Calçados', '111.568', '92.568', '76.000'],
		['Esportivos', '152.672', '126.672', '104.000']
      ],
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Categorias Trocas',
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
        <PieChart
          data={pieChartData}
          height={height}
          width={width}
          accessor="population"
          chartConfig={{
            backgroundColor: '#000000',
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            decimalPlaces: 2, // optional, defaults to 2dp
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
