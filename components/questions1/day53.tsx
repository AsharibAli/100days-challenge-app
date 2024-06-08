"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day53 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 53</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-53 Task
          </h3>
          <p>
            Watch the following video to learn about Chrome DevTools:{" "}
            <strong>
              <a
                href="https://www.youtube.com/watch?v=t1c5tNPpXjs&t=23s"
                target="_blank"
              >
                Fun & powerful: Intro to Chrome DevTools
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day53;
