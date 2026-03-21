import { ChevronDown } from "lucide-react";

interface SavedAddressProps {
  onSelectNew: () => void;
}

const SavedAddress = ({ onSelectNew }: SavedAddressProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900 font-inter">
          Saved Addresses
        </h3>
        <button
          onClick={onSelectNew}
          className="text-primary text-sm font-inter hover:underline"
        >
          + Add New Address
        </button>
      </div>

      <div className="space-y-3">
        <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900 font-inter">
                Home Address
              </h4>
              <p className="text-xs text-gray-500 font-inter mt-1">
                123 Victoria Island, Lagos Island, Lagos State
              </p>
              <p className="text-xs text-gray-500 font-inter">
                +234 801 234 5678
              </p>
            </div>
            <input
              type="radio"
              name="savedAddress"
              defaultChecked
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900 font-inter">
                Office Address
              </h4>
              <p className="text-xs text-gray-500 font-inter mt-1">
                456 Ikoyi, Eti-Osa, Lagos State
              </p>
              <p className="text-xs text-gray-500 font-inter">
                +234 802 345 6789
              </p>
            </div>
            <input
              type="radio"
              name="savedAddress"
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
