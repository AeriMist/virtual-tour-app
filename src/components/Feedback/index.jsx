import React from "react";
import styles from "./index.module.scss";
import bg from "/bakhawan-bg.jpg";
import logo from "/logo.png";
import { Button } from "@mui/material";

export default function Feedback() {
  return (
    <div className="rounded-lg flex justify-center items-center w-full">
      <div className="bg-white p-4 rounded-lg">
        <p className="text-xl font-semibold mb-2 font-sour-gummy">Contact Us</p>
        <p className="text-sm text-gray-600 mb-4 font-sour-gummy">
          Send us a message, and we’ll get back to you soon!
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            id="full-name"
            placeholder="Full Name"
            className="w-[90%] p-2 border rounded text-sm font-sour-gummy"
          />
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-[90%] p-2 border rounded text-sm font-sour-gummy"
          />
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            className="w-[90%] p-2 border rounded text-sm font-sour-gummy"
          />
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Write a feedback"
            className="w-[90%] p-2 border rounded text-sm font-sour-gummy"
            rows="4"
          ></textarea>
          <div>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#f5d36c",
                border: "2px solid white",
                color: "#8a651b",
                fontFamily: "'Sour Gummy', sans-serif",
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div
        className="flex-1 h-full flex justify-center items-center relative rounded-lg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black/60 absolute inset-0 rounded-lg"></div>
        <img src={logo} alt="" className="w-32 z-10 rounded-lg" />
      </div>
    </div>
  );
}
