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

const Day14 = () => {
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
        <CardTitle>Day 14</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 40
          </h3>
          <p>
            Album: Write a function called make_album() that builds a Object
            describing a music album. The function should take in an artist name
            and an album title, and it should return a Object containing these
            two pieces of information. Use the function to make three
            dictionaries representing different albums. Print each return value
            to show that Objects are storing the album information correctly.{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-14"
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
                    <strong> ➡️ Explanation of Question 40 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This function make_album creates an album object with properties artist and title. If a tracks parameter is provided, it adds the tracks property to the album object.

- console.log(make_album("Artist One", "The First Album")); prints { "artist": "Artist One", "title": "The First Album" }.
- console.log(make_album("Artist Two", "The Second Album")); prints { "artist": "Artist Two", "title": "The Second Album" }.
- console.log(make_album("Artist Three", "The Third Album", 12)); prints { "artist": "Artist Three", "title": "The Third Album", "tracks": 12 }.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
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
            Question 41
          </h3>
          <p>
            Magicians: Make a array of magician’s names. Pass the array to a
            function called show_magicians(), which prints the name of each
            magician in the array.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 41</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`This code defines an array magicians containing strings representing different magicians' names. It then defines a function show_magicians that takes an array of magicians as a parameter.

Within the show_magicians function, it iterates over each magician in the array using the forEach method and logs each magician's name to the console.

Finally, it calls the show_magicians function with the magicians array as an argument, resulting in the names of all magicians being printed to the console.`}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

show_magicians(magicians);
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
            Question 42
          </h3>
          <p>
            Great Magicians: Start with a copy of your program from Exercise 39.
            Write a function called make_great() that modifies the array of
            magicians by adding the phrase the Great to each magician’s name.
            Call show_magicians() to see that the list has actually been
            modified.{" "}
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 42</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   This script starts by defining an array magicians containing strings representing different magicians' names. It then defines two functions:

1. show_magicians: This function takes an array of magician names as a parameter and iterates through each name, logging it to the console.

2. make_great: This function also takes an array of magician names as a parameter. It iterates through each name, appending " the Great" to each magician's name.

After defining these functions, the script calls make_great with the magicians array as an argument. This function modifies the original array by adding " the Great" to each magician's name. Finally, it calls show_magicians with the modified magicians array as an argument, resulting in the updated names of all magicians being printed to the console.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
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

export default Day14;
