"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day78 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 78</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-78 Task
          </h3>
          <p>
            Read and understand the following Visual Guide about the Web Vitals.
            <br /> <br />
            <strong>
              <a
                href="https://roadmap.sh/guides/what-are-web-vitals"
                target="_blank"
              >
                What are Web Vitals?
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day78;
