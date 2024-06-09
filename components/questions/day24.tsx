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

const Day24 = () => {
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
        <CardTitle>Day 24</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 70
          </h3>
          <p>
            Understanding let in Loops: Write a function that uses a loop with
            the let keyword to print numbers from 1 to 5. Explain how the let
            keyword affects the visibility of the loop variable.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 70 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Node.js is a free, open-source, cross-platform JavaScript
                    runtime environment that lets developers create servers, web
                    apps, command line tools and scripts. <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function prints numbers from 1 to 5 using a loop
function printNumbersWithLet() {
  for (let i = 1; i <= 5; i++) {
    // Uses let for loop variable i
    console.log(i); // Logs numbers 1 through 5
  }
  // i is not accessible here, outside the loop,
  // because it's defined with let
}

printNumbersWithLet();
// This shows that let limits i to the loop, preventing errors from 
// using i where it's not intended.
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
            Question 71
          </h3>
          <p>
            Compare `let` and `const`: Create two examples where `let` allows
            reassignment but `const` does not. Try to reassign a
            `const`-declared variable and catch the error.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 71</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`This code defines a variable myName with the value "Asharib"
                    and then prints a message to the console saying, "Hello
                    Asharib, Want to learn some TypeScript today?"
                    using template literals for string interpolation.`}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Using \`let\` for a variable that can be reassigned

let age = 25;
age = 26; // Works fine because \`let\` allows reassignment
console.log(age); // Shows 26

// Trying to reassign a \`const\`-declared variable
const name = "Alice";
try {
  name = "Bob"; // This line will cause an error
} catch (error) {
  console.log("Error: Can't reassign a \`const\`-declared variable.");
}
// This example illustrates that \`const\` prevents changing the 
// variable once it's set.
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
            Question 72
          </h3>
          <p>
            Block Scope with `let` and `const`: Demonstrate block scope by
            creating a code block with `{}` that uses both `let` and `const`.
            Show how variables declared inside the block are not accessible
            outside of it.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 72</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   This code defines a variable myName with the value "Asharib" and then prints three 
                   variations of the name to the console: all lowercase, all uppercase, and with only 
                   the first letter capitalized while the rest are in lowercase.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Demonstrating block scope
{
  let blockLet = "visible inside the block";
  const blockConst = "also only inside the block";
  console.log(blockLet); // Works fine here
  console.log(blockConst); // Also works fine here
}

try {
  console.log(blockLet); // This will fail
} catch (error) {
  console.log("\`blockLet\` is not accessible outside the block.");
}

try {
  console.log(blockConst); // This will also fail
} catch (error) {
  console.log("\`blockConst\` is not accessible outside the block.");
}
// This shows that \`let\` and \`const\` keep variables safe
// inside the block where they're defined.
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

export default Day24;
