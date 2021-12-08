const updateArr = (arr, payload) => {
  const result = [...arr];
  payload.forEach((element, index) => {
    result[index] = { ...result[index], icon: element };
  });
  return result;
};

export default updateArr;
