"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day62 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 62</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-62 Task
          </h3>
          <p>
            First understand what typescript is, and why we need it, then setup
            typescript using the following guides: <br /> <br />
            <strong>
              <a
                href="https://github.com/AsharibAli/100-days-of-code/blob/main/day-62/TS-Intro%20%26%20Setup/typescript-intro.md"
                target="_blank"
              >
                TypeScript Introduction in Simple Words
              </a>
            </strong>
            <br />
            <br />
            <strong>
              <a
                href="https://github.com/AsharibAli/100-days-of-code/blob/main/day-62/TS-Intro%20%26%20Setup/typescript-setup.md"
                target="_blank"
              >
                Setup TypeScript | Step-by-Step
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day62;
