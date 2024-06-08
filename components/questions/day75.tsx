"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day75 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 75</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-75 Task
          </h3>
          <p>
            Read the following Article with interactive videos about How does
            the internet work? behind the scenes what happens, etc.
            <br /> <br />
            <strong>
              <a
                href="https://roadmap.sh/guides/what-is-internet"
                target="_blank"
              >
                How does the internet work?
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day75;
