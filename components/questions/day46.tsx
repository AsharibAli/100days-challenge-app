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

const Day46 = () => {
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
        <CardTitle>Day 46</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 136
          </h3>
          <p>
            Use console.log() to debug and track the value of a variable inside
            a loop.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 136 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code runs a loop five times, with the variable i starting at 1 and increasing by 1 each time until it reaches 5. During each iteration, it prints the current iteration number and the value of i to the console, which helps track and debug the loop's behavior.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Demonstrates using console.log() inside a loop to track 
// variable values

for (let i = 1; i <= 5; i++) {
  console.log(\`Iteration \${i}, i value:, i\`);
  // Logs the current iteration number and the value of i
}

// This loop iterates five times, logging the value of 'i'
//  during each iteration to help with debugging.

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
            Question 137
          </h3>
          <p>
            Implement a try-catch block to handle potential errors in a block of
            code.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 137</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    This code uses a try-catch block to manage errors. In the try block, an error is intentionally thrown with the message "Something went wrong." The catch block catches this error and logs its message to the console, allowing the program to handle the error gracefully without crashing.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Demonstrates using a try-catch block to handle errors

try {
  // Intentionally cause an error
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message); // Logs the error message
}

// This code tries to execute a block that throws an error,
// and the catch block handles the error gracefully.
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
            Question 138
          </h3>
          <p>
            Describe how to use breakpoints in browser developer tools to debug
            JavaScript code.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 138</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   This code snippet demonstrates where to set a breakpoint using your browser's developer tools. It includes three console log statements: one before the breakpoint, one where the breakpoint should be set, and one after. To use breakpoints, you need to open the code in your browser, go to the developer tools, find the script in the Source tab, and click on the line number you want to pause execution on. When you reload or run the page, the execution will pause at the breakpoint, allowing you to inspect the code's behavior.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");

// Set a breakpoint on the following line using your
// browser's developer tools

console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);

console.log("After breakpoint");
// To use breakpoints, open this code in your browser,
// open the developer tools, navigate to the Source tab,
// find this script, and click on the line number where 
// you want to pause execution. When you reload or run
// your page, execution will pause at the breakpoint.
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

export default Day46;
