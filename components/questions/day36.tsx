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

const Day36 = () => {
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
        <CardTitle>Day 36</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 106
          </h3>
          <p>
            Determine if a given year is a leap year using comparison operators.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 106 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The isLeapYear function efficiently determines whether a given year is a leap year or not. It evaluates whether the year satisfies the conditions for a leap year: it must be divisible by 4 but not by 100 unless it is also divisible by 400. For example, isLeapYear(2020) returns true because 2020 is divisible by 4 but not by 100, whereas isLeapYear(1900) returns false because although it is divisible by 4, it is also divisible by 100 without being divisible by 400.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function checks if a year is a leap year
function isLeapYear(year: number): boolean {
  // Checks the conditions for a leap year
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); // Outputs: true
console.log(isLeapYear(1900)); // Outputs: false
// By using comparison operators,
// we can easily determine if a year is a leap year or not.

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
            Question 107
          </h3>
          <p>
            Write a condition using logical operators that checks if a number is
            divisible by both 2 and 3.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 107</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    The isDivisibleByTwoAndThree function determines whether a number is divisible by both 2 and 3. It achieves this by using the modulo operator (%) to check if the remainder of dividing the number by 2 and 3 is zero. If both conditions are met, the function returns true; otherwise, it returns false. For instance, when evaluating isDivisibleByTwoAndThree(12), it returns true because 12 is divisible by both 2 and 3, while for isDivisibleByTwoAndThree(14), it returns false since 14 is not divisible by 3.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function checks if a number is divisible by both 2 and 3
function isDivisibleByTwoAndThree(number: number): boolean {
  // Uses the modulo operator to check for no remainder
  return number % 2 === 0 && number % 3 === 0;
}

console.log(isDivisibleByTwoAndThree(12)); // Outputs: true
console.log(isDivisibleByTwoAndThree(14)); // Outputs: false
// Logical operators help us verify the number's divisibility 
// by both 2 and 3.
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
            Question 108
          </h3>
          <p>
            Compare two strings to check if they are identical, ignoring case
            sensitivity.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 108</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   
The areStringsEqualIgnoreCase function compares two strings while ignoring their case sensitivity. It achieves this by converting both strings to lowercase using the toLowerCase method before comparing them. As a result, it returns true if the lowercase versions of the strings are identical and false otherwise. For instance, when comparing "hello" and "Hello," it returns true, whereas comparing "world" and "Word" returns false. This ensures that case differences do not affect the comparison result.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
  // Converts both strings to lowercase before comparison
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(areStringsEqualIgnoreCase("hello", "Hello")); // Outputs: true
console.log(areStringsEqualIgnoreCase("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores 
// case differences.
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

export default Day36;
