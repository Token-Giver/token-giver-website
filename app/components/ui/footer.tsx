import React from "react";

function Footer() {
  return (
    <div>
      <div className="lg:pb-[40px] lg:px-[100px] px-6 pb-8">
        <div className="pt-4 lg:pt-10 border-t-[.8px] border-t-[#D9D9D9] w-full flex lg:flex-row flex-col items-start lg:justify-between gap-y-3">
          <div className="lg:max-w-[448px]">
            <img src="/logo.svg" alt="" />
            <p className="font-medium leading-7 text-sm lg:text-base text-ash">
              Token Giver welcomes you to a platform built on trust,
              transparency, and impact. Let&apos;s give smarter, together.
            </p>
          </div>
          <div className="flex lg:gap-x-[109px] flex-wrap lg:flex-nowrap gap-y-10 gap-x-[70px]">
            <div>
              <h5 className="mb-3 lg:mb-[30px] font-semibold text-base text-[#121212]">
                Company
              </h5>
              <ul className="flex flex-col gap-y-[10px] text-sm text-[#808080]">
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 lg:mb-[30px] font-semibold text-base text-[#121212]">
                Resources
              </h5>
              <ul className="flex flex-col gap-y-[10px] text-sm text-[#808080]">
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 lg:mb-[30px] font-semibold text-base text-[#121212]">
                Donate
              </h5>
              <ul className="flex flex-col gap-y-[10px] text-sm text-[#808080]">
                <li>How to start TokenGiver</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-raisin-black py-5 lg:py-[30px] px-6 lg:px-[100px] flex lg:flex-row flex-col lg:justify-between text-white gap-y-6">
        <div className="flex lg:flex-row flex-col gap-y-3 lg:gap-x-5 text-xs lg:text-sm">
          <h3>Copyright © 2025 TokenGiver all rights reserved</h3>
          <h3>Terms & Condition</h3>
          <h3>Privacy Policy</h3>
        </div>
        <div className="flex lg:flex-row flex-col items-start lg:items-center lg:gap-x-[62px] gap-y-2">
          <div className="flex lg:gap-x-5 gap-x-2">
            <a
              href="https://x.com/TokenGiverr"
              className="lg:hover:-translate-y-1"
            >
              <img src="/socials/x.svg" className="w-5 h-5" alt="" />
            </a>
            <a
              href="https://github.com/Token-Giver"
              className="lg:hover:-translate-y-1"
            >
              <img src="/socials/github.svg" className="w-5 h-5" alt="" />
            </a>
            <a
              href="https://app.onlydust.com/projects/token-giver/overview"
              className="lg:hover:-translate-y-1"
            >
              <img src="/socials/onlydust.svg" className="w-5 h-5" alt="" />
            </a>
            <a
              href="https://t.me/+_qvEfyWxWP1mYzE0"
              className="lg:hover:-translate-y-1"
            >
              <img src="/socials/telegram.svg" className="w-5 h-5" alt="" />
            </a>
          </div>
          <h5 className="text-xs">tokengiiver@gmail.com</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
