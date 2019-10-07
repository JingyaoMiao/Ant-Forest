import React from 'react';
import{
    View,
    Image,
    ImageBackground,
    StyleSheet,
} from 'react-native';

export default class MenuItem extends React.Component{
    render(){
        return(
            <View style={styles.menuItem}>
                <ImageBackground
                source={this.props.itemImage}
                style={styles.image}
                />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem:{
        width:'33.33333%',
        height:'63%',
        padding: 10,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 2,
    },
    image:{
        width: '100%',
        height: '100%',
        opacity: 1,
        borderColor: 'black',
        borderWidth: 3,
    }
});