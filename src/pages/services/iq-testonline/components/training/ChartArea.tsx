'use client'
import { AppProps } from "next/app";
import { GetStaticPropsContext } from "next";

type Props = AppProps & {
    children: React.ReactNode
}

import dynamic from 'next/dynamic';
import React from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ChartAreaProps = {
    title: string;
};

const ChartArea: React.FC<ChartAreaProps> = ({ title }) => {


    // Array para almacenar los nombres de los últimos 7 días
    const last7DaysNames = [];

    // Días de la semana en formato corto (por ejemplo, "Lun", "Mar", "Mié", etc.)
    const weekdaysShort = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    // Obtener el día actual
    const today = new Date();

    // Iterar para los últimos 7 días
    for (let i = 7; i >= 0; i--) {
        // Calcular la fecha para el día actual menos i días
        const date = new Date(today);
        date.setDate(today.getDate() - i);

        // Obtener el nombre del día de la semana (Lun, Mar, Mié, etc.)
        const dayName = weekdaysShort[date.getDay()];

        // Agregar el nombre del día al array
        last7DaysNames.push(dayName);
    }

    const chartData = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: last7DaysNames
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };
    return (
        <div className='rounded-lg border-customBorderGray border-[1px] shadow-md text-customGray'>
            <h1 className='font-bold'>{title}</h1>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                style={{ width: "auto" }}
            />
        </div>
    );
};

export default ChartArea;


export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}