import { useState, useRef, useEffect } from "react";
import { Form } from "react-router-dom";
import security from "../assets/security.svg";
import company from "../assets/company.svg";
import lighting from "../assets/lighting.svg";
import platform from "../assets/platform.svg";
import Menu from "./Menu";
import "../../public/style/app.css";

export default function BookingForm() {
  const [hideOptions, setHideOptions] = useState(true);
  useEffect(() => {
    window.addEventListener("click", () => {
      setHideOptions(true);
    });
  });

  return (
    <div className="">
      <Menu />
      <main>
        <div className="h-[85px]"></div>
        <div className="hero bg-gradient-to-b from-[#f8fafc] to-[#eff6ff]  relative overflow-hidden   py-23 px-5">
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

            <span className="mt-[-20px]">
              Free 15-minute initial consultation Availaable 24/7
            </span>
          </div>
        </div>
        <div className="bg-white flex flex-col space-y-5 py-25">
          <div className="flex flex-col space-y-5">
            <div className="font-[600] text-[1.875rem] leading-[1.2] text-center ">
              Why Legal Professionals Choose JusticeStand
            </div>
            <p className="text-[#64748b] leading-[1.7] text-[18px] text-center px-5">
              Streamlined scheduling meets enterprise-grade security for
              premiumn legal consultations.
            </p>
          </div>
          <div className="feature-card shadow">
            <div>
              <img src={security} alt="" />
              <h3>Banck-Grad Security</h3>
              <p>
                End-to-end encryption and HIPAA-compliant infrastructure ensure
                your sensitive lega matters remain completely confidential.
              </p>
            </div>
            <div>
              <img src={lighting} alt="" />
              <h3>Instant Scheduling</h3>
              <p>
                Book consultations in real-time with our AL-powered calendar
                optimization.No back-and-forth emails no delays.
              </p>
            </div>
            <div>
              <img src={company} alt="" />
              <h3>Expert Matching</h3>
              <p>
                Our propreitiay algorithm connects you with attorney who
                specialize in your specific legal need and jurisdiction
              </p>
            </div>
            <div>
              <img src={platform} alt="" />
              <h3>Multi-Platform Access</h3>
              <p>
                Seamlessly manage your consultations accrss desktop,mobile and
                tablet with our responsive platfrom design.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#0f1419] to-[#1e3a8a] py-[5rem] text-white">
          <div className="flex flex-wrap space-y-5">
            <h3 className="text-[1.875rem] font-[600] leading-[1.2] px-3">
              Schedule Your Consultation
            </h3>
            <div className="text-[1.125rem] leading-[1.7] px-5">
              Join thousands of client who trust JusticeStand for their legal
              consultation need.Our streamlined process gets you connected with
              expert conusel faster than ever.
            </div>
            <ul className="*:text-[1rem] *:p-2 *:before:content-['✓'] *:before:text-green-500 *:before:px-5 mx-[-10px]">
              <li>Availble 24/7 scheduling</li>
              <li>Instant confirmation</li>
              <li>Flexible rescheduling</li>
              <li>Secure document sharing</li>
              <li>Multi-language support</li>
            </ul>
          </div>
          <Form className="bg-white mx-5 p-[3rem] rounded-[10px] text-black flex flex-col space-y-6 shadow-lg">
            <div
              className="group transform focus:outline-none focus:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
              tabIndex={0}
            >
              <label htmlFor="practice-area" className="">
                Legal Practice Area
              </label>
              <div
                className="flex  flex-col justify-center p-3 border-1 border-[#e2e8f0] rounded-[10px] relative group-focus:ring-2 group-focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out"
                onClick={(e) => {
                  e.stopPropagation();
                  if (hideOptions) {
                    setHideOptions(false);
                  } else {
                    setHideOptions(true);
                  }
                }}
              >
                <option className="text-[14px]" value="legal-need">
                  Select your legal need
                </option>
                <div
                  className={`${
                    hideOptions ? "hidden" : "block"
                  } absolute w-full top-12 left-0 bg-white rounded-[10px] border-1 border-gray-600 *:p-3 *:hover:bg-[#05070c]`}
                  datatype="option"
                >
                  <option value="">Corporate Law</option>
                  <option value="">Employment Law</option>
                  <option value="">Intellectual Property</option>
                  <option value="">Real Estate</option>
                  <option value="">Family Law </option>
                  <option value="">Criminial Defense</option>
                  <option value="">Personal Injury</option>
                  <option value="">Tax Law</option>
                </div>
              </div>
            </div>
            <div
              className="group transform focus:outline-none focus:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
              tabIndex={0}
            >
              <label htmlFor="full-name" className="">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your full name"
                className="border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
              />
            </div>
            <div
              className="group transform focus:outline-none focus:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
              tabIndex={0}
            >
              <label htmlFor="email" className="">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your email@company.com"
                className="border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
              />
            </div>
            <div
              className="group transform focus:outline-none focus:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
              tabIndex={0}
            >
              <label htmlFor="phone-number" className="">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phoneNumber"
                placeholder="+234 (0000)-(0000)-(000)"
                className="border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
              />
            </div>
            <div
              className="group transform focus:outline-none focus:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
              tabIndex={0}
            >
              <label htmlFor="date" className="">
                Performed Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
              />
            </div>
            <div
              className="group transform focus:outline-none focus:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
              tabIndex={0}
            >
              <label htmlFor="description" className="">
                Brief Case Description
              </label>
              <textarea
                placeholder="Please provide us a brief view of your lega matter. . ."
                className="border-1 border-[#e2e8f0] w-full p-3 px-5 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none h-[100px]"
              ></textarea>
            </div>
            <button className="items-center bg-gradient-to-r from-[#1e3a8a] to-[#3667ee] p-3 rounded-[10px] text-white">
              Schedule Consultation
            </button>
          </Form>
        </div>
        <div className="bg-[#f8fafc] py-[6rem] flex flex-col space-y-[5rem] spac">
          <div className="flex flex-col space-y-4">
            <h3 className="text-[1.875rem] font-[600] leading-[1.2] tracking-[-0.025rem] text-center px-5">
              Trusted by Legal Professionals Worldwide
            </h3>
            <p className="text-[1.125rem] leading-[1.7] text-[#64748b] px-5 text-center">
              Join the premier platform that's revolutionizing legal
              consultation scheduling
            </p>
          </div>
          <div className="grid grid-cols-2  trust-stat  justify-center gap-[2.5rem] px-8">
            <div className="">
              <span className=" trust-fig">50,000+</span>
              <span className="desc">Consultations Scheduled</span>
            </div>
            <div className="">
              <span className="trust-fig">2,500+</span>
              <span className="desc">Legal Professionals</span>
            </div>
            <div className="">
              <span className="trust-fig">98.5%</span>
              <span className="desc">Client Satisfaction</span>
            </div>
            <div className="">
              <span className="trust-fig">24/7</span>
              <span className="desc">Platform Availability</span>
            </div>
          </div>
          <div className="testimonials">
            <div>
              <p>
                <i>
                  ConsultBooker transformed how we handle client intake. The
                  seamless scheduling and security features give our clients
                  confidence from the very first interaction."
                </i>
              </p>
              <div>
                <span>JM</span>
                <span>Partner, Morrison & Associates</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
