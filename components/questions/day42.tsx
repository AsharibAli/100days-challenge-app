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

const Day42 = () => {
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
        <CardTitle>Day 42</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 124
          </h3>
          <p>
            Create a function inside an object that returns the objects own name
            property using the this keyword.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 124 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
The code defines an object person with a name property set to "Alice" and a method getName. Inside getName, this refers to the person object, so this.name accesses the object's own name property. When getName is called via person.getName(), it returns the value of name, which is "Alice". This illustrates how this within a method allows it to directly access and return properties of its containing object.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Defines an object with a name property and a method
// to return its name
const person = {
  name: "Alice",
  getName: function () {
    return this.name;
  // Uses 'this' to refer to the object itself
  // and return its 'name' property
  },
};

console.log(person.getName()); // Outputs: Alice
// This method correctly identifies and returns
//  the object's 'name' property using 'this'.
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
            Question 125
          </h3>
          <p>
            Modify a method in an object to use the this keyword to access
            another property in the same object.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 125</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    The code defines an object rectangle with properties length and width, and a method calculateArea. Inside calculateArea, this refers to the rectangle object, allowing the method to access its own properties length and width. When calculateArea is called via rectangle.calculateArea(), it multiplies these properties to compute and return the area, which is 20 (4 * 5). This demonstrates how this in a method allows it to interact with and use the object's own properties.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// An object with multiple properties and a method that
// interacts with them using 'this'
const rectangle = {
  length: 4,
  width: 5,
  calculateArea: function () {
    return this.length * this.width; 
// 'this' accesses 'length' and 'width' properties of the object
  },
};

console.log(rectangle.calculateArea()); // Outputs: 20
// The 'calculateArea' method uses 'this' to compute
// the area based on the object's own dimensions.

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
            Question 126
          </h3>
          <p>
            Explain how the this keyword changes its value when used inside a
            nested function within a method.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 126</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   The code defines an object myObject with a property property and a method outerMethod. Inside outerMethod, this refers to myObject, so this.property logs "Value". outerMethod also defines an arrow function innerMethod. Unlike regular functions, arrow functions don't have their own this; instead, they capture this from the enclosing scope. So, when innerMethod is called, this still refers to myObject, and this.property again logs "Value". This demonstrates how arrow functions can be useful for preserving this context in nested functions.


                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Demonstrates 'this' behavior change in a nested function
const myObject = {
  property: "Value",
  outerMethod: function () {
    console.log(this.property); 
    // Works as expected, logs "Value"

    const innerMethod = () => {
      console.log(this.property); 
      // Still accesses myObject's 'property' due to 
      // arrow function capturing 'this' from outer scope
    };

    innerMethod();
  },
};

myObject.outerMethod();
// This example shows that using an arrow function for
// the inner method preserves the 'this' context from the
// outer method.

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

export default Day42;
