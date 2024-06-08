"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day57 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 57</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-57 Task
          </h3>
          <p>
            Read the following Articles and Code along with it: <br /> <br />
            <strong>
              <a href="https://javascript.info/comparison" target="_blank">
                Comparisons in JavaScript
              </a>
            </strong>
            <br />
            <br />
            <strong>
              <a href="https://javascript.info/ifelse" target="_blank">
                Conditional Operators: if, (? Ternary Operator) in JavaScript
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day57;
