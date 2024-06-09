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

const Day12 = () => {
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
        <CardTitle>Day 12</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 34
          </h3>
          <p>
            Pizzas: Think of at least three kinds of your favorite pizza. Store
            these pizza names in a array, and then use a for loop to print the
            name of each pizza.{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-12"
              target="_blank"
            >
              full-question
            </a>
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 34 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code initializes an array "pizzas" containing strings representing different types of pizzas such as "pepperoni", "margherita", and "hawaiian". It then iterates over each element in the array using the "forEach" method.

For each pizza type, it logs a message using template literals to indicate that it likes the particular pizza type: "I like [pizza] pizza.".

After iterating through all pizzas, it logs "I really love pizza!" to emphasize its love for pizza in general.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
console.log(\`I like \${pizza} pizza.\`);
});

console.log("I really love pizza!");
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
            Question 35
          </h3>
          <p>
            Animals: Think of at least three different animals that have a
            common characteristic. Store the names of these animals in a list,
            and then use a for loop to print out the name of each animal.{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-12"
              target="_blank"
            >
              full-question
            </a>
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 35</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`This code initializes an array "animals" containing strings representing different types of animals such as "dog", "cat", and "rabbit". It then iterates over each element in the array using the "forEach" method.

For each animal type, it logs a message using template literals to indicate that the particular animal would make a great pet: "A [animal] would make a great pet.".

After iterating through all animals, it logs "Any of these animals would make a great pet!" to express the general idea that all animals in the list would be suitable as pets.`}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach((animal) => {
  console.log(\`A \${animal} would make a great pet.\`);
});

console.log("Any of these animals would make a great pet!");

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
            Question 36
          </h3>
          <p>
            T-Shirt: Write a function called make_shirt() that accepts a size
            and the text of a message that should be printed on the shirt. The
            function should print a sentence summarizing the size of the shirt
            and the message printed on it. Call the function.{" "}
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 36</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code defines a function "make_shirt" that takes two parameters: "size", indicating the size of the shirt (as a string), and "message", indicating the message to be printed on the shirt (as a string). 

Within the function, it logs a message using template literals to indicate the process of making a t-shirt with the provided size and message printed on it: "Making a [size] t-shirt with the message "[message]" printed on it".

Finally, it calls the "make_shirt" function with arguments "medium" for the size and "Code is Life" for the message.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
function make_shirt(size: string, message: string) {

  console.log(
    \`Making a \${size} t-shirt with the message "\${message}" printed on it\`
  );
}

make_shirt("medium", "Code is Life");

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

export default Day12;
