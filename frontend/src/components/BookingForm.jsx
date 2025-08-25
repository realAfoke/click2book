import { useState, useRef, useEffect } from "react";
import security from "../assets/security.svg";
import company from "../assets/company.svg";
import lighting from "../assets/lighting.svg";
import platform from "../assets/platform.svg";
import Menu from "./Menu";
import { easeIn, motion } from "framer-motion";
import "../../public/style/app.css";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [hideOptions, setHideOptions] = useState(true);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [duration, setDuration] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isSent, setIsSent] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      setHideOptions(true);
    });
  });
  const chooseJusticeStandVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: easeIn },
    },
  };

  async function submit() {
    let appointment = {
      name: fullName,
      email: email,
      service: service,
      phone_number: phone,
      duration: duration,
      consult_time: date,
      purpose: summary,
    };

    try {
      const request = await fetch(
        `${import.meta.env.VITE_API_URL}/book-appointment/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointment),
        }
      );
      if (!request.ok) {
        const err = await request.json();
        console.log(err);
        throw "something went wrong";
      }
      const resp = await request.json();
      console.log("i am here");
      setLoading(false);
      console.log("i am here now");
      setIsSent(true);
      setTimeout(() => {
        console.log("about to fire set sent");
        setIsSent(false);
      }, 3000);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  return (
    <div className="">
      <Menu />
      <main>
        <div className="h-[85px]"></div>
        <div className="hero bg-gradient-to-b from-[#f8fafc] to-[#eff6ff]  relative overflow-hidden   py-23 px-5 flex flex-col items-center">
          <div className="flex flex-col items-center gap-[2rem] md:max-w-[calc(100%-30%)]">
            <h5
              className="text-[#3b82f6] text-[0.875rem] bg-white p-3 rounded-[50px] px-5 font-[500] shadow z-10 font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]"
              onClick={() => {
                console.log("i was clicked");
              }}
            >
              Premier Legal Consultations Platform
            </h5>
            <h2 className="text-[clamp(2.5rem,5vw,6rem)] text-[#0f1419] text-center font-[700] hero-title font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] ">
              Connect With Expert Legal Counsel in Minutes
            </h2>
            <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-[#64748b] text-center leading-8">
              Schedule confidential consultations with top-tier attorney through
              our secure,streamlined booking platform.Get the legal expertise
              you need when you need it
            </p>
            <button className="text-[1rem]  bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] shadow py-4 px-8 outline-0 border-0 rounded-[15px] text-white font-[500]">
              Book Your Consultation
            </button>

            <span className="mt-[-20px] text-[1rem] text-[#64748b]">
              Free 15-minute initial consultation Availaable 24/7
            </span>
          </div>
        </div>
        <div
          className="bg-white flex flex-col space-y-5 py-25 scrollsmooth"
          id="features"
        >
          <div className="flex flex-col space-y-5 px-5">
            <div className="font-[600] text-[clamp(1.875rem,4vw,3rem)] leading-[1.2] text-center tracking-[-0.025rem] text-[#0f1419] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
              Why Legal Professionals Choose JusticeStand
            </div>
            <p className="text-[#64748b] leading-[1.7] text-[clamp(1.125rem, 2vw, 1.25rem)] text-center px-5">
              Streamlined scheduling meets enterprise-grade security for
              premiumn legal consultations.
            </p>
          </div>
          <div className="feature-card shadow grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] md:px-[5rem]">
            <motion.div
              variants={chooseJusticeStandVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // 👈 key: triggers when 30% is visible
            >
              <img src={security} alt="" />
              <h3 className="">Banck-Grad Security</h3>
              <p>
                End-to-end encryption and HIPAA-compliant infrastructure ensure
                your sensitive lega matters remain completely confidential.
              </p>
            </motion.div>
            <motion.div
              variants={chooseJusticeStandVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={lighting} alt="" />
              <h3>Instant Scheduling</h3>
              <p>
                Book consultations in real-time with our AL-powered calendar
                optimization.No back-and-forth emails no delays.
              </p>
            </motion.div>
            <motion.div
              variants={chooseJusticeStandVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={company} alt="" />
              <h3>Expert Matching</h3>
              <p>
                Our propreitiay algorithm connects you with attorney who
                specialize in your specific legal need and jurisdiction
              </p>
            </motion.div>
            <motion.div
              variants={chooseJusticeStandVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={platform} alt="" />
              <h3>Multi-Platform Access</h3>
              <p>
                Seamlessly manage your consultations accrss desktop,mobile and
                tablet with our responsive platfrom design.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#0f1419] to-[#1e3a8a] py-[5rem] booking relative">
          <div
            className=" text-white grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center xxs:px-[4rem] xxs:gap-[4rem] z-[9999]"
            id="book-now"
          >
            <div>
              <div className="flex flex-wrap space-y-5">
                <h3 className="text-[clamp(1.875rem,4vw,3rem)] font-[600] leading-[1.2] px-3 tracking-[-0.025rem] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                  Schedule Your Consultation
                </h3>
                <div className="text-[1.125rem] leading-[1.7] px-5">
                  Join thousands of client who trust JusticeStand for their
                  legal consultation need.Our streamlined process gets you
                  connected with expert conusel faster than ever.
                </div>
                <ul className="*:text-[1rem] *:p-2 *:before:content-['✓'] *:before:text-green-500 *:before:px-5 mx-[-10px]">
                  <li>Availble 24/7 scheduling</li>
                  <li>Instant confirmation</li>
                  <li>Flexible rescheduling</li>
                  <li>Secure document sharing</li>
                  <li>Multi-language support</li>
                </ul>
              </div>
            </div>
            <form className="bg-white mx-5 p-[3rem] rounded-[10px] text-black flex flex-col space-y-6 shadow-lg mt-[3rem] mb-[1.5rem]">
              <div
                className="group transform focus:outline-none focus:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
                tabIndex={0}
              >
                <label htmlFor="practice-area" className="font-[500]">
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
                  <div className="text-[14px]">
                    {service || "Select your legal need"}
                  </div>
                  <div
                    className={`${
                      hideOptions ? "hidden" : "block"
                    } absolute w-full top-12 left-0 bg-white rounded-[10px] border-1 border-gray-600 *:p-3 *:hover:bg-[#3b82f6] *:hover:text-white`}
                    datatype="option"
                    onClick={(e) => {
                      setService(e.target.textContent);
                    }}
                  >
                    <div>Corporate Law</div>
                    <div>Employment Law</div>
                    <div>Intellectual Property</div>
                    <div>Real Estate</div>
                    <div>Family Law </div>
                    <div>Criminial Defense</div>
                    <div>Personal Injury</div>
                    <div>Tax Law</div>
                  </div>
                </div>
              </div>
              <div
                className="group transform  focus-within:outline-none focus-within:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
                tabIndex={0}
              >
                <label htmlFor="full-name" className="font-[500]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.currentTarget.value)}
                  placeholder="Enter your full name"
                  className="tracking-widest border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
                />
              </div>
              <div
                className="group transform focus-within:outline-none focus-within:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
                tabIndex={0}
              >
                <label htmlFor="email" className="font-[500]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  placeholder="your email@company.com"
                  className="tracking-widest border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
                />
              </div>
              <div
                className="group transform focus-within:outline-none focus-within:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
                tabIndex={0}
              >
                <label htmlFor="phone-number" className="font-[500]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phoneNumber"
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  placeholder="+234 (0000)-(0000)-(000)"
                  className="tracking-widest border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
                />
              </div>
              <div
                className="group transform focus-within:outline-none focus-within:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
                tabIndex={0}
              >
                <label htmlFor="date" className="font-[500]">
                  Appointment Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.currentTarget.value)}
                  className="tracking-widest border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
                />
              </div>
              {/* <div
                className="group transform focus-within:outline-none focus-within:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
                tabIndex={0}
              >
                <label htmlFor="duration" className="font-[500]">
                  Duration
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={duration}
                
                  onChange={(e) => setDuration(e.currentTarget.value)}
                  className="tracking-widest border-1 border-[#e2e8f0] w-full p-3 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none"
                  placeholder="Appointment duration"
                />
              </div> */}
              <div
                className="group transform focus-within:outline-none focus-within:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col space-y-4"
                tabIndex={0}
              >
                <label htmlFor="description" className="font-[500]">
                  Brief Case Description
                </label>
                <textarea
                  placeholder="Please provide us a brief view of your legal matter. . ."
                  className="tracking-widest border-1 border-[#e2e8f0] w-full p-3 px-5 rounded-[10px] group-focus:ring-2 group-focus:ring-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a] transition-all duration-300 ease-in-out focus:outline-none h-[100px]"
                  onChange={(e) => setSummary(e.currentTarget.value)}
                ></textarea>
              </div>
              <button
                className={`items-center p-3 rounded-[10px] text-white text-[1rem] font-[500] peer ${
                  isSent
                    ? "bg-green-700"
                    : "bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]"
                }`}
                type="button"
                disabled={disabled}
                onClick={(e) => {
                  if (
                    email === "" ||
                    phone === " " ||
                    fullName === "" ||
                    service === " " ||
                    summary === " " ||
                    date === " "
                  ) {
                    setDisabled(true);
                    return;
                  }
                  setLoading(true);
                  submit();
                }}
              >
                {loading
                  ? "Scheduling..."
                  : isSent
                  ? "✓ Consultation Scheduled"
                  : "Schedule Consultation"}
              </button>
              <p className="peer-disabled:block hidden text-red-500 mt-[-20px] text-center">
                fields cannot be empty
              </p>
            </form>
          </div>
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
          <motion.div
            className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))]  trust-stat gap-[2rem] px-4"
            variants={chooseJusticeStandVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <span className=" trust-fig">50,000+</span>
              <span className="desc">Consultations Scheduled</span>
            </div>
            <div>
              <span className="trust-fig">2,500+</span>
              <span className="desc">Legal Professionals</span>
            </div>
            <div>
              <span className="trust-fig">98.5%</span>
              <span className="desc">Client Satisfaction</span>
            </div>
            <div>
              <span className="trust-fig">24/7</span>
              <span className="desc">Platform Availability</span>
            </div>
          </motion.div>
          <div
            className="testimonials mt-15 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] space-y-10"
            id="reviews"
          >
            <motion.div
              className="bg-white p-[2rem] flex flex-col space-y-6 shadow mx-5 rounded-[10px]"
              variants={chooseJusticeStandVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-[#64748b">
                <i>
                  ConsultBooker transformed how we handle client intake. The
                  seamless scheduling and security features give our clients
                  confidence from the very first interaction.
                </i>
              </p>
              <div className="flex gap-4 items-center">
                <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0f38f6] p-3 text-white font-[700] rounded-full font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                  JM
                </span>
                <div className="flex flex-col">
                  <span className="font-[600] text-[#0f1419] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                    Jessica Morrison
                  </span>
                  <span className="font-[600] text-[#64748b] text-[0.875rem]">
                    Partner, Morrison & Associates
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-[2rem] flex flex-col space-y-6 shadow mx-5 rounded-[10px]"
              variants={chooseJusticeStandVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-[#64748b">
                <i>
                  "As a client, I was impressed by the professionalism and
                  security of the platform. Scheduling my consultation was
                  effortless, and the attorney was perfectly matched to my
                  needs."
                </i>
              </p>
              <div className="flex gap-4 items-center">
                <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0f38f6] p-3 text-white font-[700] rounded-full font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                  SK
                </span>
                <div className="flex flex-col">
                  <span className="font-[600] text-[#0f1419] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                    Sarah Kim
                  </span>
                  <span className="font-[600] text-[#64748b] text-[0.875rem]">
                    CEO, Innovation Ventures
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-[2rem] flex flex-col space-y-6 shadow mx-5 rounded-[10px]"
              variants={chooseJusticeStandVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-[#64748b">
                <i>
                  "The platform's intelligent matching system consistently
                  connects us with clients who are the perfect fit for our
                  practice areas. It's been a game-changer."
                </i>
              </p>
              <div className="flex gap-4 items-center font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0f38f6] p-3 text-white font-[700] rounded-full font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                  DR
                </span>
                <div className="flex flex-col">
                  <span className="font-[600] text-[#0f1419]">
                    David Rodriguez
                  </span>
                  <span className="font-[600] text-[#64748b] text-[0.875rem]">
                    Senior Counsel, TechLegal Group
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-[2rem] flex flex-col space-y-6 shadow mx-5 rounded-[10px] mb-[2.5rem]"
              variants={chooseJusticeStandVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-[#64748b">
                <i>
                  ConsultBooker transformed how we handle client intake. The
                  seamless scheduling and security features give our clients
                  confidence from the very first interaction.
                </i>
              </p>
              <div className="flex gap-4 items-center">
                <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0f38f6] p-3 text-white font-[700] rounded-full font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                  JM
                </span>
                <div className="flex flex-col">
                  <span className="font-[600] text-[#0f1419] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
                    Jessica Morrison
                  </span>
                  <span className="font-[600] text-[#64748b] text-[0.875rem]">
                    Partner, Morrison & Associates
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <footer className="bg-[#0f1419] text-white pb-[1rem] pt-[4rem] px-5">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[3rem]">
          <div className="flex-1">
            <h3 className="text-[1.5rem] font-[500]">JusticeStand</h3>
            <p className="leading-[1.6] text-[#e0dddd] py-5 text-[16px]">
              The premier platform connecting cleint with experience lega
              counsel through secure,streamlined consultation scheduling.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="my-2 text-[1.3rem] font-[600]">Platform</h4>
            <ul className="*:py-2 *:text-[#e0dddd] *:text-[16px]">
              <li>How it Works</li>
              <li>For Attorneys</li>
              <li>For Clients</li>
              <li>Security & Privacy</li>
              <li>Api Integration</li>
            </ul>
          </div>
          {/* <div>
            <h4 className="my-2 text-[1.3rem] font-[600]">Api Integration</h4>
          </div> */}

          <div className="flex-1">
            <h4 className="my-2 text-[1.3rem] font-[600]">Support</h4>
            <ul className="*:py-2 *:text-[#e0dddd] *:text-[16px]">
              <li>Help Center</li>
              <li> Contact Support</li>
              <li>System Status</li>
              <li>Training Resources</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="my-2 text-[1.3rem] font-[600]">Legal</h4>
            <ul className="*:py-2 *:text-[#e0dddd] *:text-[16px]">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Compliance</li>
              <li>Attorney Directory</li>
            </ul>
          </div>
        </div>
        {/* <span className="block h-[1px] bg-gray-50 mt-[4rem]"></span> */}
        <div className="border-t-[1px] border-[rgba(128,121,121,0.3)] mt-[2rem]">
          <p className="text-center text-[#a19d9d] text-[18px] py-[2rem]">
            &copy; 2005 JusticeStand.All right reserved.| Secure Legal
            Consultation Platform
          </p>
        </div>
      </footer>
    </div>
  );
}
