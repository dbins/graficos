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
import {contributionData1, contributionData2, contributionData3} from './data';
import {Table, Row, Rows} from 'react-native-table-component';
import ScrollableTabView, {
  DefaultTabBar, ScrollableTabBar 
} from 'react-native-scrollable-tab-view';

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


const chartConfig = {
  backgroundColor: '#000000',
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

export default class Page7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Tipo', 'Contratado', 'Nao Contratado', 'Bloqueado'],
      tableData: [
        ['Janeiro', '120' , '150', '180'],
        ['Fevereiro', '250', '120', '180'],
        ['Março', '190', '350', '280'],
        ['Abril', '190', '350', '280'],
        ['Maio', '350', '150', '130'],
		['Junho', '120' , '150', '180'],
        ['Agosto', '250', '120', '180'],
        ['Setembro', '190', '350', '280'],
        ['Outubro', '190', '350', '280'],
        ['Novembro', '350', '150', '130'],
		['Dezembro', '250', '120', '180'],
      ]
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Trocas por Dia',
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
        <ScrollableTabView
          style={{marginTop: 20, height: 650}}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar  />}>
            <ScrollView tabLabel="Janeiro - Abril">
          <ContributionGraph
          values={contributionData1}
          width={width}
          height={height}
          endDate={new Date('2019-05-01')}
          numDays={125}
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
          </ScrollView>
          <ScrollView tabLabel="Maio - Agosto">
          <ContributionGraph
          values={contributionData2}
          width={width}
          height={height}
          endDate={new Date('2019-09-01')}
          numDays={125}
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
          </ScrollView>
          <ScrollView tabLabel="Setembro - Dezembro">
          <ContributionGraph
          values={contributionData3}
          width={width}
          height={height}
          endDate={new Date('2020-01-01')}
          numDays={125}
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
          </ScrollView>
        </ScrollableTabView>
        <View style={{marginTop: 20}}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
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
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
