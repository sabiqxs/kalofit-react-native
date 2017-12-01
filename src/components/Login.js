import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    TextInput,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from "./Container";
import Button from "./Button";
import Label from "./Label";
import {Router, Actions} from 'react-native-router-flux';

export default class Login extends React.Component{
    render(){
        return(
            <ScrollView style={styles.scroll}>
                <Container>
                    <Image
                        style={styles.alignCenterImage}
                        source={require('../asset/logo.png')}
                        resizeMode="center"
                        resizeMethod="resize"
                    />
                </Container>

                <View style={{marginTop:10}}>
                    <Container>
                        <Hoshi
                            iconName={'comment'}
                            label={'Username or Email'}
                            // this is used as active border color
                            borderColor={'#FFF'}
                            inputStyle={{ color: 'white' }}
                            labelStyle={{ color: '#000' }}
                        />
                    </Container>
                    <Container>
                        <Hoshi
                            label={'Password'}
                            // this is used as active border color
                            borderColor={'#FFF'}
                            secureTextEntry={true}
                            inputStyle={{ color: 'white' }}
                            labelStyle={{ color: '#000' }}
                        />
                    </Container>
                </View>
                <View>
                    <Container>
                        <Button label="Forgot Login/Pass"
                                styles={{button:styles.alignRight, label: styles.label}}
                        />
                    </Container>
                </View>
                <View style={styles.footer}>
                    <Container>
                        <Button
                            styles={{button: styles.transparentButton}}

                        >
                            <View style={styles.inline}>
                                <Icon name="google" size={30} color="#0f0f0f" />
                                <Text style={[styles.buttonBlackText, styles.buttonBigText]}>  Connect </Text>
                                <Text style={styles.buttonBlackText}>with Google</Text>
                            </View>
                        </Button>
                    </Container>
                    <Container>
                        <Button
                            label="Sign In"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                            onPress={() => Actions.home()}

                        />
                    </Container>
                    <Container>
                        <Button
                            label="Register"
                            styles={{label: styles.buttonBlackText}}
                            onPress={() => Actions.home(PARAMS)}
                        />
                    </Container>
                </View>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        flex:1,
        backgroundColor: '#F36F7B',
        padding: 30,
        flexDirection: 'column'

    },
    label: {
        color: '#FFF',
        fontSize: 12
    },
    alignCenterImage: {
        flex: 1,
        width:300,
        height:100,
        alignSelf: 'center'
    },
    alignRight: {
        marginTop:-20,
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#0f0f0f',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#22348d'
    },
    buttonBigText: {
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#000'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer:{
        marginTop:-40
    }
});