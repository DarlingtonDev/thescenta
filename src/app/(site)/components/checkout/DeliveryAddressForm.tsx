import { ChevronDown, Search } from "lucide-react";
import { useState, useEffect } from "react";
import nigeriaData from "../../data/nigeria-states-cities.json";

interface DeliveryAddressFormProps {
  onBack: () => void;
}

const DeliveryAddressForm = ({ onBack }: DeliveryAddressFormProps) => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    if (
      selectedState &&
      nigeriaData[selectedState as keyof typeof nigeriaData]
    ) {
      setCities(nigeriaData[selectedState as keyof typeof nigeriaData]);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={onBack}
          className="text-primary text-sm font-inter hover:underline"
        >
          ← Back to saved addresses
        </button>
      </div>

      <form className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
            />
          </div>
        </div>

        {/* Address Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Address"
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        {/* State and City */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm appearance-none bg-white"
            >
              <option value="">Select State</option>
              {Object.keys(nigeriaData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <div className="relative">
            <select
              disabled={!selectedState}
              className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm appearance-none bg-white disabled:bg-gray-100"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Phone Field */}
        <div className="flex gap-2">
          <div className="relative w-20">
            <select className="w-full px-3 py-3 pr-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm appearance-none bg-white">
              <option>+234</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
          </div>
          <div className="flex-1">
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
            />
          </div>
        </div>

        {/* Save Information Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label
            htmlFor="saveInfo"
            className="ml-2 text-sm text-gray-700 font-inter"
          >
            Save this information for next time
          </label>
        </div>
      </form>
    </div>
  );
};

export default DeliveryAddressForm;
