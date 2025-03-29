import React from "react";

const carRates = [
  { model: "SCORPIO N", rates: [4500, 1900, 1800, 1500] },
  { model: "INNOVA CRYSTA", rates: [4500, 2300, 2100, 1800] },
  { model: "CRETA", rates: [3500, 2500, 2300, 2000] },
  { model: "VENUE", rates: [3000, 2300, 2100, 1800] },
  { model: "BREEZA", rates: [3000, 2800, 2600, 2300] },
  { model: "DZIRE", rates: [2500, 2000, 1800, 1500] },
  { model: "GLANZA", rates: [2800, 3800, 3500, 3200] },
  { model: "FRONX", rates: [2800, 3200, 3000, 2700] },
  { model: "SWIFT", rates: [2200, 1800, 1700, 1400] },
  { model: "BALENO", rates: [2400, 3600, 3400, 3100] },

];

const CarRatesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 text-white">
        {/* Table Header */}
        <thead className="bg-primary">
          <tr>
            <th className="border border-white px-6 py-3 text-left">CARS MODELS</th>
            <th className="border border-white px-6 py-3">01 TO 04 DAYS</th>
            <th className="border border-white px-6 py-3">05 TO 10 DAYS</th>
            <th className="border border-white px-6 py-3">11 TO 20 DAYS</th>
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
