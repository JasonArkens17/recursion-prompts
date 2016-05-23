// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	return n < 0 ? null : n < 1 ? 1 : n * factorial(n-1)
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, total) {
	total = total || 0;

	if(array.length === 0){
		return total;
	}
	
	total = total + array[0];
	
	return sum(array.slice(1), total);
	
	
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, sum) {
	var newArr = flatten(array); 
	sum = sum || 0;

	if(newArr.length === 0){
		return sum;
	}
	sum = sum + newArr[0];

	return arraySum(newArr.slice(1), sum);
};

// 4. Check if a number is even.
var isEven = function(n) {
	if(n === 0){
		return true;
	}
	if(n === 1){
		return false;
	} 
	if(n < 0){
		return isEven(n + 2);
	} else {

	return isEven(n - 2);
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	 if(n === 0){
	 	return n
	 } 
	 if(n < 0){
	 	return (n + 1) + sumBelow(n + 1)
	 } else {
	 	return (n - 1) + sumBelow(n - 1)
	 }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, results) {
	results = results || [];

		if(x === y) {
			return results.slice(1);
		}
		if(x > y){
			results.push(x)
			return range((x-1), y, results)
		} else {
			results.push(x)
			return range((x+1), y, results);
		}
	
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	return exp === 0 ? 1 : base * exponent(base, exp - 1)
}

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(s) {
	if (s.length===1) return s;
    return reverse(s.slice(1)) + s[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(str) {
   
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y, acc) {
		acc = acc || y;

	
		if(x === 1) {
			return acc;
		}	

        acc = acc + y;

		return multiply(x - 1, y, acc);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	return str1 === str2;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, results){
	results = results || [];

	if(str.length === 0){
		return results;
	}
	results.push(str[0])
     return createArray(str.slice(1), results)

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
	if (array.length === 1) return array;
    return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, results) {
	results = results || [];
	if(length === 0){
		return results;
	}
	results.push(value);
	length = length - 1;
	return buildList(value, length, results)
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count) {
	count = count || 0 

	if(array.length === 0){
		return count; 
	}
	if(array[0] === value){
		count = count + 1;
	}
	return countOccurrence(array.slice(1), value, count)

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, results) {
	results = results || [];

	if(array.length === 0){
		return results; 
	}
	results.push(callback(array[0]))
	return rMap(array.slice(1), callback, results);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, results) {
	
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, results) {
	results = results || [];
	if(input.length === 0){
		return results;
	}
	results.push(input[0].toUpperCase());
	return capitalizeWords(input.slice(1), results)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(input, results) {
	results = results || [];
	if(input.length === 0){
		return results;
	}
	var regex = /[a-z]/;
	var str = input[0].replace(regex, function(x){return x.toUpperCase();})
	results.push(str);

	return capitalizeWords(input.slice(1), results)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(toFlatten) {
	var isArray = Object.prototype.toString.call(toFlatten) === '[object Array]';

  if (isArray && toFlatten.length > 0) {
    var head = toFlatten[0];
    var tail = toFlatten.slice(1);

    return flatten(head).concat(flatten(tail));
  } else {
    return [].concat(toFlatten);
  }

};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
	obj = obj || {};
	var char = str.charAt(0)

	if(str.length === 0){
		return obj;
	}
	if(obj[char] === undefined) {
		obj[char] = 1;
	} else {
		obj[char]++;
	}

	return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, results) {
	results = results || [];

	if(list.length ===0){
		return results;
	}
	if(list[0] !== list[1]){
		results.push(list[0])
	}
	return compress(list.slice(1), results)


};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, results) {
	results = results || [];
	
	if(array.length === 0){
		return results; 
	} 
	var temp = array[0]
	
	temp.push(aug);
	
	results.push(temp);
	

	return augmentElements(array.slice(1), aug, results)


};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, results){
	results = results || []; 

	if(array.length === 0){
		return results;
	}
	if(array[0] === 0){
		array.shift()
	}
	results.push(array[0])

	return minimizeZeroes(array.slice(1), results)
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, results, count) {
		results = results || []; 
		count = count || 1; 

		if(array.length === 0){
			return results;
		} 
		if(array[0] < 0){
			array[0] = array[0] * -1;
		}

		if(count % 2 === 0){
			array[0] = array[0] * -1;
		}

		results.push(array[0]);
		count++;

		return alternateSign(array.slice(1), results, count)
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

	var nums = {
		1: 'one',
 	    2: 'two',
 	    3: 'three',
 	    4: 'four',
 	    5: 'five',
 	    6: 'six',
 	    7: 'seven',
 	    8: 'eight',
 	    9: 'nine',
 	    0: 'zero'
	};

var numToText = function(str, results) {
	results = results || ''; 

	if(str.length === 0){
		return results;
	}
	var currentChar = str.charAt(0);
	if(nums.hasOwnProperty(currentChar)){
		results = results.concat(nums[currentChar])
	} else {
		results = results.concat(currentChar)
	}	
	return numToText(str.slice(1), results)
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
