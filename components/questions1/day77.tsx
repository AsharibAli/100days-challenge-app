"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileQuestionIcon } from "@/components/icons/icons";

const Day77 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 77</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Day-77 Task
          </h3>
          <p>
            Read and understand the following Visual Guide about SSL, TLS, and
            SSH protocols.
            <br /> <br />
            <strong>
              <a
                href="https://roadmap.sh/guides/ssl-tls-https-ssh"
                target="_blank"
              >
                SSL vs TLS vs SSH Protocols
              </a>
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day77;
