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

const Day35 = () => {
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
        <CardTitle>Day 35</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 103
          </h3>
          <p>
            Write a function that returns a random boolean value, true or false.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 103 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The getRandomBoolean() function generates a random boolean value, which can be either true or false. It achieves this by utilizing Math.random() to generate a random number between 0 and 1. If the generated number is greater than 0.5, it returns true; otherwise, it returns false. This results in a random boolean value being output each time the function is called.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function returns a random boolean value
function getRandomBoolean(): boolean {
  return Math.random() > 0.5; 
  // Returns true if the random number is greater than 0.5
}

console.log(getRandomBoolean()); 
// Outputs either true or false randomly
// By comparing a random number to 0.5, 
// we effectively get a true or false value randomly.

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
            Question 104
          </h3>
          <p>
            Create a function that generates a random hexadecimal color code.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 104</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
The getRandomHexColor() function creates a random hexadecimal color code, which is commonly used in web design and development. It generates a random number up to 0xffffff, representing the maximum value that can be expressed in hexadecimal with six characters. Then, it converts this number to a hexadecimal string using toString(16). If necessary, it pads the string with zeros to ensure it has six characters. Finally, it returns the hexadecimal color code, starting with "#" to indicate its format.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function generates a random hexadecimal color code
function getRandomHexColor(): string {
  const color =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  return color; // Returns the random color code
}

console.log(getRandomHexColor()); 
// Outputs a random hex color code like #ff3e12

// We generate a random number, convert it to hexadecimal,
// and ensure it's 6 characters long.

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
            Question 105
          </h3>
          <p>
            Simulate a dice roll using JavaScript and return a random integer
            between 1 and 6.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 105</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   
The function rollDice() generates a random number between 1 and 6, simulating the outcome of rolling a standard six-sided dice. It utilizes Math.random() to obtain a decimal between 0 and 1, multiplies it by 6 to scale the range, then adds 1 to shift it to the desired range of 1 to 6. Finally, it returns the result, representing the outcome of the dice roll.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function simulates rolling a dice and returns
// a number between 1 and 6
function rollDice(): number {

// Calculates a random integer from 1 to 6
  return Math.floor(Math.random() * 6) + 1; 
}

console.log(rollDice()); 
// Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.

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

export default Day35;
