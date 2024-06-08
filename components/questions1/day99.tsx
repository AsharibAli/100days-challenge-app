"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day99 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 99</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-99 Task
          </h3>
          <p>
            Read the following Article and Code along with it:
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/dashboard-app/adding-metadata"
                target="_blank"
              >
                Adding Metadata
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day99;
