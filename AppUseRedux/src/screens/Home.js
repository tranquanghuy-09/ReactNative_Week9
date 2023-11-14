import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { Ionicons, AntDesign} from '@expo/vector-icons';

import { addNote } from '../redux/actions';
import store from '../redux/stores';

const Home = () => {
    const [data1, setData1] = useState([]);
    console.log("data 1", data1);
    console.log(store.getState());
    return (
    <View style={styles.container}>
        <View style={styles.style1}>

        </View>
        <View style={styles.style2}>
                <View style={{width: '100%', marginTop: 10}}>
                <FlatList
                    data={['To check email', 'Learn HTML Advance', 'Medical App UI']}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 15, paddingRight: 25, height: 60, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'silver' }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', height: 40, borderWidth: 0, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 10 }}>{item}</Text>
                                    {/* <AntDesign name="right" size={18} color="silver" /> */}
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                </View>
            </View>
            <View style={styles.style3}>
                <TouchableOpacity onPress={()=>{store.dispatch(addNote('di hoc'))
                    setData1(store.getState())
                }}>
                    <Ionicons name="add-circle-outline" size={80} color="#D9614C" />
                </TouchableOpacity>
                
            </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    style1:{
        flex: 1
    },
    style2:{
        flex: 9
    },
    style3:{
        position: 'fixed',
        alignItems: 'center',
        width: '100%',
        bottom: 90,
        justifyContent: 'center',
    },

})