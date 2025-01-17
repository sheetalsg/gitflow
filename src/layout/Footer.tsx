import { baseImagePath } from "@/utils/Constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="p-4 py-10 md:py-12 bg-gray-200 mx-auto">
      <div id="footer-content" className="mx-auto max-w-screen-xl text-center">
        <a
          id="footer-title"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900"
        >
          Sovio
        </a>
        <p id="footer-description" className="my-6 mb-4 text-gray-700">
          Open-source self-soveriegn identity (SSI) platform to build robust,
          privacy-enhancing identity & digital credential solutions.
        </p>
        <span
          id="footer-rights"
          className="mt-8 text-sm text-gray-700 sm:text-center"
        >
          &copy; 2019-{new Date().getFullYear()}{" "}
          <a
            id="footer-company-link"
            href="https://ayanworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-2"
          >
            AYANWORKS TECHNOLOGY SOLUTIONS PRIVATE LIMITED
          </a>
          All Rights Reserved. &nbsp; &nbsp; | &nbsp; &nbsp;
          <Link
            id="footer-terms-link"
            href="/"
            className="hover:underline hover:underline-offset-2"
          >
            Terms of Use
          </Link>
          &nbsp; &nbsp;
          <Link
            id="footer-privacy-link"
            href="/"
            className="hover:underline hover:underline-offset-2"
          >
            Privacy Policy
          </Link>
        </span>

        <div
          id="footer-social-icons"
          className="flex mt-4 space-x-6 justify-center items-center"
        >
          <Link href="/" id="github-link" className="hover:opacity-50">
            <Image
              src={`${baseImagePath}/github_logo.svg`}
              width={52}
              height={52}
              alt={"github-logo"}
              id="github-logo"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <Link href="/" id="twitter-link" className="hover:opacity-50">
            <Image
              src={`${baseImagePath}/twitter_logo.svg`}
              width={52}
              height={52}
              alt={"twitter-logo"}
              id="twitter-logo"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
