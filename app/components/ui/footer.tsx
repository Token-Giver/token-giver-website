import React from "react";

function Footer() {
  return (
    <div>
      <div className="pb-[72px] px-[100px]">
        <div className="pt-[72px] border-t-[.8px] border-t-[#D9D9D9] w-full flex justify-between">
          <div className="max-w-[448px]">
            <img src="/logo.svg" alt="" />
            <p className="font-medium text-base leading-8 text-ash">
              Token Giver welcomes you to a platform built on trust,
              transparency, and impact. Let&apos;s give smarter, together.
            </p>
          </div>
          <div className="flex gap-x-[109px]">
            <div>
              <h5 className="mb-[30px] font-semibold text-lg text-[#121212]">
                Company
              </h5>
              <ul className="flex flex-col gap-y-[10px] text-base leading-[35px] text-[#808080]">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-[30px] font-semibold text-lg text-[#121212]">
                Resources
              </h5>
              <ul className="flex flex-col gap-y-[10px] text-base leading-[35px] text-[#808080]">
                <li>Blog</li>
                <li>Brand</li>
                <li>FAQs</li>
                <li>Help & Support</li>
                <li>Terms of Use</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-[30px] font-semibold text-lg text-[#121212]">
                Donate
              </h5>
              <ul className="flex flex-col gap-y-[10px] text-base leading-[35px] text-[#808080]">
                <li>Documentation</li>
                <li>How to start TokenGiver</li>
                <li>Categories</li>
                <li>Token Bounty</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282828] py-[60px] px-[100px] flex justify-between items-center text-white">
        <div className="flex gap-x-5 text-base leading-[32px]">
          <h3>Copyright © 2025 TokenGiver all rights reserved</h3>
          <h3>Terms & Condition</h3>
          <h3>Privacy Policy</h3>
        </div>
        <div className="flex items-center gap-x-[62px]">
          <div className="flex gap-x-5">
            <button>
              <img src="/socials/x.svg" className="w-[25px] h-[25px]" alt="" />
            </button>
            <button>
              <img
                src="/socials/discord.svg"
                className="w-[25px] h-[25px]"
                alt=""
              />
            </button>
            <button>
              <img
                src="/socials/github.svg"
                className="w-[25px] h-[25px]"
                alt=""
              />
            </button>
            <button>
              {" "}
              <img
                src="/socials/onlydust.svg"
                className="w-[25px] h-[25px]"
                alt=""
              />
            </button>
            <button>
              {" "}
              <img
                src="/socials/telegram.svg"
                className="w-[25px] h-[25px]"
                alt=""
              />
            </button>
            <button>
              <img
                src="/socials/youtube.svg"
                className="w-[25px] h-[25px]"
                alt=""
              />
            </button>
          </div>
          <h5>support@tokengiver.com</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
