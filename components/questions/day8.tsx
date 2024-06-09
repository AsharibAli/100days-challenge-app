"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileQuestionIcon } from "@/components/icons/icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Day8 = () => {
  const handleCopyCode = () => {
    const codeElement = document.querySelector(".code-snippet");
    if (codeElement) {
      const codeText = (codeElement as HTMLElement).innerText;
      navigator.clipboard
        .writeText(codeText)
        .then(() => {
          alert("Code copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 8</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 22
          </h3>
          <p>
            Intentional Error: If you haven’t received an array index error in
            one of your programs yet, try to make one happen. Change an index in
            one of your programs to produce an index error. Make sure you
            correct the error before closing the program.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 22 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code initializes an array "friends" with the names "Alice", "Bob", and "Charlie". It attempts to access an element at index 3 using "friends[3]", which is intentionally incorrect as arrays are zero-indexed, resulting in an out-of-bounds error. Then, it corrects this error by assigning the value "Charlie" to the element at index 2, thus replacing the incorrect operation.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends[3]); // Intentional error: Arrays are
zero-indexed, so index 3 is out of bounds.

friends[2] = "Charlie"; // Correcting the error by accessing a valid index.

              `}
                        </pre>
                      </code>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleCopyCode}>
                    Copy the Code
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="p-3">
          <hr />
        </div>
      </CardContent>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 23
          </h3>
          <p>
            Conditional Tests: Write a series of conditional tests. Print a
            statement describing each test and your prediction for the results
            of each test. Your code should look something like this,{" "}
            <a href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-08">
              full-question
            </a>
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 23</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                  

1. Test 1: Evaluates to True because the variable "car" is assigned the value "subaru", and the comparison using "===" checks for both value and type equality.

2. Test 2: Also evaluates to True because the variable "car" is not assigned the value "toyota", so the comparison using "!==" is true.

3. Test 3: Evaluates to False because JavaScript is case-sensitive, so "subaru" is not equal to "Subaru".

4. Test 4: Evaluates to True because "car" is equal to "subaru" and not equal to "toyota".

5. Test 5: Evaluates to True because "car" is not equal to "Subaru".

6. Test 6: Evaluates to False because "subaru" is not equal to "Subaru".

7. Test 7: Evaluates to False because "car" is not assigned the value "toyota".

8. Test 8: Evaluates to True because "car" is not "subaru" but also not "toyota".

9. Test 9: Evaluates to False because "car" is not assigned the value "ford".

10. Test 10: Evaluates to False because "car" is assigned the value "subaru".
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let car = "subaru";

console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");

console.log("Is car == 'toyota'? I predict false");
console.log(car == "toyota");

// Create at least 10 tests. Have at least 5 tests evaluate to 
// True and another 5 tests evaluate to False.
`}
                        </pre>
                      </code>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleCopyCode}>
                    Copy the Code
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <div className="p-3">
          <hr />
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 24
          </h3>
          <p>
            More Conditional Tests: You don’t have to limit the number of tests
            you create to 10. If you want to try more comparisons, write more
            tests. Have at least one True and one False result for each of the
            following,{" "}
            <a href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-08">
              full-question
            </a>
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 24 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                 

1. Testing equality with strings:
   - "apple" == "apple" evaluates to True because both strings are equal.
   - "apple" == "Apple" evaluates to False because JavaScript is case-sensitive.

2. Testing with lower case:
   - "Apple".toLowerCase() == "apple" evaluates to True because "Apple" converted to lowercase is equal to "apple".

3. Numerical tests:
   - 10 > 5 evaluates to True because 10 is greater than 5.
   - 2 < 1 evaluates to False because 2 is not less than 1.

4. Tests using 'and' and 'or' operators:
   - true && false evaluates to False because both conditions must be True for the 'and' operator.
   - true || false evaluates to True because at least one condition must be True for the 'or' operator.

5. Test whether an item is in an array:
   - fruits.includes("apple") evaluates to True because "apple" is included in the "fruits" array.

6. Test whether an item is not in an array:
   - !fruits.includes("mango") evaluates to True because "mango" is not included in the "fruits" array, and the logical NOT operator (!) returns the opposite Boolean value.

                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
              `}
                        </pre>
                      </code>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleCopyCode}>
                    Copy the Code
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day8;
