import React, { useState } from 'react';
import Theme from '../../Shared/Theme';
import { orderBarChart, profitLineChart } from '../../../AllChartData';
import ReactApexChart from 'react-apexcharts';

const OrderProfitChart = () => {
    const { isDarkMode } = Theme();

    const [bar] = useState(orderBarChart);
    const [line] = useState(profitLineChart);
    return (
        <div className="grid grid-cols-2  text-accent md:grid-cols-4 gap-5">
            <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} md:col-span-2 pt-8 pl-6 shadow-lg rounded-xl `}>
                <p className="font-medium text-xl">Orders</p>
                <h2 className="font-bold text-2xl my-2">1.30k</h2>
                <div className="-ml-6 -mt-3 mr-8">
                    <ReactApexChart options={bar.options} series={bar.series} type="bar" height={120} width={'100%'} />
                </div>
            </div>
            <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} md:col-span-2 pt-8 pl-6 shadow-lg rounded-xl `}>
                <p className="font-medium text-xl">Profit</p>
                <h2 className="font-bold text-2xl my-2">3.77k</h2>
                <div className="-ml-6 -mt-3 mr-8">
                    <ReactApexChart options={line.options} series={line.series} type="line" height={108} width={'100%'} />
                </div>
            </div>
            <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} col-span-4 pt-8 pl-6  grid grid-cols-2 shadow-2xl rounded-xl `}>
                {/* <div className="col-span-2 pt-8 pl-8 shadow-lg rounded-xl">
                    <p className="font-medium text-2xl">Orders</p>
                    <h2 className="font-semibold text-4xl my-3">3,30k</h2>
                    <div className="-ml-6 -mt-3 mr-8">
                        <ReactApexChart options={bar.options} series={bar.series} type="bar" height={108} width={'100%'} />
                    </div>
                </div> */}
                <div className='left'>
                    <h2></h2>
                    <p></p>
                    <h2></h2>
                    <p></p>
                </div>
                <div className='right'>

                </div>
            </div>
        </div>
    );
};

export default OrderProfitChart;