"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day65 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 65</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-65 Task
          </h3>
          <p>
            Learn about TypeScript functions by using the following guide and
            coding along with the examples provided in it:
            <br /> <br />
            <strong>
              <a
                href="https://github.com/AsharibAli/100-days-of-code/blob/main/day-65/TS-Function/README.md"
                target="_blank"
              >
                Type Annotations With Function
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day65;
