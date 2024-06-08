"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day74 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 74</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-74 Task
          </h3>
          <p>
            Learn about TypeScript Debugging by using the following guide and
            debug along with it:
            <br /> <br />
            <strong>
              <a
                href="https://github.com/AsharibAli/100-days-of-code/blob/main/day-74/TS-debugging/README.md"
                target="_blank"
              >
                Debugging in TypeScript
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day74;
