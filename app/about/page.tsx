import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Component() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="w-full min-h-screen bg-gray-800 text-white">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              About the Challenge
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              The 100-days-of-coding challenge is like a coding bootcamp you do
              yourself! Its where you commit to spending at least an hour every
              day for 100 days learning or practicing how to code. This is a
              great way to improve your coding skills, no matter if you are a
              beginner or already know some coding.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              One of the hardest parts of learning to code is sticking with it.
              The 100-day challenge helps you with this by making you commit
              publicly. You can tweet or share a LinkedIn post about your
              progress every day using the hashtag #100DaysOfCode. This way,
              other people who are doing the challenge can cheer you on and you
              can cheer them on too!
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              The most important thing about the 100-day challenge is to be
              consistent. Even if you can only code for a short amount of time
              each day or learn something new about Computer Science, thats
              still better than not coding at all. By spending a little bit of
              time every day, you will be surprised at how much you can learn
              and how much your coding skills can improve.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              This challenge is led by{" "}
              <strong>
                <a href="https://github.com/AsharibAli" target="_blank">
                  Asharib Ali (Student Ambassador & Teaching Faculty Memeber){" "}
                </a>
              </strong>
              for Thousands of Students at{" "}
              <strong>
                {" "}
                <a href="https://governorsindh.com/" target="_blank">
                  GIAIC{" "}
                </a>
              </strong>
              who are learning about cutting-edge technologies like AI with the
              latest tech-stack. The challenge is primarly organized for our
              official community on Discord, where we have a specific channel of
              100-days-of-code.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Special thanks to Sir. Daniyal Nagori (CEO), Sir. Ameen Alam (Dean
              of Faculty), and the whole teaching faculty (100+ members) for
              suporting, and 50k+ tech students who are Currently learning from
              GIAIC (on-site at Governer House Sindh).
            </p>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
