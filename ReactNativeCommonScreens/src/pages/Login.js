import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
    press() {

    }
    render () {
        return (
            <ScrollView style={styles.scroll}>
                <Container>
                    <Button
                        label="Forget Login/Pass"
                        styles={{button: styles.alignRight, label: styles.label}}
                        onPress={this.press.bind(this)}
                    />
                </Container>
                <Container>
                    <Label text="Username or Email" />
                    <TextInput
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Password" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#e1d7d8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: "#0d8898",
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    }
});