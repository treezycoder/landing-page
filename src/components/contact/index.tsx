import { useGlobalState } from "@/state";
import { useEffect, useState } from "react";
import MailIcon from "@/lib/assets/icons/mail.icon";

const Contact: React.FC = () => {
  const { contactRef, active } = useGlobalState();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(active === "contact");
  }, [active]);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="w-full min-h-screen pb-[100px] flex items-center justify-center text-white overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-20 w-[90%] max-w-[1200px]">
        {/* Section Title */}
        <div
          className={`${
            animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          } transition-all duration-500 font-bold text-center  text-[35px] sm:text-[40px] md:text-[60px] capitalize`}
        >
          Get in Touch
        </div>

        {/* Description */}
        <div
          className={`${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-[400ms] delay-100 flex flex-col items-center justify-center gap-6 text-center text-[16px] sm:text-[18px] w-full md:max-w-[800px]`}
        >
          <p>
            We’d love to hear from you! Whether you have a question or want to
            collaborate on a project, feel free to reach out. We’ll get back to
            you as soon as possible.
          </p>
          <div className="flex gap-3 items-center text-lg">
            <span>
              <MailIcon />
            </span>
            <span>
              Email:{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-indigo-300 text-sm md:text-base"
              >
                treezyvarrick@gmail.com
              </a>
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-[400ms] delay-200 flex flex-col items-center justify-center gap-6 w-full max-w-[600px]`}
        >
          <form
            onSubmit={(e) => e.preventDefault}
            action="#"
            method="POST"
            className="w-full text-sm flex flex-col gap-4 p-6 bg-black/5  rounded-xl shadow-lg"
          >
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="font-semibold text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border  bg-transparent rounded-lg p-2"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="font-semibold text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border bg-transparent  rounded-lg p-2"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold text-gray-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border rounded-lg bg-transparent p-2"
                rows={5}
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-200 text-black rounded-lg p-3 font-semibold opacity-80 hover:opacity-100 transition-all duration-300 text-[16px] md:text-[18px] text-nowrap"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer / Social Links */}
        <div
          className={`${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-[400ms] delay-300 flex items-center gap-6`}
        >
          <p className="text-md md:text-lg">
            Or connect with us on social media
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-indigo-300 hover:text-white transition-all duration-300"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-indigo-300 hover:text-white transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
