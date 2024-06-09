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

const Day15 = () => {
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
        <CardTitle>Day 15</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 43
          </h3>
          <p>
            Unchanged Magicians: Start with your work from Exercise 40. Call the
            function make_great() with a copy of the array of magicians’ names.
            Because the original array will be unchanged, return the new array
            and store it in a separate array. Call show_magicians() with each
            array to show that you have one array of the original names and one
            array with the Great added to each magician’s name.{" "}
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 43 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
In this script, there are two functions:

1. make_great: This function takes an array of magician names as a parameter. It creates a new array greatMagicians and iterates through each name in the input array, appending " the Great" to each magician's name and pushing it to the greatMagicians array. Finally, it returns the modified array.

2. show_magicians: This function takes an array of magician names as a parameter and logs each magician's name to the console.

The script then creates a new array greatMagicians by calling the make_great function with a copy of the original magicians array using the slice method. It then logs the original and modified magician names to the console using the show_magicians function, showing both the original names and the modified names separately.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
  let greatMagicians = [];
  magicians.forEach((magician) => {
    greatMagicians.push(\`\${magician} the Great\`);
});
return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Creates a new modified array
let greatMagicians = make_great(magicians.slice()); 

console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names

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
            Question 44
          </h3>
          <p>
            Sandwiches: Write a function that accepts a array of items a person
            wants on a sandwich. The function should have one parameter that
            collects as many items as the function call provides, and it should
            print a summary of the sandwich that is being ordered. Call the
            function three times, using a different number of arguments each
            time.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 44</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    The function make_sandwich takes a variable number of string arguments and logs a message indicating the ingredients of the sandwich being made.

- make_sandwich("ham", "cheese"); logs "Making a sandwich with: ham, cheese."
- make_sandwich("turkey", "lettuce", "tomato"); logs "Making a sandwich with: turkey, lettuce, tomato."
- make_sandwich("avocado", "sprouts", "mustard", "mayo"); logs "Making a sandwich with: avocado, sprouts, mustard, mayo."
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
function make_sandwich(...items: string[]) {
  console.log(\`Making a sandwich with: \${items.join(", ")}.\`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

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
            Question 45
          </h3>
          <p>
            Cars: Write a function that stores information about a car in a
            Object. The function should always receive a manufacturer and a
            model name. It should then accept an arbitrary number of keyword
            arguments. Call the function with the required information and two
            other name-value pairs, such as a color or an optional feature.
            Print the Object that’s returned to make sure all the information
            was stored correctly.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 45</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                  The make_car function creates a car object with specified properties such as manufacturer and model. It also allows for additional options to be provided as key-value pairs using an array of tuples.

- console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020])); creates a car object for Toyota Carolla with color "red" and year "2020".
- console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true])); creates a car object for Ford Fiesta with color "blue" and a sunroof option set to true.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  let car = { manufacturer, model };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

console.log(make_car("Toyota", "Carolla", ["color", "red"],
["year", 2020]));

console.log(make_car("Ford", "Fiesta", ["color", "blue"],
["sunroof", true]));

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

export default Day15;
