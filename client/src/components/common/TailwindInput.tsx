import React from 'react';

const TailwindInput = ({value, setValue}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg font-semibold text-gray-600">Tailwind Input</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TailwindInput;
