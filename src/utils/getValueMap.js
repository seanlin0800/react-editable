var getValueMap = function(options) {
  var ret = {};

  options.forEach(function(option) {
    ret[option.value] = option.text;
  });

  return ret;
};

module.exports = getValueMap;
