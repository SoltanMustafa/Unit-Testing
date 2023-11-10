const reverseText = require('./Text');

describe('reverseText', () => {
    it('should reverse a string', () => {
      expect(reverseText('Hello, World!')).toBe('!dlroW ,olleH');
    });
  
    it('should handle empty string', () => {
      expect(reverseText('')).toBe('');
    });
  
    it('should handle numbers', () => {
      expect(reverseText('12345')).toBe('54321');
    });
  
    it('should handle special characters', () => {
      expect(reverseText('@#$%&')).toBe('&%$#@');
    });
  
    it('should throw an error for invalid input', () => {
      expect(() => reverseText(123)).toThrow('Invalid input');
      expect(() => reverseText(null)).toThrow('Invalid input');
    });
  });