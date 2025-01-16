import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const Pie = () => {
  return (
    <div className="p-6 h-full">
    <div>
        <h1 className='text-xl font-semibold text-center'>Usage Statistics</h1>
    </div>
      
      <div className="w-full h-full flex justify-center items-center">
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.name} ${item.value}%`,
              arcLabelMinAngle: 45,
              data: desktopOS,
              innerRadius: 30,
              paddingAngle: 2,
              cornerRadius: 5,
            },
          ]}
          sx={{
            width: '200px',
            height: '200px',
            [`& .${pieArcLabelClasses.root}`]: {
              fill: '#fff',
              fontSize: '0.8rem',
              fontWeight: 'bold',
            },
          }}
          width={300} // Adjust dimensions as needed
          height={300}
        />
      </div>
    </div>
  );
};

// Sample data
const desktopOS = [
  { id: 'Windows', value: 75, name: 'Network Security' },
  { id: 'Mac', value: 15, name: 'Cyber Security' },
  { id: 'Linux', value: 10, name: 'AI Security' },
];

export default Pie;
