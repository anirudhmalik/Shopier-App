import dataApi from "../api/handlerApi";
const post = async (endPoint, id, value) => {
  const result = await dataApi.addData(endPoint, { ...value, id });
  if (result.ok) {
    console.log(result.data);
  } else console.log(result.problem);
};
const deleteData = async (endPoint, id) => {
  const result = await dataApi.removeData(endPoint, { id: id });
  if (result.ok) {
    console.log(result.data);
  } else console.log(result.problem);
};
const getData = async (endPoint, id) => {
  const result = await dataApi.getItem(endPoint, { id: id });
  if (result.ok) {
    return result.data;
  } else console.log(result.problem);
};
export default {
  post,
  deleteData,
  getData,
};
