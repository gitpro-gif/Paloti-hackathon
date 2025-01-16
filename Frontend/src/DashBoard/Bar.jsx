import React from 'react'
import { BarChart } from "@mui/x-charts/BarChart";
const Bar = () => {
    return (
        <div>
            <div className="p-6 rounded-lg shadow-md hover:bg-black transition-colors">
                <div className="flex justify-center items-center">
                    <h2 className="text-xl font-semibold mb-4">Performance Chart</h2>
                </div>

                <BarChart
                    xAxis={[{ 
                        scaleType: "band", 
                        data: ["Group A Student", "Group B Student", "Group C Student"],
                        tickLabelStyle: {
                            fill: '#ffffff' // White color for x-axis labels
                        }
                    }]}
                    yAxis={[{
                        tickLabelStyle: {
                            fill: '#ffffff' // White color for y-axis labels
                        }
                    }]}
                    series={[
                        { data: [4, 3, 5] },
                        { data: [1, 6, 3] },
                        { data: [2, 5, 6] },
                    ]}
                    width={400}
                    height={250}
                />
            </div>
        </div>
    )
}

export default Bar
