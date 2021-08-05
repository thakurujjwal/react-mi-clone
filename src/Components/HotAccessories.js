import React from 'react'
import HotItemCard from './HotItemCard'
import '../Style/HotAccessories.css'

const HotAccessories = ({ music, musicCover, smartDeviceCover, smartDevice, home, homeCover, lifeStyle, lifestyleCover, mobileAccessories, mobileAccessoriesCover}) => {
    return (
      
        <div className='HotAccessories'>
            <div>

                <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="coverimg" />
            </div>


            {/*.........   2nd    ....*/}

            <div >
                {music && music.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
            
                {smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {home && home.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

             

                {mobileAccessories && mobileAccessories.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {lifeStyle && lifeStyle.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                
                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            </div>


        </div>
    )
}

export default HotAccessories
