import { Link } from "react-router-dom";
import { brandDetails } from "../config";

export default function Home() {
  return (
    <section className="bg-secondary-50 min-h-[90vh] flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-primary-700 bg-primary-50 rounded-full">
            Luxury Spa & Wellness
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-dark-900 leading-tight">
            {brandDetails.name}
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            A peaceful wellness destination designed for deep relaxation,
            rejuvenation, and complete mind & body balance. Experience premium
            massage and spa therapies in a calm, luxurious environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/appointment"
              className="bg-primary-600 hover:bg-primary-700 text-white px-7 py-3 rounded-md font-bold shadow-lg transition"
            >
              Book Appointment
            </Link>

            <a
              href={`tel:${brandDetails.phone}`}
              className="border-2 border-primary-600 text-primary-600 px-7 py-3 rounded-md font-bold hover:bg-primary-600 hover:text-white transition"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="girls/home1.png"
              alt={`${brandDetails.name} - Luxury Spa`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-primary-600 font-bold text-lg">10+ Years</p>
            <p className="text-sm text-gray-600">of Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}
