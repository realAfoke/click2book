import { useState } from "react";
import Menu from "./Menu";
import "../../public/style/app.css";

export default function BookingForm() {
  return (
    <div className="">
      <Menu />
      <main>
        <div className="hero bg-gradient-to-b from-[#f8fafc] to-[#eff6ff]  relative overflow-hidden top-22  py-23 px-5">
          <div className="flex flex-col space-y-10 items-center">
            <h5 className="text-[#3b82f6] text-[0.875rem] bg-white p-2 rounded-[50px] px-5 font-[500] shadow z-10">
              Premier Legal Consultations Platform
            </h5>
            <h2 className="text-[40px] text-[#0f1419] text-center font-[700] hero-title">
              Connect With Expert Legal Counsel in Minutes
            </h2>
            <p className="text-[18px] text-[#64748b] text-center leading-8">
              Schedule confidential consultations with top-tier attorney through
              our secure,streamlined booking platform.Get the legal expertise
              you need when you need it
            </p>
            <button className="text-[1.05rem]  bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] shadow py-4 px-8 outline-0 border-0 rounded-[15px] text-white font-[500]">
              Book Your Consultation
            </button>

            <span>Free 15-minute initial consultation Availaable 24/7</span>
          </div>
        </div>
      </main>
    </div>
  );
}
