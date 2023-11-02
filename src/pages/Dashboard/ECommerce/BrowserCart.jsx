import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BrowserCart = ({ image, title, percent, settings }) => {
    const [radialBar] = useState(settings)
    return (
        <div className=" flex items-center">
            <div className="imageText flex items-center gap-3">
                <img src={image} alt="" className="w-6 h-6"/>
                <h4 className="text-sm">{title}</h4>
            </div>
            <div className="chartPercent flex items-center gap-3">
                <p className="text-sm">{percent}</p>
                <ReactApexChart options={radialBar.options} series={radialBar.series} type="radialBar" width={20} height={16}/>
            </div>
        </div>
    );
};

export default BrowserCart;