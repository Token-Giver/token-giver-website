import React from "react";

function Footer() {
  return (
    <div>
      <div className="pb-[20px] md:pb-[40px] px-8 md:px-[100px]">
        <div className="pt-10 border-t-[.8px] border-t-[#D9D9D9] w-full flex md:flex-row flex-col space-y-8 justify-between">
          <div className="max-w-[448px]">
            <img src="/logo.svg" alt="" />
            <p className="font-medium text-base text-ash">
              Token Giver welcomes you to a platform built on trust,
              transparency, and impact. Let&apos;s give smarter, together.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-[40px] gap-y-6 md:grid md:grid-cols-2">
  <div>
    <h5 className="mb-[20px] font-semibold text-base text-[#121212]">
      Company
    </h5>
    <ul className="flex flex-col gap-y-[10px] text-sm text-[#808080]">
      <li>About Us</li>
      <li>Careers</li>
      <li>Contact Us</li>
      <li>Privacy Policy</li>
      <li>Terms of Use</li>
    </ul>
  </div>
  <div>
    <h5 className="mb-[20px] font-semibold text-base text-[#121212]">
      Resources
    </h5>
    <ul className="flex flex-col gap-y-[10px] text-sm text-[#808080]">
      <li>Blog</li>
      <li>Brand</li>
      <li>FAQs</li>
      <li>Help & Support</li>
      <li>Terms of Use</li>
    </ul>
  </div>
  <div className="md:col-span-2 mt-6">
    <h5 className="mb-[20px] font-semibold text-base text-[#121212]">
      Donate
    </h5>
    <ul className="flex flex-col gap-y-[10px] text-sm text-[#808080]">
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
      <div className="bg-raisin-black py-[30px] px-8 md:px-[100px] md:flex justify-between items-center text-white">
        <div className="flex md:flex-row flex-col md:gap-x-5 gap-y-3 text-sm">
          <h3>Copyright © 2025 TokenGiver all rights reserved</h3>
          <h3>Terms & Condition</h3>
          <h3>Privacy Policy</h3>
        </div>
        <div className="flex md:flex-row flex-col space-y-4 items-center gap-x-[62px]">
          <div className="flex md:gap-x-5 gap-x-2">
            <a
              href="https://x.com/TokenGiverr"
              className="hover:-translate-y-1"
            >
              <img src="/socials/x.svg" className="w-5 h-5" alt="" />
            </a>
            <a
              href="https://github.com/Token-Giver"
              className="hover:-translate-y-1"
            >
              <img src="/socials/github.svg" className="w-5 h-5" alt="" />
            </a>
            <a
              href="https://app.onlydust.com/projects/token-giver/overview"
              className="hover:-translate-y-1"
            >
              <img src="/socials/onlydust.svg" className="w-5 h-5" alt="" />
            </a>
            <a
              href="https://t.me/+_qvEfyWxWP1mYzE0"
              className="hover:-translate-y-1"
            >
              <img src="/socials/telegram.svg" className="w-5 h-5" alt="" />
            </a>
          </div>
          <h5>tokengiiver@gmail.com</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
