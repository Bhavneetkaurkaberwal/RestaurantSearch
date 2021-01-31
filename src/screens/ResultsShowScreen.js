import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, Linking } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(()=> {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            {/* Restaurant address */}
            <Text style={styles.innerHeader}>Location</Text>
            <Text style={styles.information}>{result.location.address1}</Text>
            <Text style={styles.information}>{result.location.city}, {result.location.state}</Text>
            {/* Phone Number */}
            <Text style={styles.innerHeader}>Phone</Text>
            <Text style={styles.phone} onPress={()=> Linking.openURL(`tel:${result.phone}`)}>{result.display_phone}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10
    },
    image: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        marginTop: 5
    },
    innerHeader: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    information: {
        marginLeft: 10,
    },
    phone: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'green'
    }
});

export default ResultsShowScreen;