"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day82 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 82</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-82 Task
          </h3>
          <p>
            Read the following Articles and Code along with it:
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/react-foundations/updating-ui-with-javascript"
                target="_blank"
              >
                Updating UI with Javascript
              </a>
            </strong>
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/react-foundations/getting-started-with-react"
                target="_blank"
              >
                Getting Started with React
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day82;
