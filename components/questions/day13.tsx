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

const Day13 = () => {
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
        <CardTitle>Day 13</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 37
          </h3>
          <p>
            Large Shirts: Modify the make_shirt() function so that shirts are
            large by default with a message that reads I love TypeScript. Make a
            large shirt and a medium shirt with the default message, and a shirt
            of any size with a different message.{" "}
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 37 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This function "make_shirt" defines default values for its parameters. If no arguments are provided, it defaults to a "large" size and the message "I love TypeScript". If only one argument is provided, it takes that as the size and defaults the message to "I love TypeScript". If both arguments are provided, it uses them as the size and message, respectively.

The function then logs messages using template literals to indicate the process of making a t-shirt with the provided size and message printed on it. 

- make_shirt(); will log "Making a large t-shirt with the message "I love TypeScript" printed on it."
- make_shirt("medium"); will log "Making a medium t-shirt with the message "I love TypeScript" printed on it."
- make_shirt("small", "Dive into Coding"); will log "Making a small t-shirt with the message "Dive into Coding" printed on it."
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
function make_shirt(size: string = "large", message: string = 
"I love TypeScript") {

console.log(\`Making a \${size} t-shirt with the message 
"\${message}" printed on it.\`);
}
    
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
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
            Question 38
          </h3>
          <p>
            Cities: Write a function called describe_city() that accepts the
            name of a city and its country. The function should print a simple
            sentence, such as Karachi is in Pakistan. Give the parameter for the
            country a default value. Call your function for three different
            cities, at least one of which is not in the default country.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 38</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`This function describe_city takes two parameters: city and country, with "Pakistan" set as the default for country. It logs a message indicating the city and its associated country.

For "Karachi", it logs "Karachi is in Pakistan."
For "Lahore", it logs "Lahore is in Pakistan."
For "Tokyo" and "Japan", it logs "Tokyo is in Japan."`}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
function describe_city(city: string, country: string = "Pakistan") {
    console.log(\`\${city} is in \${country}.\`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
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
            Question 39
          </h3>
          <p>
            City Names: Write a function called city_country() that takes in the
            name of a city and its country. The function should return a string
            formatted like this{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-13"
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
                    <strong> ➡️ Explanation of Question 39</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This function city_country takes two parameters: city and country, and returns a string combining both values with a comma in between.

- console.log(city_country("Lahore", "Pakistan")); prints "Lahore, Pakistan".
- console.log(city_country("Tokyo", "Japan")); prints "Tokyo, Japan".
- console.log(city_country("Paris", "France")); prints "Paris, France".
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
function city_country(city: string, country: string): string {
  return \`\${city}, \${country}\`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
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

export default Day13;
