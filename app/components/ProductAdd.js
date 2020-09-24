import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Modal,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import ProductPicker from "./ProductPicker";
import AppText from "./AppText";
import CloseIcon from "./CloseIcon";
const items = [
  {
    label: "Table",
    uri: "../components/logo.png",
    cost: "$299",
    quantity: "2pc",
    value: 1,
  },
  {
    label: "Chair",
    uri: "../components/logo.png",
    cost: "$409",
    quantity: "5pc",
    value: 2,
  },
  {
    label: "Soffa",
    uri: "../components/logo.png",
    cost: "$500",
    quantity: "9pc",
    value: 3,
  },
  {
    label: "Chair",
    uri: "../components/logo.png",
    cost: "$409",
    quantity: "5pc",
    value: 4,
  },
  {
    label: "Soffa",
    uri: "../components/logo.png",
    cost: "$500",
    quantity: "9pc",
    value: 5,
  },
  {
    label: "Chair",
    uri: "../components/logo.png",
    cost: "$409",
    quantity: "5pc",
    value: 6,
  },
  {
    label: "Soffa",
    uri: "../components/logo.png",
    cost: "$500",
    quantity: "9pc",
    value: 7,
  },
  {
    label: "Chair",
    uri: "../components/logo.png",
    cost: "$409",
    quantity: "5pc",
    value: 8,
  },
  {
    label: "Soffa",
    uri: "../components/logo.png",
    cost: "$500",
    quantity: "9pc",
    value: 9,
  },
];

function ProductAdd(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState([]);

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
                <ProductPicker
                  item={item}
                  key={item.value.toString()}
                  uri={require("../assets/logo.png")}
                  onPress={() => console.log(item.label)}
                  longPress={() =>
                    setProduct(product.filter((data) => data !== item))
                  }
                />
                <View style={styles.close} key={item.value.toString()}>
                  <CloseIcon
                    name={"window-close"}
                    iconColor={colors.green}
                    size={35}
                    onPress={() =>
                      setProduct(product.filter((data) => data !== item))
                    }
                  ></CloseIcon>
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
      <Modal visible={modalVisible}>
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
                setProduct([...product, item]);
              }}
            ></ProductPicker>
          )}
        ></FlatList>
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
});

export default ProductAdd;
