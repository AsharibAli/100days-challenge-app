"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day52 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 52</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-52 Task
          </h3>
          <p>
            Read the following article:{" "}
            <strong>
              <a href="https://javascript.info/intro" target="_blank">
                An Introduction to JavaScript
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day52;
