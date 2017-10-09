import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Album from "./album";
export default class Albums extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.props.data.map((item, i) => <Album key={i}>{item}</Album>)
                    }
                </ScrollView>
            </View>
        );
    }
}
