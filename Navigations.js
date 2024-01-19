import { NavigationContainer } from "@react-navigation/native";
import Suppliers from "./screens/Suppliers";
import Cart from "./screens/Cart";
import { createBottomTabNavigator, createBottomTapNavigator } from "@react-navigation/bottom-tabs";


const BottomTab = createBottomTabNavigator();



const TabGroup = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Products"   component={Suppliers} />
            <BottomTab.Screen name="Cart"       component={Cart} />
            <BottomTab.Screen name="chats"      component={Suppliers} />
        </BottomTab.Navigator>
    );
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    );
}