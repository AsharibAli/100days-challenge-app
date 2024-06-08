"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day80 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 80</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-80 Task
          </h3>
          <p>
            Read the following Article about the difference between Full Stack
            Developer or Software Engineer.
            <br /> <br />
            <strong>
              <a
                href="https://roadmap.sh/full-stack/vs-software-engineer"
                target="_blank"
              >
                Full Stack Developer or Software Engineer – Which Way to Go?
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day80;
