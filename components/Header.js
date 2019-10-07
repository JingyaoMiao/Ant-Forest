import React from 'react';
import{
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
} from 'react-native';

export default class Header extends React.Component{
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:10,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    headerTitle:{
        color:'black',
        fontSize:25,
        fontWeight:'700',
    }
});