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

const Day18 = () => {
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
        <CardTitle>Day 18</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 52
          </h3>
          <p>
            Make a Smartphone Object: Create a simple way to keep track of a
            smartphones details. Include its brand, model, and other key
            features like how much storage it has, the size of its screen, and
            how long its battery lasts.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 52 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

This code sets up details about a smartphone, including its make, model, and specifications such as storage, screen size, and battery life, then logs the entire smartphone object to the console to display its setup.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Sets up details about a smartphone
let smartphone = {
  make: "Samsung",
  model: "Galaxy S21",
  specs: {
    storage: "128GB",
    screenSize: "6.2 inches",
    batteryLife: "18 hours",
  },
};

// Shows what we've set up about the smartphone
console.log(smartphone);

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
            Question 53
          </h3>
          <p>
            Pulling Apart a Nested Object: Imagine you have a list inside
            another list that shows what a computer programmer knows, like
            coding languages, tools, and software frameworks. Find a way to get
            three specific skills from this list and show them.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 53</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
This code defines an object developerSkills that lists a programmer's skills in languages, frameworks, and tools, extracts specific skills from each category using destructuring, and logs the first skill from each category to the console.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// A list showing a programmer's skills in detail
let developerSkills = {
  languages: ["JavaScript", "TypeScript", "Python"],
  frameworks: ["React", "Angular", "Vue"],
  tools: ["Git", "Webpack", "Docker"],
};

// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category
console.log(
  \`Language: \${languages[0]}, Framework: \${frameworks[0]}, Tool: 
  \${tools[0]}\`
);

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
            Question 54
          </h3>
          <p>
            Making Flexible Object Keys: Learn how to set up a list where you
            can change the name of each section based on what you need at that
            moment, like adjusting labels based on user choices.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 54</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

This code defines a function createObjectWithDynamicKey that creates an object with a key-value pair, where the key is dynamically set based on the provided argument, then demonstrates this by creating an object for a user's theme preference and logging it to the console.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value: string) {
  let dynamicObject = {};
  // Setting up a section in the list with a changeable name
  dynamicObject[key] = value;
  return dynamicObject;
}

// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");

// Showing the user's choice
console.log(userPreference);

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

export default Day18;
