import {GiSelfLove }from 'react-icons/gi'
const Footer = () => {
    return (
        <div className="pt-3 pb-0 md:flex items-center justify-between">
            <p className='text-xs md:text-sm text-accent '>COPYRIGHT ©2023 Saiful Islam, All rights Reserved</p>
            <div className="flex items-center md:gap-4 gap-1">
                <p className='text-xs text-accent'>Hand-crafted & Made with</p>
                <GiSelfLove className='text-2xl text-red-600'/>
            </div>
        </div>
    );
};

export default Footer;