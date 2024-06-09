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

const Day11 = () => {
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
        <CardTitle>Day 11</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 31
          </h3>
          <p>
            No Users: Add an if test to Exercise 28 to make sure the list of
            users is not empty. - If the list is empty, print the message We
            need to find some users!{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-11"
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
                    <strong> ➡️ Explanation of Question 31 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code initializes an empty array "usernames" and checks if it's empty using the "length" property. Since the array is empty (length === 0), the code logs "We need to find some users!" to the console.

The code inside the "else" block is not executed because the array is empty, ensuring that only the message "We need to find some users!" is printed.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let usernames: string[] = [];

if(usernames.length === 0){
    console.log("We need to find some users!");
    
} else {
    // Greet Users 
}

// Removing all usernames ensures the message
// "We need to find some users!" is printed.
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
            Question 32
          </h3>
          <p>
            Checking Usernames: Do the following to create a program that
            simulates how websites ensure that everyone has a unique username. -
            Make a list of five or more usernames called current_users.{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-11"
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
                    <strong>➡️ Explanation of Question 32</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`This code initializes two arrays: "current_users" and "new_users", containing lists of current and new users, respectively. It then iterates over each element in the "new_users" array using the "forEach" method.

- For each new user, it checks if there's any existing user with a similar name, ignoring the case differences (by converting both to lowercase). If there's a match, it logs "[newUser] will need to enter a new username." indicating that the username is not available.
- If there's no match, it logs "[newUser] is available." indicating that the username is available for use.`}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];

let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(\`\${newUser} will need to enter a new username.\`);
  } else {
    console.log(\`\${newUser} is available.\`);
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
      <CardContent>
        <div className="p-3">
          <hr />
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 33
          </h3>
          <p>
            Ordinal Numbers: Ordinal numbers indicate their position in a array,
            such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and
            3.{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-11"
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
                    <strong> ➡️ Explanation of Question 33</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code initializes an array "numbers" containing sequential numbers from 1 to 9. It then iterates over each element in the array using the "forEach" method.

- For each number, it determines the appropriate suffix ("st", "nd", "rd", or "th") based on the number's value.
- If the number is 1, it sets the suffix to "st".
- If the number is 2, it sets the suffix to "nd".
- If the number is 3, it sets the suffix to "rd".
- For all other numbers, it defaults to "th".
- It then logs each number along with its respective suffix to the console.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let suffix = "th";
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  }
  console.log(\`\${number}\${suffix}\`);
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

export default Day11;
