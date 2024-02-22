import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "./constants/constants";
import {
  Entypo,
  Ionicons,
  Fontisto,
  AntDesign,
  Foundation,
} from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import BagScreen from "./screens/BagScreen";
import ShopsScreen from "./screens/ShopsScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import ProductScreen from "./screens/ProductScreen";
import CheckOutScreen from "./screens/CheckOutScreen";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import SingupScreen from "./screens/SingupScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotpasswordScreen from "./screens/ForgotpasswordScreen";
import EditAddressScreen from "./screens/EditAddressScreen";
import MyOrdersScreen from "./screens/MyOrdersScreen";
import AddProductScreen from "./screens/AddProductScreen";
import ViewAllScreen from "./screens/ViewAllScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    setLoggedIn(user.isAuthenticated);
  }, [user.isAuthenticated]);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
        tabBarLabelStyle: {
          fontFamily: "regular",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",

          tabBarIcon: (props) => (
            <Entypo
              name="home"
              size={props.size}
              color={props.focused ? colors.primary : colors.black}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Shops"
        options={{
          tabBarLabel: "Shops",
          tabBarIcon: (props) =>
            props.focused ? (
              <Foundation
                name="shopping-cart"
                size={24}
                color={colors.primary}
              />
            ) : (
              <AntDesign name="shoppingcart" size={24} color="black" />
            ),
        }}
        component={ShopsScreen}
      />
      <Tab.Screen
        name="Bag"
        component={BagScreen}
        options={{
          tabBarLabel: "Bag",

          tabBarIcon: (props) => (
            <Ionicons
              name={props.focused ? "bag-handle" : "bag-handle-outline"}
              size={24}
              color={props.focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: (props) => (
            <Ionicons
              name={props.focused ? "heart-sharp" : "heart-outline"}
              size={24}
              color={props.focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={{
          tabPress: (e) => {
            if (!loggedIn) {
              e.preventDefault();
              navigation.navigate("Signup");
            }
          },
        }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (props) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={props.focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Stack.Navigator
            screenOptions={{
              headerTitleStyle: {
                color: colors.black,
              },
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTitleAlign: "center",
              headerShadowVisible: false,
            }}
          >
            <Stack.Group>
              <Stack.Screen
                name="main"
                options={{
                  headerShown: false,
                  // headerRight: () => (
                  //   <Button
                  //     onPress={() => alert("This is a button!")}
                  //     title="Info"
                  //   />
                  // ),
                }}
                component={TabNavigator}
              />
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                presentation: "containedModal",
              }}
            >
              {/* <Stack.Screen
            name="Meaning"
            options={{ headerShown: false }}
            component={MeaningScreen}
          /> */}
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                presentation: "containedModal",
              }}
            >
              <Stack.Screen
                name="Product"
                options={{ headerShown: false }}
                component={ProductScreen}
              />
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                presentation: "containedModal",
              }}
            >
              <Stack.Screen
                name="CheckOut"
                options={{ headerShown: false }}
                component={CheckOutScreen}
              />
            </Stack.Group>
            <Stack.Screen
              name="Signup"
              options={{ headerShown: false }}
              component={SingupScreen}
            />
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="Forgotpassword"
              options={{ headerShown: false }}
              component={ForgotpasswordScreen}
            />
            <Stack.Screen
              name="EditAddress"
              options={{ headerShown: false }}
              component={EditAddressScreen}
            />
            <Stack.Screen
              name="MyOrders"
              options={{ headerShown: false }}
              component={MyOrdersScreen}
            />
            <Stack.Screen
              name="AddProduct"
              options={{ headerShown: false }}
              component={AddProductScreen}
            />
            <Stack.Screen
              name="ViewAll"
              options={{ headerShown: false }}
              component={ViewAllScreen}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
