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

const Day10 = () => {
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
        <CardTitle>Day 10</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 28
          </h3>
          <p>
            Stages of Life: Write an if-else chain that determines a person’s
            stage of life. Set a value for the variable age, and then,{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-10"
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
                    <strong> ➡️ Explanation of Question 28 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code sets the variable "age" to 25 and then checks the value of "age" against different age ranges using conditional statements.

- Since 25 falls between 20 and 65, the condition "age < 65" evaluates to true, so it logs "The person is an adult." to the console.

This code effectively categorizes a person based on their age into one of the following groups: baby, toddler, kid, teenager, adult, or elder. In this case, the person is categorized as an adult.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
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
            Question 29
          </h3>
          <p>
            Favorite Fruit: Make a array of your favorite fruits, and then write
            a series of independent if statements that check for certain fruits
            in your array.{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-10"
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
                    <strong>➡️ Explanation of Question 29</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    This code initializes an array "favorite_fruits" containing strings like "apples", "bananas", and "cherries". It then checks if "bananas" are included in the array using the "includes" method. If so, it logs "You really like bananas!" to the console. Similarly, it checks if "apples" are included in the array and logs "You really like apples!" if true.

This demonstrates how to check for specific values within an array and execute corresponding actions based on their presence.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
  console.log("You really like apples!");
}

// Continue with more fruits

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
            Question 30
          </h3>
          <p>
            Hello Admin: Make a array of five or more usernames, including the
            name admin. Imagine you are writing code that will print a greeting
            to each user after they log in to a website. Loop through the array,
            and print a greeting to each user,{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-10"
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
                    <strong> ➡️ Explanation of Question 30</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                  This code initializes an array "usernames" containing strings like "admin", "user1", "user2", "user3", and "user4". It then iterates over each element in the array using the "forEach" method.

- If the current username is "admin", it logs "Hello admin, would you like to see a status report?" to the console.
- For all other usernames, it logs a message using template literals, greeting the user by their username: "Hello [username], thank you for logging in again."
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach((username) => {
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(\`Hello \${username}, thank you for loggin in again.\`);
  }
});
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

export default Day10;
