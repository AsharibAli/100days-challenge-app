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

const Day47 = () => {
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
        <CardTitle>Day 47</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 139
          </h3>
          <p>
            List three reserved words in JavaScript and create a valid use case
            for each.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 139 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code demonstrates the use of the reserved words let, if, and return. The let keyword is used to declare a block-scoped variable named count with an initial value of 5. The if statement checks if count is greater than 0, and if true, it logs a message to the console. The return keyword is used in the add function to return the sum of its two arguments, a and b, and exit the function. This code illustrates how these reserved words can be used in valid and common scenarios.

`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Reserved word: let - used to declare a block-scoped 
// local variable
let count = 5;

// Reserved word: if - used to execute a block of code
//  if a specified condition is true
if (count > 0) {
  console.log("Count is greater than 0.");
}

// Reserved word: return - used to exit a function and r
// eturn a value from that function
function add(a, b) {
  return a + b;
}

// Demonstrates valid use cases for the reserved 
// words 'let', 'if', and 'return'.
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
            Question 140
          </h3>
          <p>
            Explain the error that occurs when trying to use a reserved word as
            a variable name.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 140</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    This code snippet explains that using a reserved word as a variable name causes a syntax error. It shows an example where attempting to declare a variable named if with let if = 5; would result in an error. The code then logs a message to the console, emphasizing that reserved words should not be used as identifiers to avoid such errors.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Attempting to use a reserved word as a variable name
// let if = 5; // This line would cause a syntax error

console.log(
  "Using a reserved word as a variable name causes a 
  syntax error in JavaScript."
);

// It's important to avoid using reserved words as 
// identifiers to prevent these errors.
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
            Question 141
          </h3>
          <p>
            Discuss the significance of the await reserved word in asynchronous
            JavaScript.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 141</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
              This code demonstrates the use of the await keyword in asynchronous programming. Inside the fetchData function, which is declared with async, the await keyword is used to pause the execution until the fetchSomething function (which returns a Promise) settles. Once it resolves, the code resumes and logs the data. The await keyword helps write asynchronous code in a more readable and linear manner.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Example use of the 'await' reserved word 
// in asynchronous JavaScript

async function fetchData() {
  // Assuming fetchSomething returns a Promise
  const data = await fetchSomething();
  console.log(data);
  // The 'await' keyword pauses the execution until the 
  // Promise settles, and then resumes with the resolved value.
}

console.log(
  "The 'await' keyword allows asynchronous, promise-based
  behavior to be written in a cleaner, more linear fashion."
);

// This demonstrates how 'await' improves readability and 
// flow in asynchronous code.

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

export default Day47;
