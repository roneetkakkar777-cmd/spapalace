import { brandDetails } from "../config";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-primary-700 bg-primary-50 rounded-full">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark-900">
            {brandDetails.name}
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A peaceful retreat where luxury, wellness, and relaxation come together.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-bold text-dark-900 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              {brandDetails.name} is a premium wellness destination thoughtfully
              created to offer complete relaxation of the body, mind, and soul.
              Our spa provides a calm and luxurious environment where you can
              disconnect from daily stress and experience true rejuvenation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in professional massage therapies and spa treatments
              delivered by trained and experienced therapists. Using high-quality
              oils and proven techniques, every session is personalized to meet
              your comfort and wellness needs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you seek deep relaxation, stress relief, or a refreshing
              wellness experience, {brandDetails.name} is the perfect place to
              unwind, restore balance, and recharge your energy.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="bg-secondary-50 rounded-2xl p-8 shadow">
            <ul className="space-y-6">
              <li>
                <h3 className="font-bold text-dark-900">
                  🌿 Premium Spa Experience
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Carefully curated therapies in a peaceful, hygienic, and
                  soothing environment.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-dark-900">
                  💆‍♀️ Expert Therapists
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Skilled professionals with years of experience in massage and
                  wellness therapies.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-dark-900">
                  ✨ Relax & Rejuvenate
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  A perfect balance of luxury, comfort, and personalized care.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-dark-900">
                  📍 Prime Location – Connaught Place
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Conveniently located in {brandDetails.address} for easy access
                  and a welcoming atmosphere.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
