import React from 'react';

const DoctorInfo = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-4">
      <img
        src={imgSrc}
        alt={name}
        className="w-20 h-20 rounded-full object-cover shadow-sm"
      />
      <span className="font-bold">{name}</span>
    </div>
  );
};

export default DoctorInfo;