"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";

const words = `Join the challenge and level up your coding skills. Commit to
coding every day for 100 days and watch your progress soar, The Ultimate goal is to Become a Developer, Starting from Very Basics to Advance Level.
`;

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <div>
        <Header />
      </div>

      <section className="w-full h-screen flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              100 Days of Coding Challenge
            </h1>
            <div className="mx-auto max-w-[700px]  md:text-xl ">
              <TextGenerateEffect words={words} />
            </div>

            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="/challenges"
            >
              Join the Challenge
            </Link>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
