function HowToStartHeroSection() {
  return (
    <div className="text-center pt-[180px] flex flex-col items-center px-[100px]">
      <h4 className="font-AgrandirRegular text-ash text-base mb-[14px]">
        How to Start TokenGiver
      </h4>
      <h1 className="font-AgrandirBold text-5xl leading-[70px] mb-10 text-raisin-black">
        Start Fundraising with
        <br />
        <span className="text-primary">TokenGiver Today</span>
      </h1>
      <div className="w-full relative mt-[-12px]">
        <img
          src="/how-to-start-illus.jpg"
          className="w-full rounded-[10px]"
          alt=""
        />
        <div className="max-w-[515px] absolute top-[106px] left-[66px] text-left">
          <h3 className="font-AgrandirBold text-3xl text-raisin-black mb-4">
            Start Your
            <span className="font-AgrandirRegular">
              {" "}
              Fundraising
              <br />{" "}
            </span>
            Journey Today
          </h3>
          <p className="text-dark-grey text-base leading-[30px] max-w-[442px]">
            Join TokenGiver and turn your vision into reality. Together, we can
            make a difference one donation at a time.
          </p>
        </div>
      </div>
      <div className="px-[57px] pt-[42px]">
        <p className="text-base text-ash leading-[35px] mb-[30px]">
          At TokenGiver, our mission is to revolutionize the world of
          fundraising by merging the best of blockchain technology with the
          spirit of giving. We aim to create a world where every donation is not
          only impactful but also secure, transparent, and accountable.
        </p>
        <div className="flex justify-center items-center gap-x-3">
          <button className="py-3 px-10 rounded-full bg-primary font-semibold text-base text-white">
            Create a Fundraiser
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowToStartHeroSection;
