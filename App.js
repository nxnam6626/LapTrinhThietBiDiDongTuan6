import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: 'https://picsum.photos/seed/picsum/200/300',
    nameProduct: 'Ca nấu lẩu, nấu mì mini',
    nameShop: 'Shop Devang',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
    img: 'https://picsum.photos/seed/picsum/200/300',
    nameProduct: 'Ca nấu lẩu, nấu mì mini',
    nameShop: 'Shop Devang',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b2',
    img: 'https://picsum.photos/seed/picsum/200/300',
    nameProduct: 'Ca nấu lẩu, nấu mì mini',
    nameShop: 'Shop Devang',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
    img: 'https://picsum.photos/seed/picsum/200/300',
    nameProduct: 'Ca nấu lẩu, nấu mì mini',
    nameShop: 'Shop Devang',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
    img: 'https://picsum.photos/seed/picsum/200/300',
    nameProduct: 'Ca nấu lẩu, nấu mì mini',
    nameShop: 'Shop Devang',
  },
];

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}>
    <Image source={{ uri: item.img }} style={styles.image} />
    <View>
      <Text>{item.nameProduct}</Text>
      <Text style={{ color: 'red' }}>{item.nameShop}</Text>
    </View>

    <TouchableOpacity style={styles.buttonChat}>
      <Text style={{ color: '#fff' }}>Chat</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#fff' : '#ccc';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Chat</Text>

        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="return-down-back-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    height: 40,
    width: 40,
  },
  buttonChat: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#ccc',
    padding: 20,
    marginVertical: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  button: {
    padding: 10,
  },
});

export default App;
