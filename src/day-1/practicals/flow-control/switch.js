var data = 'okiki';

var dataType = typeof data;

  switch (dataType) {
    case 'string':
      console.log(data, 'IS A STRING');
      break;
    case 'function':
      console.log(data, 'IS A FUNCTION');
      break;
    case 'array':
      console.log(data, 'IS AN ARRAY');
      break;
    case 'object':
      console.log(data, 'IS AN OBJECT');
      break;
    default:
      console.log(data, 'Unknown');
  }
