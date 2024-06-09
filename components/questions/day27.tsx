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

const Day27 = () => {
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
        <CardTitle>Day 27</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 79
          </h3>
          <p>
            Creating and Accessing Object Properties: Construct an object
            representing a car with properties for make, model, and year. Then,
            show how you can access the model property of the car.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 79 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The code initializes an object car with properties like make, model, and year. Using dot notation (car.model), it accesses and logs the value of the model property of the car object, which is "Corolla", to the console.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This sets up an object for a car with specific details
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Accessing and showing the car's model
console.log(car.model); // Outputs: Corolla
// We use dot notation (car.model) to get the model of the
// car from our object.

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
            Question 80
          </h3>
          <p>
            Updating Object Properties: Add a property named `color` to the
            existing car object, and then update the `year` property to `2021`.
            Show how to perform these operations.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 80</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    The code snippet begins with a car object representing a Toyota Corolla manufactured in 2020. It then adds a new property color with the value "blue" to the car object and updates the year property to 2021. Finally, it logs the updated car object to the console, reflecting the changes made.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Starting with our car object
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Adding a new property 'color' and updating 'year'
car.color = "blue"; // Adds a new property 'color'
car.year = 2021; // Updates the 'year' property

// Showing the updated car object
console.log(car); // Outputs the car object 
// Now our car is blue and its model year is updated to 2021.

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
            Question 81
          </h3>
          <p>
            Iterating Over Object Properties: Write a function that takes an
            object as an argument and logs all of its properties and values.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 81</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   
The logObjectProperties function iterates over each property in the provided object and logs its name and value to the console. When called with an object representing a car with properties like make, model, year, and color, it displays each piece of information stored about the car.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function shows every detail about an object
function logObjectProperties(obj: object) {
  for (let property in obj) {
    // Loops through each property in the object
    console.log(\`\${property}: \${obj[property]}\`);
    // Shows the property name and its value
  }
}

// Using the function with a car object
logObjectProperties({
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "blue",
});
// It tells us each piece of information stored about the car.
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

export default Day27;
