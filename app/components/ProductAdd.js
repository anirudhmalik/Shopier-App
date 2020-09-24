import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Modal,
  FlatList,
} from "react-native";
import cache from "../utility/cache";
import colors from "../config/colors";
import ProductPicker from "./ProductPicker";
import AppText from "./AppText";
import CloseIcon from "./CloseIcon";
import apiCache from "../utility/apiCache";

function ProductAdd({ productKey }) {
  const endPoint = "/products";
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const [items, setItems] = useState();
  useEffect(() => {
    getProduct();
  }, []);
  const addProduct = async (id, object) => {
    await cache.store(id, object);
    const data = await cache.get(id);
    setProduct([...product, data]);
    await apiCache.post(endPoint, id, { itemId: object.id });
  };
  const getProduct = async () => {
    //const data = await cache.getAll(productKey);
    //setProduct(data);
    const data = await apiCache.getData(endPoint, productKey);
    if (data != null) {
      setProduct(data);
    }
    const data1 = await apiCache.getData("/productlist");
    setItems(data1);
  };

  const removeProduct = async (id) => {
    await cache.remove(id);
    await apiCache.deleteData(endPoint, id);
  };

  return (
    <>
      <TouchableHighlight
        underlayColor={colors.white}
        onPress={() => setModalVisible(true)}
      >
        <>
          <View style={styles.list}>
            {product.map((item) => (
              <>
                <View key={item.value}>
                  <ProductPicker
                    key={item.value + "product"}
                    item={item}
                    uri={require("../assets/logo.png")}
                    onPress={() => console.log(item.label)}
                  />

                  <View style={styles.close} key={item.id}>
                    <CloseIcon
                      key={item.id + "icon"}
                      name={"window-close"}
                      iconColor={colors.green}
                      size={35}
                      onPress={() => {
                        setProduct(product.filter((data) => data !== item));
                        removeProduct(productKey + item.value);
                      }}
                    ></CloseIcon>
                  </View>
                </View>
              </>
            ))}
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require("../assets/add.png")}
              />
              <AppText>Add Products</AppText>
            </View>
          </View>
        </>
      </TouchableHighlight>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <>
          <View style={styles.text}>
            <AppText>Tap To Add Products</AppText>
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            style={styles.list}
            renderItem={({ item }) => (
              <ProductPicker
                item={item}
                uri={require("../assets/logo.png")}
                onPress={() => {
                  setModalVisible(false);
                  addProduct(productKey + item.value, item);
                }}
              ></ProductPicker>
            )}
          ></FlatList>
        </>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  close: {
    paddingRight: 20,
    paddingTop: 5,
    position: "absolute",
  },
  container: {
    backgroundColor: colors.white,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 2,
    height: 100,
    marginHorizontal: 5,
  },
  image: {
    height: 70,
    width: 70,
  },
  list: {
    backgroundColor: colors.light,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ProductAdd;
