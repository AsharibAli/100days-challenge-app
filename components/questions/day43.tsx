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

const Day43 = () => {
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
        <CardTitle>Day 43</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 127
          </h3>
          <p>Convert a traditional function expression to an arrow function.</p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 127 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
The code shows two ways to define the same function: a traditional function expression traditionalFunction and an arrow function arrowFunction. Both functions take two parameters a and b and return their sum. The traditional function uses the function keyword and curly braces with an explicit return. The arrow function uses a shorter syntax with parameters in parentheses, an arrow =>, and an implicit return (no return keyword needed for one-line functions). Both traditionalFunction(5, 3) and arrowFunction(5, 3) return 8, showing that these functions are functionally equivalent but with different syntax.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Traditional function expression
const traditionalFunction = function (a, b) {
  return a + b;
};

// Converted to arrow function
const arrowFunction = (a, b) => a + b;

console.log(traditionalFunction(5, 3)); // Outputs: 8
console.log(arrowFunction(5, 3)); // Outputs: 8
// Demonstrates the conversion of a
// traditional function expression to an arrow function.

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
            Question 128
          </h3>
          <p>
            Create an arrow function that takes multiple parameters and returns
            the product of all parameters.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 128</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    The code defines an arrow function multiplyParameters that uses the rest parameter syntax ...numbers to accept any number of numeric arguments as an array numbers. It then uses the reduce method to multiply all the numbers together, starting with an initial value of 1. When called with multiplyParameters(2, 3, 4), it computes 2 * 3 * 4 and returns 24. This demonstrates how rest parameters and arrow functions can create concise, flexible functions that operate on a variable number of arguments.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Arrow function that calculates the product of all its parameters
const multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
// This function uses the rest parameter syntax to take 
// any number of arguments, then multiplies them together.

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
            Question 129
          </h3>
          <p>
            Explain how this behaves differently in arrow functions compared to
            traditional functions.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 129</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                  The code defines an object traditionalVsArrow with a value property and two methods: traditionalFunction (a regular function) and arrowFunction (an arrow function). In traditionalFunction, this refers to the traditionalVsArrow object, so this.value correctly logs "traditionalVsArrow value". However, in arrowFunction, this is not bound to the object but instead inherits from the scope where traditionalVsArrow was defined. If there's no value property in that outer scope, this.value will be undefined. This demonstrates a key difference: regular functions have their own this context, while arrow functions inherit this from their enclosing scope.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function () {
    console.log("Traditional function:", this.value); 
    'this' refers to traditionalVsArrow object
  },
  arrowFunction: () => {
    console.log("Arrow function:", this.value); 
    // 'this' is not bound to traditionalVsArrow object
    //  but to the scope in which traditionalVsArrow was defined
  },
};

traditionalVsArrow.traditionalFunction();
// Logs "traditionalVsArrow value"

traditionalVsArrow.arrowFunction();
// Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 
// 'this' is determined in traditional functions versus arrow functions.

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

export default Day43;
