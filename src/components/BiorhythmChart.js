import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ReferenceLine,
} from 'recharts';

import dayjs from 'dayjs'
import React from 'react'
import {calculateBiorhythmsSeries} from '../calculations'
import './BiorhythmChart.css'

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM');
};

function BiorhythmChart({birthDate, targetDate}) {
    const startDay = dayjs(targetDate).subtract(15, 'days').toISOString()
    const data = calculateBiorhythmsSeries(birthDate, startDay, 31)
        .map((item) => ({ ...item, date: formatDate(item.date)}));
    return (
        <ResponsiveContainer className='biorhythm-chart' width="100%" height={200}>
            <LineChart data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3"/>
            <XAxis dataKey="date"
                ticks={[data[3].date, data[15].date, data[27].date]}
            />
            <ReferenceLine x={data[15].date}/>
            <YAxis />
            <Line className='physical' dot={false} type="natural" dataKey="physical"/>
            <Line className='emotional' dot={false} type="natural" dataKey="emotional"/>
            <Line className='intellectual' dot={false} type="natural" dataKey="intellectual"/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default BiorhythmChart;
