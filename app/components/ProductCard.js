import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  FlatList,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Products from "./Products";
import ProductPicker from "./ProductPicker";
import CloseIcon from "./CloseIcon";
import cache from "../utility/cache";
import apiCache from "../utility/apiCache";

function ProductCard({ title, productKey }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const [items, setItems] = useState();
  const scrollView = useRef();
  useEffect(() => {
    getProduct();
  }, []);
  const addProduct = async (id, object) => {
    await cache.store(id, object);
    const data = await cache.get(id);
    setProduct([...product, data]);
  };
  const getProduct = async () => {
    const data = await cache.getAll(productKey);
    setProduct(data);
    const data1 = await apiCache.getData("/productlist");
    setItems(data1);
  };
  const removeProduct = async (id) => {
    await cache.remove(id);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <AppText style={styles.text}>{title}</AppText>
        </View>
        <ScrollView
          ref={scrollView}
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.productlist}>
            {product.map((item) => (
              <>
                <View key={item.value}>
                  <Products
                    key={item.value + "product"}
                    item={item}
                    image={require("../assets/logo.png")}
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
            <TouchableHighlight
              underlayColor={colors.light}
              style={styles.AddCard}
              onPress={() => setModalVisible(true)}
            >
              <>
                <Image
                  style={styles.image}
                  source={require("../assets/add.png")}
                />
                <AppText>Add Products</AppText>
              </>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <>
          <View style={styles.text1}>
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
  AddCard: {
    width: 150,
    height: 200,
    backgroundColor: colors.white,
    margin: 15,
    padding: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    width: "95%",
    marginVertical: 20,
    paddingVertical: 10,
  },
  close: {
    paddingRight: 20,
    paddingTop: 15,
    position: "absolute",
    elevation: 10,
  },
  productlist: {
    flexDirection: "row",
  },
  text: {
    paddingLeft: 10,
  },
  text1: {
    backgroundColor: colors.light,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});

export default ProductCard;
