import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Button
} from 'react-native';
import Container from "./Container";
import {Hoshi} from 'react-native-textinput-effects';
const fbImg = "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/10600598_903491559679048_5249170804650778638_n.jpg?oh=eda09161100d749a47764831fc4d9424&oe=5A89941B";

export default class Home extends React.Component{

    render(){
        return(
            <ScrollView style={styles.scroll}>
                <Container>
                    <View style={styles.box}>
                        <View style={styles.card}>
                            <View style={styles.cardkalori}>
                                <View style={{flex:1, borderRightWidth:1, borderColor:'#8b8b8b'}}>
                                    <Text style={{alignSelf:'center', fontSize:20, color:'#444444'}}>Goal</Text>
                                    <Text style={{alignSelf:'center', fontSize:50, color:'green'}}>3000</Text>
                                </View>
                                <View style={{flex:1, borderLeftWidth:1, borderColor:'#8b8b8b'}}>
                                    <Text style={{alignSelf:'center', fontSize:20, color:'#444444'}}>Sisa</Text>
                                    <Text style={{alignSelf:'center', fontSize:50, color:'#292929'}}>500</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </Container>

                <Container>
                    <View style={styles.box}>
                        <View style={styles.card}>
                            <Hoshi
                                iconName={'comment'}
                                label={'Status'}
                                // this is used as active border color
                                borderColor={'#4e4e4e'}
                                inputStyle={{ color: '#000' }}
                                labelStyle={{ fontWeight: 'bold', color: '#f36e79' }}
                            />
                            <Text style={styles.alignRight}>Update</Text>
                        </View>

                    </View>
                </Container>

                <Container>
                    <View style={styles.box}>
                        <View style={styles.card}>
                            <View style={{padding:10}}>
                                <Text style={{fontSize:20}}>Sehat itu Penting</Text>
                                <Text style={{fontSize:12, color:'darkgrey'}}>by Kalofit</Text>
                                <Text style={{fontSize:15}}>Menjaga kesehatan adalah suatu hal yang penting</Text>
                            </View>
                            <Image style={{height:200}} source={{uri: fbImg}}/>
                            <Text style={styles.alignRight}>Read More</Text>
                        </View>

                    </View>
                </Container>

                <Container>
                    <View style={styles.box}>
                        <View style={styles.card}>
                            <View style={{padding:10}}>
                                <Text style={{fontSize:20}}>Sehat itu Penting</Text>
                                <Text style={{fontSize:12, color:'darkgrey'}}>by Kalofit</Text>
                                <Text style={{fontSize:15}}>Menjaga kesehatan adalah suatu hal yang penting</Text>
                            </View>
                            <Image style={{height:200}} source={{uri: fbImg}}/>
                            <Text style={styles.alignRight}>Read More</Text>
                        </View>

                    </View>
                </Container>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        flex:1,
        backgroundColor: '#dfdfdf',
        flexDirection: 'column'

    },
    cardkalori: {
        flex: 2,
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor: 'lightgrey',
    },
    card: {
        flex: 1,
        overflow:'hidden',
        backgroundColor:'white',
        borderWidth:1,
        borderColor: 'lightgrey',
    },
    box:{
        marginTop:20,
        paddingBottom: 3,
        backgroundColor:'#d1d1d1',
    },
    alignRight: {
        padding:10, marginRight:10,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
    buttonBigText: {
        fontWeight: 'bold'
    },
});