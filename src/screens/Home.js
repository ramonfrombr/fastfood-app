import {
    View,
    Text,
    Image,
    Picker,
    StyleSheet,
    ScrollView
 } from 'react-native'
import React, {useState} from 'react'
import Icon from '@expo/vector-icons/Entypo'
import Product from '../components/Product'


export default function Home( { navigation } ) {
  
    const [city, setCity] = useState('');

    return (
    <ScrollView
        style={{backgroundColor: '#fff'}}
    >
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 40,
                marginHorizontal: 20
            }}
        >
            <View
                style={{width: '10%'}}
            >
                <Image
                    source={require('../../assets/images/1.png')}
                />
            </View>
            <View
                style={{
                    width: '80%',
                    alignItems: 'center',
                }}
            >
                <Picker
                    selectedValue={city}
                    style={{height: 50, width: 160}}
                    onValueChange={(itemValue, itemIndex) => {
                        setCity(itemValue);
                    }}
                >
                    <Picker.Item
                        label='Los Angeles'
                        value='Los Angeles'
                        style={{fontWeight: 'bold'}}
                    />
                    <Picker.Item
                        label='Miami'
                        value='Miami'
                        style={{fontWeight: 'bold'}}
                    />
                    <Picker.Item
                        label='New York'
                        value='New York'
                        style={{fontWeight: 'bold'}}
                    />
                </Picker>
            </View>
            <View>
                <Icon name='magnifying-glass' size={30} />
            </View>
        </View>

        <View
            style={{
                paddingHorizontal: 20,
                marginTop: 50
            }}
        >
            <Text
                style={{fontSize: 30, fontWeight: 'bold'}}
            >Food that</Text>
            <Text
                style={{fontSize: 30, fontWeight: 'bold'}}
            >meets your needs</Text>
        </View>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20}}
        >
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#f9dd7a',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}
            >
                <Image
                    source={require('../../assets/images/5.png')}
                    style={{height: 40, width: 40}}
                />
                <Text
                    style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}
                >Burgers</Text>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}
            >
                <Image
                    source={require('../../assets/images/10.png')}
                    style={{height: 40, width: 40}}
                />
                <Text
                    style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}
                >Burrito</Text>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}
            >
                <Image
                    source={require('../../assets/images/7.png')}
                    style={{height: 40, width: 40}}
                />
                <Text
                    style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}
                >Salads</Text>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}
            >
                <Image
                    source={require('../../assets/images/6.png')}
                    style={{height: 40, width: 40}}
                />
                <Text
                    style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}
                >Pizzas</Text>
            </View>
        </ScrollView>

        <View
            style={{
                alignItems: 'center',
                marginHorizontal: 20,
                flexDirection: 'row',
                marginTop: 40
            }}
        >
            <View
                style={{width: '50%'}}
            >
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: 'bold'
                    }}
                >New Products</Text>
            </View>

            <View
                style={{
                    width: '50%',
                    alignItems: 'flex-end'
                }}
            >
                <Icon
                    name='dots-three-horizontal'
                    size={25}
                    color='#848385'
                />
            </View>
        </View>
        
        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                marginTop: 10
            }}
        >
            <Product
                image={require('../../assets/images/4.png')}
                title='Smokehouse'
                price='12.99'
                onPress={() => navigation.navigate('Detail')}
            />
            <Product
                image={require('../../assets/images/9.png')}
                title='Honey Chilli'
                price='10.99'
                marginTop={25}
            />
        </View>

        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                marginTop: 10
            }}
        >
            <Product
                image={require('../../assets/images/6.png')}
                title='Adios Pizza'
                price='12.99'
            />
            <Product
                image={require('../../assets/images/10.png')}
                title='Burrito'
                price='10.99'
                marginTop={25}
            />
        </View>

        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                marginTop: 10
            }}
        >
            <Product
                image={require('../../assets/images/4.png')}
                title='Smokehouse'
                price='12.99'
                onPress={() => navigation.navigate('Detail')}
            />
            <Product
                image={require('../../assets/images/9.png')}
                title='Honey Chilli'
                price='10.99'
                marginTop={25}
            />
        </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({

})