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

const Day25 = () => {
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
        <CardTitle>Day 25</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 73
          </h3>
          <p>
            Assigning and Updating Variables: Create a function where you
            declare a variable using let and assign an initial value. Then,
            update its value within the same function and log both the initial
            and updated values.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 73 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The updateVariable() function demonstrates variable assignment and updating. Initially, it assigns the value 10 to the variable number, then logs this initial value. Subsequently, it updates the value to 20 and logs the updated value. This illustrates the process of assigning and updating variable values.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function shows how to assign and update variable values
function updateVariable() {
  let number = 10; // Initially assigns the value 10
  console.log("Initial value:", number); // Logs the initial value
  number = 20; // Updates the value to 20
  console.log("Updated value:", number); // Logs the updated value
}

updateVariable();
// We assign a value to a variable and then update it,
// showing how values can change.

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
            Question 74
          </h3>
          <p>
            Swapping Variables: Demonstrate how to swap the values of two
            variables. Start with variables `a = 5` and `b = 10`, then swap
            their values so that `a` becomes `10` and `b` becomes `5`.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 74</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
The swapValues() function swaps the values of two variables a and b. Initially, a is 5 and b is 10. Using a temporary variable temp, it temporarily stores the value of a, then sets a to the value of b, and finally assigns b the original value of a stored in temp. This technique effectively exchanges the values of the variables.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function swaps the values of two variables
function swapValues() {
  let a = 5,
    b = 10; // Initially, a is 5 and b is 10
  console.log("Before swap: a =", a, "b =", b);

  let temp = a; // Temporarily stores the value of a
  a = b; // Sets a to b's value
  b = temp; // Sets b to a's original value stored in temp

  console.log("After swap: a =", a, "b =", b); // Logs the swapped values
}

swapValues();
// We use a temporary variable to hold one value while we swap them!
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
            Question 75
          </h3>
          <p>
            Compound Assignment Operators: Use compound assignment operators to
            simplify arithmetic operations. Start with `x = 4` and perform a
            series of operations (addition, subtraction, multiplication,
            division) on `x` using compound operators.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 75</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   
The function useCompoundOperators() demonstrates the application of compound assignment operators for various operations. Beginning with x equal to 4, it sequentially adds, subtracts, multiplies, and divides x by 2, displaying the result after each operation. This approach simplifies arithmetic operations on x by combining them with assignment in a concise manner.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function uses compound assignment operators for operations
function useCompoundOperators() {
  let x = 4; // Starts with x equal to 4
  console.log("Initial x:", x);

  x += 2; // Adds 2 to x
  console.log("After addition:", x); // Shows x after addition

  x -= 1; // Subtracts 1 from x
  console.log("After subtraction:", x); // Shows x after subtraction

  x *= 3; // Multiplies x by 3
  console.log("After multiplication:", x); // Shows x after multiplication

  x /= 2; // Divides x by 2
  console.log("After division:", x); // Shows x after division
}

useCompoundOperators();
// We simplify arithmetic operations on x using 
// compound assignment operators.
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

export default Day25;
