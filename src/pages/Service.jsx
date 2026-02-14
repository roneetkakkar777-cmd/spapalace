import { Link } from "react-router-dom";
import massages from "../data/massage.json";
import spas from "../data/spa.json";

export default function Service() {
  return (
    <section className="bg-secondary-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark-900">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of massage and spa therapies designed to
            relax, rejuvenate, and refresh your body and mind.
          </p>
        </div>

        {/* ================= MASSAGE SERVICES ================= */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-dark-900 mb-8">
            Massage Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {massages.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-4 text-sm text-gray-700">
                    <p><b>Duration:</b> {item.duration}</p>
                    <p><b>Price:</b> {item.price}</p>
                  </div>

                  <Link
                    to={`/massage/${item.slug}`}
                    className="inline-block mt-5 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SPA SERVICES ================= */}
        <div>
          <h2 className="text-2xl font-bold text-dark-900 mb-8">
            Spa Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {spas.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-4 text-sm text-gray-700">
                    <p><b>Duration:</b> {item.duration}</p>
                    <p><b>Price:</b> {item.price}</p>
                  </div>

                  <Link
                    to={`/spa/${item.slug}`}
                    className="inline-block mt-5 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
