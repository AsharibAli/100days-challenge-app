"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day94 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 94</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-94 Task
          </h3>
          <p>
            Read the following Article and Code along with it:
            <br /> <br />
            <strong>
              <a
                href="https://nextjs.org/learn/dashboard-app/adding-search-and-pagination"
                target="_blank"
              >
                Adding Search and Pagination
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day94;
