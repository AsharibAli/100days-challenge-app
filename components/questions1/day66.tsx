"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day66 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 66</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-66 Task
          </h3>
          <p>
            Learn about different TypeScript type system concepts by using the
            following guide and coding along with the examples provided in it:
            <br /> <br />
            <strong>
              <a
                href="https://github.com/AsharibAli/100-days-of-code/blob/main/day-66/TS-Type-System-Concepts/README.md"
                target="_blank"
              >
                TypeScript Type System Concepts
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day66;
