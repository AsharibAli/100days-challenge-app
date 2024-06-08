"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day56 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 56</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-56 Task
          </h3>
          <p>
            Read the following Articles and Code along with it: <br /> <br />
            <strong>
              <a
                href="https://javascript.info/type-conversions"
                target="_blank"
              >
                Type Conversions in JavaScript
              </a>
            </strong>
            <br />
            <br />
            <strong>
              <a href="https://javascript.info/operators" target="_blank">
                Operators in JavaScript
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day56;
