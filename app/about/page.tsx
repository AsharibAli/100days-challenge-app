import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Component() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="w-full min-h-screen bg-gray-900 text-white">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              About the Challenge
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              At our company, we are dedicated to providing the best products
              and services to our customers. Our team of experts works
              tirelessly to ensure that every aspect of our business is tailored
              to meet the needs of our clients. From our cutting-edge technology
              to our unparalleled customer support, we are committed to
              excellence in everything we do.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              At our company, we are dedicated to providing the best products
              and services to our customers. Our team of experts works
              tirelessly to ensure that every aspect of our business is tailored
              to meet the needs of our clients. From our cutting-edge technology
              to our unparalleled customer support, we are committed to
              excellence in everything we do.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              At our company, we are dedicated to providing the best products
              and services to our customers. Our team of experts works
              tirelessly to ensure that every aspect of our business is tailored
              to meet the needs of our clients. From our cutting-edge technology
              to our unparalleled customer support, we are committed to
              excellence in everything we do.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              At our company, we are dedicated to providing the best products
              and services to our customers. Our team of experts works
              tirelessly to ensure that every aspect of our business is tailored
              to meet the needs of our clients. From our cutting-edge technology
              to our unparalleled customer support, we are committed to
              excellence in everything we do.
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
