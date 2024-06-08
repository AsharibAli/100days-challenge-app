"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day55 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 55</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-55 Task
          </h3>
          <p>
            Read the following Articles and Code along with it: <br /> <br />
            <strong>
              <a href="https://javascript.info/types" target="_blank">
                Data Types in JavaScript
              </a>
            </strong>
            <br />
            <br />
            <strong>
              <a
                href="https://javascript.info/alert-prompt-confirm"
                target="_blank"
              >
                Interaction: alert, prompt, confirm in JavaScript
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day55;
