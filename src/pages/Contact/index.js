import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = "service_ub0s3l9";
const templateId = "template_2k96jkk";
const publics = "S8toVAtI8-CrPQEjy";

export default function Contact() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publics).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        setIsSubmitted(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };
  return (
    <div>
      <div className="pt-3 flex flex-col justify-center px-6 lg:px-8">
        <h1>Fill out the form below to Contact Me</h1>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md dark:bg-gray-900">
          <div className="py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" ref={form} onSubmit={sendEmail}>
              {/* Name section required */}
              <div>
                <label
                  for="name"
                  className="block font-medium"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="from_name"
                    type="name"
                    required
                    className="w-full border border-purple dark:border-lightpink px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-lightpurple focus:ring-1 focus:ring-lightpurple"
                  />
                </div>
              </div>
              {/* Email section required */}
              <div>
                <label
                  for="email"
                  className="block font-medium"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="reply_to"
                    type="email"
                    required
                    className="w-full border border-purple dark:border-lightpink px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-lightpurple focus:ring-1 focus:ring-lightpurple"
                  />
                </div>
              </div>
              {/* Message section required */}
              <div>
                <label
                  for="message"
                  className="block font-medium"
                >
                  Enter a Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    type="message"
                    required
                    className="w-full border border-purple dark:border-lightpink px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-lightpurple focus:ring-1 focus:ring-lightpurple"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm font-medium text-navy dark:text-lightpink hover:text-deep dark:hover:text-deep"
                  value="send"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {isSubmitted && (
            <div className="">
              <p>Form submitted</p>
              <button onClick={closePopup}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
