import { brandDetails } from "../config";

export default function Contact() {
  return (
    <section className="bg-secondary-50 min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT : CONTACT DETAILS */}
        <div>
          <h1 className="text-3xl font-extrabold text-dark-900 mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 mb-8">
            Get in touch with {brandDetails.name} for appointments, queries, or
            personalized spa experiences.
          </p>

          <div className="space-y-5 text-dark-800">
            <div>
              <p className="font-semibold">Business Name</p>
              <p>{brandDetails.name}</p>
            </div>

            <div>
              <p className="font-semibold">Phone</p>
              <a
                href={`tel:${brandDetails.phone}`}
                className="text-primary-600 hover:underline"
              >
                {brandDetails.phone}
              </a>
            </div>

            <div>
              <p className="font-semibold">Email</p>
              <a
                href={`mailto:${brandDetails.email}`}
                className="text-primary-600 hover:underline"
              >
                {brandDetails.email}
              </a>
            </div>

            <div>
              <p className="font-semibold">Address</p>
              <p className="whitespace-pre-line">
                {brandDetails.address}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT : CONTACT FORM */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">
            Send Us a Message
          </h2>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="2c388088-80ff-415d-bfaa-efb126c84bda"
            />

            <input
              type="hidden"
              name="subject"
              value={`New Contact Form Submission - ${brandDetails.name}`}
            />

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
