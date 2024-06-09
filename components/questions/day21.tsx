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

const Day21 = () => {
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
        <CardTitle>Day 21</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 61
          </h3>
          <p>
            Making Enums for Vehicles: Lets create categories for vehicles like
            cars, trucks, and motorcycles using enums, and show one example.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 61 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

This program defines an enum VehicleType representing different types of vehicles such as Car, Truck, and Motorcycle. When logged to the console, VehicleType.Car displays 0 because enums start counting from 0 by default. This line simply checks the assigned number for the Car category in our enum list.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Making a list (enum) for different types of vehicles
enum VehicleType {
  Car,
  Truck,
  Motorcycle,
}

// Showing one type of vehicle from the list
console.log(VehicleType.Car); 
// It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.

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
            Question 62
          </h3>
          <p>
            Making a Student Template: Create a blueprint for student
            information, including their name, age, and the classes they are
            taking, and then fill in this blueprint with an example student.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 62</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
This program defines an interface Student as a blueprint for student information, ensuring each student object includes properties for name, age, and an array of courses. It then fills in this blueprint with an example student Alice, specifying her name, age, and list of courses. Finally, it logs the student's information to the console, demonstrating the use of the blueprint to ensure the required properties are present for each student.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Creating a blueprint (interface) for student information
interface Student {
  name: string;
  age: number;
  courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
  name: "Alice",
  age: 22,
  courses: ["Math", "Science", "History"],
};

// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name,
// age, and list of courses.

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
            Question 63
          </h3>
          <p>
            Shape Shifter: Write a program that can describe either a circle or
            a rectangle using a special type alias, including properties unique
            to each shape.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 63</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
This program creates a custom type Shape that can describe shapes as either circles or rectangles, with specific properties for each shape. It then defines instances of circle and rectangle using this type, showcasing their respective details such as radius or width and height. Finally, it logs these shape descriptions to the console, demonstrating the flexibility of the program in describing different shapes in detail.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Creating a custom type for shapes that could be circles or rectangles
type Shape = {
  kind: "circle" | "rectangle";
  radius?: number; // Only for circles
  width?: number; // Only for rectangles
  height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
  kind: "circle",
  radius: 5,
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
  kind: "rectangle",
  width: 10,
  height: 20,
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.

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

export default Day21;
