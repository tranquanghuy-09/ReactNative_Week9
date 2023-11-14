import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {addNote} from '../redux/actions';
import store from '../redux/stores';
import React from 'react';
import { connect } from 'react-redux';


let Test = () => {
    console.log(store.getState());
    store.dispatch({
        type: 'add',
        note: 'Di hoc'
    });
    console.log(store.getState());
    store.dispatch(addNote('dihoc'));
    console.log(store.getState());
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flex: 1, width: 45, height: 45, }} >
        <Text> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, width: 45, height: 45, }} >
        <Text> - </Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});

// let mapStateToProps = (state) => ([])
// let mapDispatchToProps = (dispatch) =>({
//   add: () => dispatch({
//     type: 'add',
//     note: 'Di hoc'
//   }),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Test)
export default Test;