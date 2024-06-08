"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day87 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 87</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-87 Task
          </h3>
          <p>
            Read the following Articles and Code along with it:
            <br /> <br />
            <strong>
              <a href="https://nextjs.org/learn/dashboard-app/css-styling" target="_blank">
                CSS Styling
              </a>
            </strong>
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/dashboard-app/optimizing-fonts-images"
                target="_blank"
              >
                Optimizing Fonts and Images
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day87;
