"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day84 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 84</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-84 Task
          </h3>
          <p>
            Read the following Articles and Code along with it:
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/react-foundations/updating-state"
                target="_blank"
              >
                Adding Interactivity with State
              </a>
            </strong>
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/react-foundations/displaying-data-with-props"
                target="_blank"
              >
                Displaying Data with Props
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day84;
