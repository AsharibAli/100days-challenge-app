import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Day1 from "@/components/questions/day1";
import Day2 from "@/components/questions/day2";
import Day3 from "@/components/questions/day3";
import Day4 from "@/components/questions/day4";
import Day5 from "@/components/questions/day5";
import Day6 from "@/components/questions/day6";
import Day7 from "@/components/questions/day7";
import Day8 from "@/components/questions/day8";
import Day9 from "@/components/questions/day9";
import Day10 from "@/components/questions/day10";

export default function Challenges() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <div>
        <Header />
      </div>
      <main className="flex-1 container mx-auto py-8 px-6 ">
        <h2 className="text-3xl font-bold mb-6">Coding Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Day1 />
          <Day2 />
          <Day3 />
          <Day4 />
          <Day5 />
          <Day6 />
          <Day7 />
          <Day8 />
          <Day9 />
          <Day10 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
          <Day1 />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
