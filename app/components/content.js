import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import Albums from "./albums";
export default class Content extends Component {
    constructor() {
        super();
        this.state = {
            albums: []
        }
    }
    componentWillMount() {
        axios.get("http://rallycoding.herokuapp.com/api/music_albums").then(d => { this.setState({ albums: d.data }) });
    }
    render() {
        console.log(this.state.albums);
        return (
            <View>
                <Albums data={this.state.albums} />
            </View>
        );
    }
}