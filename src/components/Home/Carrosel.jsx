import img1 from "../../assets/banners/1.png";
import img2 from "../../assets/banners/2.png";
import img3 from "../../assets/banners/3.png";
import img4 from "../../assets/banners/4.png";
import img5 from "../../assets/banners/5.png";
import { Swiper, SwiperSlide } from "swiper/react";


const Carrosel = () => {
    const imgData = [
        { id:1, img: img1,},
        { id:2, img: img2,},
        { id:3, img: img3,},
        { id:4, img: img4,},
        { id:5, img: img5,},
    ]
    
    return(
        <div className=" top-0 left-0 w-full h-full">
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
                className="w-full h-full"
            >
                {imgData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img 
                            src={item.img}
                            alt="Imagem carrosel"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide> 
                ))}
            </Swiper>
        </div>
    )
}

export default Carrosel;