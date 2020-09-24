import { AsyncStorage } from "react-native";
const store = async (id, value) => {
  try {
    await AsyncStorage.setItem(id, JSON.stringify(value));
    const keys = await AsyncStorage.getAllKeys();
    console.log("keys all:" + keys);
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const result = JSON.parse(value);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const getAll = async (id) => {
  const data = [];
  const newkeys = [];
  var index = 0;
  const keys = await AsyncStorage.getAllKeys();
  keys.forEach(async (key) =>
    key.match("^" + id + "(.*)$") ? (newkeys[index++] = key) : console.log("")
  );
  const items = await AsyncStorage.multiGet(newkeys);
  items.map((item, index) => (data[index] = JSON.parse(item[1])));
  return data;
};
const merge = async (key, item) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};
const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return null;
  } catch (error) {
    console.log(error);
  }
};
const removeBranch = async (id) => {
  try {
    const newkeys = [];
    const keys = await AsyncStorage.getAllKeys();
    keys.forEach(async (key, index) =>
      key.match("^" + id + "(.*)$") ? (newkeys[index] = key) : null
    );
    await AsyncStorage.multiRemove(newkeys);
  } catch (error) {
    console.log(error);
  }
};
export default {
  store,
  get,
  remove,
  getAll,
  merge,
  removeBranch,
};
