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
Node.js is a free, open-source, cross-platform JavaScript
                    runtime environment that lets developers create servers, web
                    apps, command line tools and scripts.
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
                    {`The code demonstrates error handling using a try-catch block. Inside the try block, it intentionally throws a new Error with the message "Something went wrong". The catch block catches this thrown error, assigns it to the variable error, and then logs error.message, which outputs "Something went wrong". This pattern allows graceful handling of errors, preventing them from crashing the application and providing an opportunity to log, report, or handle the error appropriately.`}
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
                   The code demonstrates setting a breakpoint for debugging in browser developer tools. It logs a message, then has a commented instruction to set a breakpoint on the following line, which also logs a message. Another log follows. To use this, open the code in a browser, access developer tools (usually F12 or right-click > Inspect), go to the Sources tab, find this script, and click the line number of the desired breakpoint. Reloading or running the page will pause execution at the breakpoint, allowing inspection of variables and step-by-step debugging.
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
