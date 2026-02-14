import { useParams } from "react-router-dom";
import massages from "../data/massage.json";
import { brandDetails } from "../config";

export default function Massage() {
  const { slug } = useParams();

  const massage = massages.find((item) => item.slug === slug);

  if (!massage) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold text-dark-900">
          Massage Service Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="pt-10 pb-20 bg-secondary-50">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-dark-900">
              {massage.title}
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {massage.description}
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p><b>Duration:</b> {massage.duration}</p>
              <p><b>Price:</b> {massage.price}</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={massage.coverImage}
              alt={massage.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">
            Benefits
          </h2>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {massage.benefits.map((benefit, i) => (
              <li
                key={i}
                className="bg-white p-5 rounded-xl shadow text-gray-700"
              >
                ✔ {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* THERAPISTS GALLERY */}
        <div>
          <h2 className="text-2xl font-bold text-dark-900 mb-6">
            Our Therapists
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {massage.gallery.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow hover:scale-105 transition"
              >
                <img
                  src={img}
                  alt={`${brandDetails.name} Therapist`}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
