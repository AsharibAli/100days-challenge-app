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

const Day5 = () => {
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
        <CardTitle>Day 5</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 13
          </h3>
          <p>
            Your Own Array: Think of your favorite mode of transportation, such
            as a motorcycle or a car, and make a list that stores several
            examples. Use your list to print a series of statements about these
            items, such as “I would like to own a Honda motorcycle.”
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 13 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This code defines an array "transports" containing transportation options: "Honda motorcycle", "Tesla car", and "bicycle". It then utilizes the "forEach" method to iterate over each element in the array, printing a message for each transport: "I would like to own a [transport]." using template literals for string interpolation.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let transports: string[] = ["Honda motorcycle", "Tesla car", "bicycle"];

transports.forEach(transport => {
    console.log(\`I would like to own a \${transport}.\`\);
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
            Question 14
          </h3>
          <p>
            Guest List: If you could invite anyone, living or deceased, to
            dinner, who would you invite? Make a list that includes at least
            three people you’d like to invite to dinner. Then use your list to
            print a message to each person, inviting them to dinner.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 14</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`This code defines an array "guests" containing the names of guests: "Albert Einstein", "Marie Curie", and "Nikola Tesla". It then uses the "forEach" method to iterate over each element in the array, printing a personalized invitation message for each guest to the console: "Dear [guest], would you like to join me for dinner?" using template literals for string interpolation.`}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guests.forEach(guest => {
    console.log(\`Dear \${guest}, would you like to join me for dinner?\`\);
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
            Question 15
          </h3>
          <p>
            Changing Guest List: You just heard that one of your guests can’t
            make the dinner, so you need to send out a new set of invitations.
            You’ll have to think of someone else to invite,{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-05"
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
                    <strong> ➡️ Explanation of Question 15 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   In the first part, the code prints personalized dinner invitations to each guest stored in the "guests" array using a "forEach" loop. Each invitation includes the guest's name interpolated into the message.

In the second part, it logs a message stating that "Nikola Tesla" can't attend dinner. Then, it replaces "Nikola Tesla" with "Leonardo da Vinci" in the "guests" array using "indexOf" to find the index of "Nikola Tesla" and replacing it with "Leonardo da Vinci". Finally, it prints new dinner invitations to each guest, now including "Leonardo da Vinci" instead of "Nikola Tesla".
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Q14 Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guests.forEach(guest => {
    console.log(\`Dear \${guest}, would you like to join me for dinner?\`\);
});


// Q15 Answer:
let unableToAttend = "Nikola Tesla";
console.log(\`\${unableToAttend} can't make it to dinner.\`\);

// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
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
      </CardContent>
    </Card>
  );
};

export default Day5;
