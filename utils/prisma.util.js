const exclude = (data, keys) => {
  for (let key of keys) {
    delete data[key];
  }

  return data;
};

module.exports = {
  exclude,
};
