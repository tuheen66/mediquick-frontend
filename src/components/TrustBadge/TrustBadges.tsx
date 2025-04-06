"use client";

const TrustBadges = () => {
  return (
    <div className="bg-white py-8 ">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cold-2 lg:grid-cols-3 gap-6">
          {/* Badge 1 - Genuine Medicines */}
          <div className="flex flex-col items-center p-6 bg-blue-50  shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              100% Genuine Medicines
            </h3>
            <p className="text-gray-600 text-center">
              Sourced directly from certified suppliers
            </p>
          </div>

          {/* Badge 2 - Secure Payment */}
          <div className="flex flex-col items-center p-6 bg-green-50  shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Secure Payment
            </h3>
            <p className="text-gray-600 text-center">
              Encrypted transactions for your safety
            </p>
          </div>

          {/* Badge 3 - Certified Pharmacy */}
          <div className="flex flex-col items-center p-6 bg-purple-50  shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Certified Pharmacy
            </h3>
            <p className="text-gray-600 text-center">
              Licensed and verified healthcare provider
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
