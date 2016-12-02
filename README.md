# ancient-kite
# NPM Module for common JS utility functions

##Goals:
###Implement 20 lodash methods:

1. **add** <br>
  Adds values together<br>
  ```
  add(6, 4);
  // => 10
  ```
1. **tail**<br>
  Gets all but the first element of array.<br>
  ```
  tail([1, 2, 3]);
  // => [2, 3]
  ```
1. **chunk**<br>
  Takes an array and creates multiple arrays from that with the given size<br>
  ```
  chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
  ```
* **drop**<br>
  Removes X values in an array from the beginning of it<br>
  ```
  drop([1, 2, 3], 2);
// => [3]
  ```
* **head**<br>
  Returns the first value of an array<br>
  ```
  head([1, 2, 3]);
// => 1
  ```
- **intersection**<br>
  Creates an array of values that are found in a group of arrays provided<br>
  ```
  intersection([2, 1], [2, 3]);
// => [2]
  ```
- **isArray**<br>
  Checks if the value provided is an array<br>
  ```
  isArray('abc');
// => false
  ```
- **last**<br>
  Returns the last element of an array<br>
  ```
  last([1, 2, 3]);
// => 3
  ```
- **lt**<br>
  Checks if a value is less than another value<br>
  ```
  lt(1, 3);
// => true
  ```
- **mean**<br>
  Calculates the mean in values; the total divided by the amount of numbers<br>
  ```
  mean([4, 2, 8, 6]);
// => 5
```
- **multiply**<br>
  Multiplies two numbers <br>
  ```
  multiply(6, 4);
// => 24
  ```
- **noop**<br>
  Returns undefined. <br>
  ```
  noop("everything") // => undefined
  ```
- **nth**<br>
  Grabs the Nth element of an array, and will take the Nth to last element if N is negative<br>
  `var array = ['a', 'b', 'c', 'd'];`<br>
  `nth(array, -2); // => 'c';`
- **pull**<br>
  Removes all given values from the given array<br>
  `var array = ['a', 'b', 'c', 'a', 'b', 'c'];`<br>
  `pull(array, 'a', 'c'); // => ['b', 'b']`
- **size**<br>
  Returns the length of array-like values<br>
  ```
  size({ 'a': 1, 'b': 2 });
// => 2
  ```
- **stubArray**<br>
  Returns a new empty array <br>
  ```
  stubArray("anything");
  // => []
  ```
- **subtract**<br>
  Subtracts a value from another value<br>
  ```
  subtract(6, 4);
// => 2
  ```
- **tail** <br>
  Returns everything except the first element in an array<br>
  ```
  tail([1, 2, 3]);
// => [2, 3]
  ```
- **to_Lower**<br>
  Converts a whole string to lowercase<br>
  ```
  toLower('--Foo-Bar--');
// => '--foo-bar--'
  ```
- **to_Upper**<br>
  Converts a whole string to uppercase<br>
  ```
  toUpper('--foo-bar--');
// => '--FOO-BAR--'
  ```
- **toArray**<br>
  Converts values into arrays<br>
  ```
  toArray('abc');
// => ['a', 'b', 'c']
  ```

###Stretch Goals:
1. **compact** <br>
  Removes false, undefined, NaN, 0, '' from arrays<br>
  ```
  compact([0, 1, false, 2, '', 3]);
  // => [1, 2, 3]
  ```
1. **concat** <br>
  Creates a new array that concatenates new values into the original array  
  `var array = [1];`<br>
  ```
  var other = _.concat(array, 2, [3], [[4]]); // => [1, 2, 3, [4]]
  ```
1. **initial** <br>
  Grabs everything except the last element in an array
  ```
  _.initial([1, 2, 3]);
// => [1, 2]
  ```
1. **reverse**  
  Reverses the order of an array  
  ```
  var array = [1, 2, 3];  
   
_.reverse(array);  
// => [3, 2, 1]  
  ```
1. **isNumber**  
1. **subtract**  
1. **zip**
