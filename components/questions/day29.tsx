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

const Day29 = () => {
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
        <CardTitle>Day 29</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 85
          </h3>
          <p>
            Finding the Position of a Substring: Write a function that locates
            the first occurrence of the word `code` within any given string and
            returns its position.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 85 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The findCodePosition function searches for the first occurrence of the substring "code" within a given string using the indexOf method. For example, when applied to the sentence "Learn to code with JavaScript", it returns the starting position of "code", which is 9.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function finds where "code" first shows up in a text
function findCodePosition(str: string): number {
  return str.indexOf("code");
  // Looks for "code" and tells where it found it
}

// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript"));
// Outputs the start position of "code"
// It tells us the position number where "code" starts.
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
            Question 86
          </h3>
          <p>
            Checking for Text Presence: Create a function that checks if the
            word `JavaScript` is present in a given string. It should return
            `true` if found, otherwise `false`.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 86</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
The hasJavaScript function checks whether a given string contains the substring "JavaScript" using the includes method. For instance, when applied to the text "I love coding in JavaScript!", it returns true because the string includes "JavaScript".
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function checks if a sentence has "JavaScript" in it
function hasJavaScript(str: string): boolean {
  return str.includes("JavaScript"); 
  // Checks for "JavaScript" and returns true or false
}

// Example: Seeing if a text mentions JavaScript
console.log(hasJavaScript("I love coding in JavaScript!"));
// Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not.
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
            Question 87
          </h3>
          <p>
            Extracting a Substring: Demonstrate how to extract the first 10
            characters from a string.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 87</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   
The extractFirstTenChars function extracts the first 10 characters from a given string using the substring method. When applied to the sentence "Hello, JavaScript world!", it returns "Hello, Java", providing only the initial 10 characters of the input string.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function takes out the first 10 characters from any text
function extractFirstTenChars(str: string): string {
  return str.substring(0, 10); 
  // Gets characters from start to position 10
}

// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("Hello, JavaScript world!")); 

// Shows the first 10 characters
// It gives us a smaller piece of the original text,
// just the beginning part.
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

export default Day29;
