"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day91 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 91</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-91 Task
          </h3>
          <p>
            Read the following Article and Code along with it:
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering"
                target="_blank"
              >
                Static and Dynamic Rendering
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day91;
