import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight underlayColor={'#e8e8e8'} onPress={this.props.onpress} style={this.props.button_styles}>
                    <View>
                        <Text style={this.props.button_text_styles}>{this.props.text}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}