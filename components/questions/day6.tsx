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

const Day6 = () => {
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
        <CardTitle>Day 6</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 16
          </h3>
          <p>
            More Guests: You just found a bigger dinner table, so now more space
            is available. Think of three more guests to invite to dinner,{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-06"
              target="_blank"
            >
              full-question
            </a>{" "}
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 16 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
The code initially defines an array "guests" containing the names of guests: "Albert Einstein", "Marie Curie", and "Leonardo Vinci". It then logs the message "Great news! I found a bigger dinner table!" to indicate more guests can be accommodated.

Next, it adds additional guests to the "guests" array using various array methods:
- "unshift" adds "Isaac Newton" to the beginning of the array.
- "splice" inserts "Charles Darwin" into the middle of the array (at an index equal to half of its length).
- "push" adds "Ada Lovelace" to the end of the array.

Finally, it prints personalized dinner invitations to each guest, including the newly added guests, using a "forEach" loop with template literals for string interpolation.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach(guest => {
    console.log(\`Dear \${guest}, would you like to join me for dinner?\`);
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
        <div className="p-3">
          <hr />
        </div>
      </CardContent>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 17
          </h3>
          <p>
            Shrinking Guest List: You just found out that your new dinner table
            won’t arrive in time for the dinner, and you have space for only two
            guests,{" "}
            <a href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-06">
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
                    <strong>➡️ Explanation of Question 17</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    In the first part, the code initializes an array "guests" with names such as "Albert Einstein", "Marie Curie", and "Leonardo Vinci". Then, it logs "Great news! I found a bigger dinner table!" indicating more guests can be accommodated. Additional guests are added to the array using "unshift" to add "Isaac Newton" at the beginning, "splice" to insert "Charles Darwin" in the middle, and "push" to append "Ada Lovelace" to the end. Each guest is then invited to dinner with a personalized message using "forEach" loop and string interpolation.

In the second part, the code logs "Unfortunately, I can only invite two people for dinner." It iterates through the "guests" array using a "while" loop, removing guests until only two remain, logging a message for each removed guest. Afterward, each remaining guest is informed that they are still invited. Finally, the "guests" array is emptied using "splice" and logged to show an empty list.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Q16 Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach(guest => {
    console.log(\`Dear \${guest}, would you like to join me for dinner?\`);
});

// Q17 Answer:
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(\`Sorry, \${removedGuest}, I can't invite you to dinner.\`);
}

guests.forEach(guest => {
    console.log(\`Dear \${guest}, you're still invited to dinner.\`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
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
            Question 18
          </h3>
          <p>
            Seeing the World: Think of at least five places in the world you’d
            like to visit. - Store the locations in a array. Make sure the array
            is not in alphabetical order,{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-06"
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
                    <strong> ➡️ Explanation of Question 18 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   The code initializes an array "places" with countries like "NZ", "Iceland", "Japan", "Switzerland", and "Norway". It then demonstrates various methods to manipulate the order of elements in the array.

It first logs the "Original order" of the places array. Then, it logs the "Alphabetical order" by creating a copy of the array, sorting it alphabetically, and displaying it. Afterward, it logs the "Original order" again to show that the original array remains unchanged.

Similarly, it logs the "Reverse alphabetical order" by creating a copy of the array, sorting it alphabetically, and then reversing it. The "Original order" is logged again to demonstrate that the original array remains unchanged.

Next, it reverses the order of elements in the "places" array and logs it as "Reversed order". Then, it reverts the order back to the original and logs it again.

Finally, it sorts the "places" array alphabetically and logs it as "Alphabetical order". Then, it reverses the order to show "Reverse alphabetical order".
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let places: string[] = ["NZ", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);
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

export default Day6;
