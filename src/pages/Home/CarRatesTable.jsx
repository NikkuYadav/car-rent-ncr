import React from "react";

const carRates = [
  { model: "SCORPIO N", rates: [5000, 4500] },
  { model: "INNOVA CRYSTA", rates: [4500, 4000] },
  { model: "CRETA", rates: [3500, 3000] },
  { model: "VENUE", rates: [3000, 2500] },
  { model: "BREEZA", rates: [3000, 2500] },
  { model: "DZIRE", rates: [2500, 2200] },
  { model: "GLANZA", rates: [2800, 2500] },
  { model: "FRONX", rates: [2800, 2500] },
  { model: "SWIFT", rates: [2200, 1800] },
  { model: "BALENO", rates: [2400, 2000] },

];

const CarRatesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 text-white">
        {/* Table Header */}
        <thead className="bg-primary">
          <tr>
            <th className="border border-white px-6 py-3 text-left">CARS MODELS</th>
            {/* <th className="border border-white px-6 py-3">01 TO 04 DAYS</th>
            <th className="border border-white px-6 py-3">05 TO 10 DAYS</th> */}
            <th className="border border-white px-6 py-3">05 TO 15 DAYS</th>
            <th className="border border-white px-6 py-3">01 MONTH</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-transparent">
          {carRates.map((car, index) => (
            <tr key={index} className="border border-white text-center hover:bg-gray-800">
              <td className="border border-white px-6 py-3">{car.model}</td>
              {car.rates.map((rate, idx) => (
                <td key={idx} className="border border-white px-6 py-3">
                  {rate}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarRatesTable;
