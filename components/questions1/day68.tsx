"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day68 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 68</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-68 Task
          </h3>
          <p>
            Learn about TypeScript tuples by using the following guide and
            coding along with the examples provided in it:
            <br /> <br />
            <strong>
              <a
                href="https://github.com/AsharibAli/100-days-of-code/blob/main/day-68/TS-Tuple/README.md"
                target="_blank"
              >
                Tuple Data Type in TypeScript
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day68;
