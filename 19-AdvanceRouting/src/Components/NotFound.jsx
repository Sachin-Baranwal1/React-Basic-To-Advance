import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center bg-gray-100 page_404">
      <div className="text-center max-w-lg mx-auto">
        <div className="four_zero_four_bg mb-8">
          <h1 className="text-8xl font-extrabold text-rose-600">404</h1>
        </div>

        <div className="contant_box_404">
          <h3 className="text-3xl font-semibold mb-3">
            Looks like you're lost
          </h3>

          <p className="text-gray-600 mb-6">
            The page you are looking for is not available!
          </p>

          <Link
            to="/"
            className="px-6 py-2 bg-rose-600 text-white rounded-lg shadow hover:bg-rose-700 transition link_404"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
