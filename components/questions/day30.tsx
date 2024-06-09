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

const Day30 = () => {
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
        <CardTitle>Day 30</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 88
          </h3>
          <p>
            Converting Strings to Numbers: Write a function that takes a string
            representation of a number (e.g., `123`) and converts it into an
            actual number type.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 88 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The convertStringToNumber function utilizes the Number function to convert a string into a numerical value. In the example, the string "123" is transformed into the number 123. Now, it can be treated as a numerical value rather than just text.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function turns text into an actual number
function convertStringToNumber(str: string): number {
  return Number(str); // Converts the string to a number
}

// Example: Changing "123" into a real number
console.log(convertStringToNumber("123")); 
// Outputs the number 123
// Now, "123" is not just text; it's a number we can use in calculations.
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
            Question 89
          </h3>
          <p>
            Rounding Numbers: Create a function that takes a number with
            decimals (e.g., `3.14159`) and rounds it to two decimal places.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 89</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
The roundToTwoDecimalPlaces function first uses the toFixed method to round the number to two decimal places and returns a string representation of that number. Then, it converts that string back to a number using the Number function, ensuring that the result is a number. In the example, π (3.14159) is rounded off to 3.14, simplifying its representation.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function rounds a number to two decimal places
function roundToTwoDecimalPlaces(num: number): number {
  return Number(num.toFixed(2)); 
  // Rounds and converts back to number
}

// Example: Rounding π to two decimal places
console.log(roundToTwoDecimalPlaces(3.14159)); // Outputs 3.14
// π is now rounded off, making it simpler to work with.
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
            Question 90
          </h3>
          <p>
            Generating Random Numbers: Write a function that generates a random
            number between 1 and 10, inclusive.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 90</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The generateRandomNumber function utilizes Math.random() to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). Then, it's scaled up to a range from 1 to 10 using multiplication and addition, and finally rounded down using Math.floor() to ensure it's an integer. Each time you call this function, you'll likely get a different random number between 1 and 10.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function creates a random number between 1 and 10
function generateRandomNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
  // Scales up and rounds down
}

// Example: Getting a random number
console.log(generateRandomNumber()); 

// Shows a random number between 1 and 10
// Each time you call this, you might get a different number.
// It's all up to chance!

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

export default Day30;
