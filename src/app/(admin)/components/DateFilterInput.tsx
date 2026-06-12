"use client";

import { Calendar } from "lucide-react";
import { useId, useState } from "react";

type DateFilterInputProps = {
  label: string;
};

const DateFilterInput = ({ label }: DateFilterInputProps) => {
  const id = useId();
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center gap-2 w-full sm:w-auto border border-gray-200 rounded-md px-3 py-1.5 bg-white">
      <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
      <label
        htmlFor={id}
        className="text-xs font-inter font-medium text-gray-600 shrink-0"
      >
        {label}
      </label>
      <div className="relative flex-1 sm:flex-none min-w-[9.5rem]">
        {!value && (
          <span
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-xs font-inter font-medium text-gray-400"
            aria-hidden="true"
          >
            Select date
          </span>
        )}
        <input
          id={id}
          type="date"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`admin-date-input relative z-10 w-full text-xs font-inter font-medium outline-0 bg-transparent text-gray-700 ${
            !value ? "admin-date-input--empty" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default DateFilterInput;
