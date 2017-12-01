import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Image

} from 'react-native'
import Login from './src/components/Login';
import {
    Router,
    Scene
} from 'react-native-router-flux';
import Home from "./src/components/Home";
import FoodScreen from "./src/components/FoodScreen";
import ReportScreen from "./src/components/ReportScreen";
import ProfileScreen from "./src/components/ProfileScreen";

const renderBackButton = () => {
    return (
        <TouchableOpacity
            onPress={() => {}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('./src/asset/arrow-left-b.png')}
                    resizeMode={'contain'}/>
                <Text>Back</Text>
            </View>
        </TouchableOpacity>
    );
};

const TabIcon = ({selected, title}) =>{
    return (
        <Text style={{color:selected ? 'red' :'black'}}>{title}</Text>
    );
};
const Routers = () => {
    return (
        <Router
            tabBarPosition={'bottom'}
            titleStyle={{color:'white'}}
            navigationBarStyle={{backgroundColor: '#f36e79'}}
        >
            <Scene key="root">
                <Scene
                    key="tabbar"
                    tabs
                    hideNavBar={true}
                    renderBackButton={() => renderBackButton()}
                    tabBarStyle={{ backgroundColor: '#FFFFFF' }}
                >
                    {/* Tab and it's scenes */}
                    <Scene key="osu" title="HOME" icon={TabIcon} hideNavBar={false}>
                        <Scene
                            key="home"
                            component={Home}
                            title="Home"
                        />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="um" title="FOOD" icon={TabIcon}>
                        <Scene
                            key="food"
                            component={FoodScreen}
                            title="Food"
                        />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="vu" title="REPORT" icon={TabIcon}>
                        <Scene
                            key="report"
                            component={ReportScreen}
                            title="Report"
                        />
                    </Scene>
                    {/* Tab and it's scenes */}
                    <Scene key="va" title="PROFILE" icon={TabIcon}>
                        <Scene
                            key="profile"
                            component={ProfileScreen}
                            title="Profile"
                        />
                    </Scene>
                </Scene>

                <Scene
                    key="login"
                    direction="vertical"
                    initial
                    component={Login}
                    title="Login"
                    hideNavBar
                />
            </Scene>
        </Router>
    );

};

export default Routers;