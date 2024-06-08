"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day92 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 92</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-92 Task
          </h3>
          <p>
            Read the following Article and Code along with it:
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/dashboard-app/streaming"
                target="_blank"
              >
                Streaming
              </a>
            </strong>
            <br /> <br />
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day92;
