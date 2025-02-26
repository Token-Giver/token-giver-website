"use client";

function HowToStartHeroSection() {
  return (
    <div className="text-center pt-[140px] sm:pt-[180px] flex flex-col items-center px-[24px] sm:px-[40px]  lg:px-[100px] max-w-[1440px] mx-auto pb-5">
      <h4 className="font-AgrandirRegular text-ash text-sm sm:text-base mb-2">
        How to Start TokenGiver
      </h4>
      <h1 className="font-AgrandirBold text-3xl md:text-4xl lg:text-5xl lg:leading-[60px] mb-10 text-raisin-black">
        Start Fundraising with
        <br />
        <span className="text-primary">TokenGiver Today</span>
      </h1>

      <div className="w-full mt-[-12px] rounded-[10px] max-[690px]:bg-learnPageMobile bg-learnPageDesktop bg-cover bg-center max-[430px]:px-4 px-8 lg:px-14 max-[430px]:h-[530px] max-[690px]:h-[600px] h-[400px] md:h-[500px]">
        <div className="max-[690px]:max-w-full max-[900px]:max-w-[49%] lg:max-w-[45%] text-left max-[690px]:mt-12 mt-14 md:mt-24">
          <h3 className="font-AgrandirBold text-2xl sm:text-3xl text-raisin-black mb-4">
            Start Your
            <span className="font-AgrandirRegular">
              {" "}
              Fundraising
              <br />{" "}
            </span>
            Journey Today
          </h3>
          <p className="text-dark-grey text-sm sm:text-base leading-[30px] w-full max-w-[442px]">
            Join TokenGiver and turn your vision into reality. Together, we can
            make a difference one donation at a time.
          </p>
        </div>
      </div>

      <div className="sm:px-[57px] mt-8 md:mt-16">
        <p className="text-sm sm:text-base text-ash leading-7 md:leading-[35px] mb-6 md:mb-[30px]">
          At TokenGiver, our mission is to revolutionize the world of
          fundraising by merging the best of blockchain technology with the
          spirit of giving. We aim to create a world where every donation is not
          only impactful but also secure, transparent, and accountable.
        </p>
        <div className="flex justify-center items-center gap-x-3">
          <button className="py-3 px-10 rounded-full bg-primary font-semibold text-sm md:text-base text-white">
            Create a Fundraiser
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowToStartHeroSection;
