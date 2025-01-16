import React from 'react';

const StudentDash = () => {
  return (
    <div className="h-screen bg-black text-white p-6">
      <div className="container mx-auto flex flex-wrap gap-6">
        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div className="bg-gray-800 rounded-lg p-6 text-center text-xl font-semibold">
            01
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center text-xl font-semibold">
            02
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center text-xl font-semibold">
            03
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center text-xl font-semibold">
            04
          </div>
        </div>

        {/* Flex Section */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="bg-gray-800 rounded-lg p-6 text-center text-xl font-semibold">
            05
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center text-xl font-semibold">
            06
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
