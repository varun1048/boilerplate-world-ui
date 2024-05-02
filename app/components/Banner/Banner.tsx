import Image from "next/image";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="pt-16 pb-20 mx-auto max-w-7xl sm:pt-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96">
              Start the business <br /> logic now 🔥
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              Ehya is the Instagram analytics platform teams use to stay focused
              on the goals, track <br /> engagement for report your business .
            </p>
          </div>

          <div className="mt-5 text-center">
            <button
              type="button"
              className="px-16 py-5 mt-2 ml-4 font-medium transition duration-150 ease-in-out border text-15px text-blue hover:text-white hover:bg-blue border-lightgrey leafbutton"
            >
              Create Now
            </button>
          </div>

          <Image
            src={"/assets/banner/dashboard.svg"}
            alt="banner-image"
            width={1200}
            height={598}
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
