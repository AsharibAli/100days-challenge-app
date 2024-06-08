"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day76 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 76</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-76 Task
          </h3>
          <p>
            Read and understand the following Visual Guide about DNS and DHCP.
            <br /> <br />
            <strong>
              <a
                href="https://roadmap.sh/guides/dns-in-one-picture"
                target="_blank"
              >
                What is DNS?
              </a>
            </strong>
            <br /> <br />
            <strong>
              <a
                href="https://roadmap.sh/guides/dhcp-in-one-picture"
                target="_blank"
              >
                What is DHCP?
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day76;
