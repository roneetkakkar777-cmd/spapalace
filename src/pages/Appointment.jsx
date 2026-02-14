import { brandDetails } from "../config";
import massages from "../data/massage.json";
import spas from "../data/spa.json";

export default function Appointment() {
  return (
    <section className="bg-secondary-50 min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark-900">
            Book an Appointment
          </h1>
          <p className="mt-4 text-gray-600">
            Share your details and our team from {brandDetails.name} will contact
            you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
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
              value={`New Appointment Request - ${brandDetails.name}`}
            />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your phone number"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Service
              </label>
              <select
                name="service"
                required
                className="w-full border rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Choose a service</option>
                <optgroup label="Massage Services">
                  {massages.map((item) => (
                    <option key={item.slug} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Spa Services">
                  {spas.map((item) => (
                    <option key={item.slug} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred Time
              </label>
              <input
                type="time"
                name="time"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Message (optional)
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Any specific requirement or message"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-md transition"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
