import React, { useState } from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Chance from 'chance';

const Scatter = () => {
  const [colorX, setColorX] = useState('piecewise');
  const [colorY, setColorY] = useState('None');
  const [colorZ, setColorZ] = useState('None');
  const POINTS_NUMBER = 50;
  const chance = new Chance(42);

  const generateGaussianData = (mean, stdev = [0.5, 0.5], N = 50) =>
    [...Array(N)].map((_, i) => {
      const x =
        Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
          Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
          stdev[0] +
        mean[0];
      const y =
        Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
          Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
          stdev[1] +
        mean[1];
      return { x, y, z: x + y, id: `${mean.join(',')}${i}` };
    });

  const series = [
    {
      data: [
        ...generateGaussianData([-1, -1]),
        ...generateGaussianData([-1, 1]),
        ...generateGaussianData([1, 1]),
        ...generateGaussianData([1, -1]),
      ],
      valueFormatter: (v) => `(${v.x.toFixed(1)}, ${v.y.toFixed(1)})`,
    },
  ];

  const getColorMap = (axis, colorType) => {
    switch (colorType) {
      case 'continuous':
        return {
          type: 'continuous',
          min: -2,
          max: 2,
          color: axis === 'x' ? ['green', 'orange'] : ['blue', 'red'],
        };
      case 'piecewise':
        return {
          type: 'piecewise',
          thresholds: [-1.5, 0, 1.5],
          colors:
            axis === 'z'
              ? ['#d01c8b', '#f1b6da', '#b8e186', '#4dac26']
              : ['lightblue', 'blue', 'orange', 'red'],
        };
      case 'ordinal':
        return {
          type: 'ordinal',
          values: ['A', 'B', 'C', 'D'],
          colors: ['#d01c8b', '#f1b6da', '#b8e186', '#4dac26'],
        };
      default:
        return undefined;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-center mb-4">Scatter Plot</h1>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2} justifyContent="center">
          {['x', 'y', 'z'].map((axis) => (
            <TextField
              key={axis}
              select
              label={`${axis}-axis colorMap`}
              value={axis === 'x' ? colorX : axis === 'y' ? colorY : colorZ}
              onChange={(e) =>
                axis === 'x'
                  ? setColorX(e.target.value)
                  : axis === 'y'
                  ? setColorY(e.target.value)
                  : setColorZ(e.target.value)
              }
              sx={{ 
                minWidth: 150,
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiSelect-select': { color: 'white' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              }}
            >
              <MenuItem value="None" sx={{ color: 'white' }}>None</MenuItem>
              <MenuItem value="piecewise" sx={{ color: 'white' }}>Piecewise</MenuItem>
              <MenuItem value="continuous" sx={{ color: 'white' }}>Continuous</MenuItem>
              {axis === 'z' && <MenuItem value="ordinal" sx={{ color: 'white' }}>Ordinal</MenuItem>}
            </TextField>
          ))}
        </Stack>

        <ScatterChart
          height={270}
          grid={{ horizontal: true, vertical: true }}
          series={series}
          xAxis={[
            {
              min: -3,
              max: 3,
              colorMap: getColorMap('x', colorX),
              tickLabelStyle: { fill: 'white' }
            },
          ]}
          yAxis={[
            {
              min: -3,
              max: 3,
              colorMap: getColorMap('y', colorY),
              tickLabelStyle: { fill: 'white' }
            },
          ]}
          zAxis={[
            {
              data:
                colorZ === 'ordinal'
                  ? [
                      ...[...Array(POINTS_NUMBER)].map(() => 'A'),
                      ...[...Array(POINTS_NUMBER)].map(() => 'B'),
                      ...[...Array(POINTS_NUMBER)].map(() => 'C'),
                      ...[...Array(POINTS_NUMBER)].map(() => 'D'),
                    ]
                  : undefined,
              colorMap: getColorMap('z', colorZ),
            },
          ]}
        />
      </Stack>
    </div>
  );
};

export default Scatter;
