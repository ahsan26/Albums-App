import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Linking } from "react-native";
import Button from "./button";
export default class Album extends Component {
    render() {
        return (
            <View style={styles.albumContainer}>
                <View style={styles.album_head}>
                    <Image style={styles.thumbnailStyle} source={{ uri: this.props.children.thumbnail_image }} />
                    <View style={styles.head_txt_container}>
                        <Text style={styles.titleStyle}>{this.props.children.title}</Text>
                        <Text>{this.props.children.artist}</Text>
                    </View>
                </View>
                <View>
                    <Image style={styles.mainIMG} source={{ uri: this.props.children.image }} />
                </View>
                <View>
                    <Button action={_ => Linking.openURL(this.props.children.url)}>Buy Now</Button>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    albumContainer: {
        paddingLeft: 10,
        paddingBottom: 60,
        paddingRight: 10,
    },
    album_head: {
        padding: 10,
        flexDirection: "row"
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    head_txt_container: {
        marginLeft: 10,
        justifyContent: "space-around",
    },
    titleStyle: {
        fontSize: 18
    },
    mainIMG: {
        height: 350,
    }
});