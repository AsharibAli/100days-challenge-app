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

const Day44 = () => {
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
        <CardTitle>Day 44</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 130
          </h3>
          <p>
            Explain how to export a function from one JavaScript file and import
            it into another file.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 130 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
The code demonstrates the export and import of a simple function in TypeScript:

In mathFunctions.ts, an arrow function add is defined. It takes two parameters a and b, both of type number, and returns their sum, also of type number. The : number after the parameter list is TypeScript's way of specifying the return type. The export keyword makes this function available for import in other files.
In another file, the add function is imported using the named import syntax import { add } from "./mathFunctions". This allows the file to use the add function as if it were defined locally.
The imported add function is then used by calling add(2, 3), which returns 5 and logs it to the console.

This pattern of exporting and importing individual functions is common in TypeScript/JavaScript for building modular, reusable code. It allows you to organize your code into logical units (like math functions) and use them across different parts of your application.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// In another file where you want to use the add function:
import { add } from "./mathFunction";

console.log(add(2, 3)); // Outputs: 5
// Demonstrates importing the add function
// from mathFunctions.ts and using it.
              `}
                          <br /> <br />
                          {`
// In file: mathFunctions.ts
export const add = (a: number, b: number): number => a + b;
// This line exports an add function from mathFunctions.ts

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
            Question 131
          </h3>
          <p>
            Create two modules; one that exports a class, and another that
            imports the class and creates an instance.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 131</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    The code demonstrates the export and import of a TypeScript class:

In Person.ts, the Person class is defined with a name property, a constructor that takes a name parameter to initialize this.name, and a greet method that logs a greeting with the person's name. The export keyword before class makes this class available for import in other files.
In another file, the Person class is imported using the named import syntax import { Person } from "./Person". This allows the file to use the Person class as if it were defined locally.
An instance of Person named alice is created with the argument "Alice", which gets passed to the constructor. Calling alice.greet() invokes the greet method, outputting "Hello, my name is Alice".

This pattern of exporting and importing classes is fundamental in TypeScript/JavaScript for code organization, reusability, and maintaining separation of concerns across files.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// In another file:
import { Person } from "./Person";

const alice = new Person("Alice");
alice.greet(); // Outputs: Hello, my name is Alice
// This snippet imports the Person class and uses it to create an instance.
`}
                          <br /> <br />
                          {`
// In file: Person.ts
export class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
}
// Exports the Person class

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
            Question 132
          </h3>
          <p>
            Discuss the difference between default and named exports in
            JavaScript modules.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 132</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   The code demonstrates two types of module exports and imports in JavaScript/TypeScript:

Named exports: In utils.ts, utilOne and utilTwo are exported individually using the export keyword. These are imported in the first code block using the destructuring syntax { utilOne, utilTwo }, allowing selective import of specific functions or variables from a module.
Default export: In the second code block, a Calculator class is exported as the default using export default. There can be only one default export per module. It's imported in the first code block without curly braces, and the imported name (Calculator) can be different from the exported name if desired.

This distinction allows for flexibility in structuring and importing modules, with default exports typically used for a module's primary export and named exports for multiple, specific exports.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Importing named exports:
import { utilOne, utilTwo } from "./utils";

// Importing a default export:
import Calculator from "./Calculator";

// This code illustrates the syntax and usage differences 
// between default and named exports.
              `}
                          <br /> <br />
                          {`
export default class Calculator {
  // Class definition
}
`}
                          <br /> <br />
                          {`
// Named export example in file: utils.ts
export const utilOne = () => {
  /*...*/
};
export const utilTwo = () => {
  /*...*/
};
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

export default Day44;
