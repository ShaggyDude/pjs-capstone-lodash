

const _ = {

  clamp(number, lower, upper) {
    number = +number // convert string values to number if need be.
    lower = +lower
    upper = +upper
    numberMax = Math.max(number, lower);
    numberMin = Math.min(number, upper);
    return Math.max(Math.min(number, upper), lower);
  },
  inRange: (number, start, end) => {
    const isInRange = function(number, start, end) {
      return number >= Math.min(start, end) && number < Math.max(start, end)
    }
    if (end === undefined) {
      end = start
      start = 0
    }
    return isInRange(+number, +start, +end)
  },

  words: (string) => {
    return string.split(' ');
  },
  pad: (string, length) => {
    let difference = length - string.length
    if (difference <= 0) {
      difference = 0;
    }
    let startPad = Math.floor(difference / 2);
    let endPad = Math.ceil(difference / 2);
    paddedString = ' '.repeat(startPad)+string+' '.repeat(endPad)
    return paddedString
  },

  has: (object, key) => {
    return object != null && hasOwnProperty.call(object, key)
  },
  invert: (object) => {
    const invertedObject = {}
    Object.keys(object).forEach((key) => {
      let value = object[key]
      if (value != null && typeof value.toString != 'function') {
        value = toString.call(value)
      }
      invertedObject[value] = key
    })
    return invertedObject
  },
  findKey: (object, predicate) => {
    let result
    if (object == null) {
      return result
    }
    Object.keys(object).some((key) => {
      const value = object[key]

      console.log('value:' + value)

      if (predicate(value, key, object)) {
        result = key
        return true
      }
    })
    return result
  },

  drop: (array, num = 1) => {
    const length = array == null ? 0 : array.length
    return length ? array.slice(num) : []
  },
  dropWhile(array, predicate) {
    let newArray = [];
    for(let x = 0; x < array.length; x++) {

      if(!predicate(array[x], x, array)) {
        newArray = array.slice(x);
      }
    }
    return newArray;
  },
  chunk(array, size) {
    const arrayChunks = [];
    if(!size) {
      size = 1;
    }
    for(let i = 0; i < array.length - 2; i++) {
      const arrayChunk = array.slice(i + i, i + size);
      arrayChunks.push(arrayChunk);
      size++;
    }
    return arrayChunks;
  }

}

module.exports = _;
