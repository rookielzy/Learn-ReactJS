import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput
} from 'react-native';

export default class LoginPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.forgot}>Forgot Login/Pass</Text>
                </View>
                <View style={styles.inputView}>
                    <Text>Username or Email</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <Text>Password</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <TouchableHighlight style={[styles.connect, styles.inputView]}>
                    <Text style={styles.text}>Connect with Wechat</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.signIn, styles.inputView]}>
                    <Text style={styles.text}>Sign in</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.inputView]}>
                    <Text style={styles.text}>CANCEL</Text>
                </TouchableHighlight>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    forgot: {
        color: 'skyblue',
        fontSize: 20,
        textAlign: 'right',
        margin: 5,
    },
    inputView: {
        width: 390,
        height: 60,
        margin: 10,     
    },
    input: {
        backgroundColor: 'white',
    },
    connect: {
        borderWidth: 1,
        borderColor: 'blue',
        borderStyle: 'solid',
    },
    signIn: {
        backgroundColor: 'lightgreen',
        color: 'white',
    },
    text: {
        textAlign: 'center',
        lineHeight: 30,
    }
}); 