function reverseText(text) {
    if (typeof text !== 'string' || text.length === 0) {
      throw new Error('Invalid input');
    }
   
    return text.split('').reverse().join('');
  }

  module.exports = reverseText