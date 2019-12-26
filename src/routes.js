import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems  } from 'react-navigation-drawer'; 
import Icon from "react-native-vector-icons/FontAwesome";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";

const styles = StyleSheet.create({
  menu_sair: {
    flex: 1,
    alignItems: "center",
    marginLeft: 23,
    flexDirection: "row",
    width: 300
  },
  label_sair: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 40
  }
});

const CustomDrawerComponent = props => (
  <SafeAreaView>
    <View
      style={{
        height: 200,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
		<Image style={{height:200}} source={require('./assets/logo.png')}/>
	</View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);


const Page1Stack = createStackNavigator({ Page1 });
Page1Stack.navigationOptions = {
  tabBarLabel: "Indicadores",
  drawerLabel: "Indicadores",
  drawerIcon: ({ tintColor }) => <Icon name="gift" size={24} color={tintColor} />
};

const Page2Stack = createStackNavigator({ Page2 });
Page2Stack.navigationOptions = {
  tabBarLabel: "Clientes",
  drawerLabel: "Clientes",
  drawerIcon: ({ tintColor }) => <Icon name="users" size={24} color={tintColor} />
};

const Page3Stack = createStackNavigator({ Page3 });
Page3Stack.navigationOptions = {
  tabBarLabel: "Pontos Acumulados",
  drawerLabel: "Pontos Acumulados",
  drawerIcon: ({ tintColor }) => <Icon name="dollar" size={24} color={tintColor} />
};

const Page4Stack = createStackNavigator({ Page4 });
Page4Stack.navigationOptions = {
  tabBarLabel: "Pontos Trocados",
  drawerLabel: "Pontos Trocados",
  drawerIcon: ({ tintColor }) => <Icon name="soccer-ball-o" size={24} color={tintColor} />
};

const Page5Stack = createStackNavigator({ Page5 });
Page5Stack.navigationOptions = {
  tabBarLabel: "Categorias Trocas",
  drawerLabel: "Categorias Trocas",
  drawerIcon: ({ tintColor }) => <Icon name="tags" size={24} color={tintColor} />
};

const Page6Stack = createStackNavigator({ Page6 });
Page6Stack.navigationOptions = {
  tabBarLabel: "Ticket Médio",
  drawerLabel: "Ticket Médio",
  drawerIcon: ({ tintColor }) => <Icon name="star" size={24} color={tintColor} />
};

const Page7Stack = createStackNavigator({ Page7 });
Page7Stack.navigationOptions = {
  tabBarLabel: "Trocas por Dia",
  drawerLabel: "Trocas por Dia",
  drawerIcon: ({ tintColor }) => <Icon name="calendar" size={24} color={tintColor} />
};

const Page8Stack = createStackNavigator({ Page8 });
Page8Stack.navigationOptions = {
  tabBarLabel: "Resumo",
  drawerLabel: "Resumo",
  drawerIcon: ({ tintColor }) => <Icon name="trophy" size={24} color={tintColor} />
};

const Page9Stack = createStackNavigator({ Page9 });
Page9Stack.navigationOptions = {
  tabBarLabel: "Dashboard",
  drawerLabel: "Dashboard",
  drawerIcon: ({ tintColor }) => <Icon name="gears" size={24} color={tintColor} />
};


const RotasAplicativo =  createDrawerNavigator(
  {
    Page8: { screen: Page8Stack },
	Page1: { screen: Page1Stack },
	Page2: { screen: Page2Stack },
    Page3: { screen: Page3Stack },
    Page4: { screen: Page4Stack },
    Page5: { screen: Page5Stack },
    Page6: { screen: Page6Stack },
    Page7: { screen: Page7Stack },
  },
  {
    drawerPosition: "left",
    contentComponent: CustomDrawerComponent,
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
	  gesturesEnabled: false,
      headerLeft: drawerButton(navigation),
    })
  }
);

export default RotasAplicativo;