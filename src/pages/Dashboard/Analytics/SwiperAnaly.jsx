import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider1 from "../../../assets/analytics/slider1.png"
import slider2 from "../../../assets/analytics/slider2.png"
import slider3 from "../../../assets/analytics/slider3.png"

const SwiperAnaly = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2 text-white py-2'>
                            <h3 className='text-left text-lg font-semibold leading-none'>Website Analytics <br /> <span className='text-sm font-medium'>Total 28.5% Conversion Rate</span></h3>
                            <h4 className='pt-8 text-lg font-semibold'>Traffic</h4>
                            <p className='pt-4'>
                                <span className='bg-black/20 py-1 px-2 rounded-lg font-medium mr-1'>1.7k</span><span className='pl-1 font-medium md:mr-5 mr-1'>Sessions</span>
                                <span className='bg-black/20 py-1 px-2 rounded-lg font-medium mr-1'>3.5k</span><span className='pl-1 font-medium'>Page View</span>
                            </p>
                            <p className='pt-5'>
                                <span className='bg-black/20 py-1 px-4 rounded-lg font-medium mr-1'>1.2k</span><span className='pl-2 font-medium mr-5'>Leads</span>
                                <span className='bg-black/20 py-1 px-4 rounded-lg font-medium mr-1'>12%</span><span className='pl-2 font-medium mr-5'>Conversions</span>
                            </p>
                        </div>
                        <div className='col-span-1  md:w-36 w-28 h-28 md:h-36'>
                            <img src={slider1} alt="" className='object-cover' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2 text-white py-2'>
                            <h3 className='text-left text-lg font-semibold leading-none'>Website Analytics <br /> <span className='text-sm font-medium'>Total 28.5% Conversion Rate</span></h3>
                            <h4 className='pt-8 text-lg font-semibold'>Spending</h4>
                            <p className='pt-4'>
                                <span className='bg-black/20 py-1 md:px-4 px-2 rounded-lg text-sm font-medium mr-1'>12h</span><span className='md:pl-2 pl-0 font-medium mr-5'>Spend</span>
                                <span className='bg-black/20 py-1 md:px-4 px-2 rounded-lg text-sm font-medium mr-1'>182</span><span className='md:pl-2 pl-0 font-medium'>Order Size</span>
                            </p>
                            <p className='pt-5'>
                                <span className='bg-black/20 py-1 px-4 rounded-lg font-medium mr-1'>127</span><span className='pl-2 font-medium mr-5'>Order</span>
                                <span className='bg-black/20 py-1 px-4 rounded-lg font-medium mr-1'>23k</span><span className='pl-2 font-medium'>Items</span>
                            </p>
                        </div>
                        <div className='col-span-1  md:w-36 w-28 h-28 md:h-36'>
                            <img src={slider2} alt="" className='object-cover' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2 text-white py-2'>
                            <h3 className='text-left text-lg font-semibold leading-none'>Website Analytics <br /> <span className='text-sm font-medium'>Total 28.5% Conversion Rate</span></h3>
                            <h4 className='pt-8 text-lg font-semibold'>Revenue Sources</h4>
                            <p className='pt-4'>
                                <span className='bg-black/20 py-1 px-4 rounded-lg font-medium mr-1'>268</span><span className='pl-2 font-medium mr-5'>Direct</span>
                                <span className='bg-black/20 py-1 px-4 rounded-lg font-medium mr-1'>890</span><span className='pl-2 font-medium mr-5'>Organic</span>
                            </p>
                            <p className='pt-5'>
                                <span className='bg-black/20 py-1 px-4 rounded-lg font-medium mr-1'>622</span><span className='pl-2 font-medium mr-5'>Referral</span>
                                <span className='bg-black/20 py-1 px-4 rounded-lg font-medium mr-1'>1.2</span><span className='pl-2 font-medium mr-5'>kCampaign</span>
                            </p>
                        </div>
                        <div className='col-span-1  md:w-36 w-28 h-28 md:h-36'>
                            <img src={slider3} alt="" className='object-cover' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperAnaly;