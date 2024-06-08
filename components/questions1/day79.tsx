"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day79 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 79</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-79 Task
          </h3>
          <p>
            Read the following Articles with interactive video about Basics of
            Authentication and HTTP Basic Authentication.
            <br /> <br />
            <strong>
              <a
                href="https://roadmap.sh/guides/basics-of-authentication"
                target="_blank"
              >
                Basics of Authentication
              </a>
            </strong>
            <br /> <br />
            <strong>
              <a
                href="https://roadmap.sh/guides/http-basic-authentication"
                target="_blank"
              >
                HTTP Basic Authentication
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day79;
