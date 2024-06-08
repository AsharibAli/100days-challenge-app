"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day83 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 83</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-83 Task
          </h3>
          <p>
            Read the following Articles and Code along with it:
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/react-foundations/building-ui-with-components"
                target="_blank"
              >
                Building UI with Components
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

export default Day83;
