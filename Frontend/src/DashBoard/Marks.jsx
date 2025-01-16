import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const Marks = () => {
    return (
        <div className="p-6  h-full">
            <div className="flex justify-center items-center">
                <h2 className="text-xl font-semibold mb-4">Marks Gauge</h2>
            </div>

            <div className="w-full h-full flex justify-center items-center text-white">
                <Gauge
                    value={75}
                    max={100}
                    startAngle={-110}
                    endAngle={110}
                    sx={{
                        width: '300px',  // Increased from 100%
                        height: '300px', // Increased from 100%
                        [`& .${gaugeClasses.valueText}`]: {
                            fontSize: '2.5rem', // Increased from 2rem
                            fill: '#ffffff'     // Already white, but making it explicit
                        },
                        [`& .${gaugeClasses.track}`]: {
                            stroke: '#4B5563'
                        },
                        [`& .${gaugeClasses.progress}`]: {
                            stroke: '#3B82F6'
                        }
                    }}
                    text={({ value, valueMax }) => `${value} / ${valueMax}`}
                />
            </div>
        </div>
    );
};

export default Marks;
