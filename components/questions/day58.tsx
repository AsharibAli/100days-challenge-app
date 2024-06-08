"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day58 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 58</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-58 Task
          </h3>
          <p>
            Read the following Articles and Code along with it: <br /> <br />
            <strong>
              <a
                href="https://javascript.info/logical-operators"
                target="_blank"
              >
                Logical Operators in JavaScript
              </a>
            </strong>
            <br />
            <br />
            <strong>
              <a
                href="https://javascript.info/nullish-coalescing-operator"
                target="_blank"
              >
                Nullish Coalescing Operator `??` in JavaScript
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day58;
