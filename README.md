#####Livelink : https://educare-bbf11.web.app/login
 
 ###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined. ?

<i>In the given code, there is a typo in the variable name. Instead of greeting, it's written as greetign when assigning an empty object {}. This will result in a ReferenceError because greetign is not defined as a variable.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:D: 3. ?

<i>JavaScript is dynamically typed, so it performs type coercion when you try to add different types. In this case, the function sum takes two arguments, a and b. When sum(1, "2") is called, JavaScript coerces the number 1 to a string and then concatenates it with the string "2", resulting in the string "12"</i>

</p>
</details>


###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>food is an array containing emojis representing different foods.
info is an object with a property favoriteFood assigned the value at the 0th index of the food array, which is '🍕'.
The line info.favoriteFood = "🍝"; updates the favoriteFood property of the info object to '🍝'.
However, this change does not affect the original food array, so food remains unchanged and still contains ['🍕', '🍫', '🥑', '🍔'].
Thus, the console.log(food) prints the original food array.




</b></summary>
<p>

#### Answer:A: ['🍕', '🍫', '🥑', '🍔'].?

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined. 

<i>The sayHi function expects an argument name.
However, when calling sayHi() in the console.log statement, no argument is provided.
Since name is not provided, it defaults to undefined within the function.
The function returns the string "Hi there, undefined", where undefined is the value of name in this case.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3.

<i>The nums array contains four elements: [0, 1, 2, 3].
The forEach method is called on the nums array, iterating over each element.
In the callback function, a check for truthiness is performed (if (num)), and since 0 is falsy and the other numbers are truthy, only the numbers 1, 2, and 3 increment the count.
Therefore, the count variable is incremented three times, resulting in a final value of 3.</i>

</p>
</details>
