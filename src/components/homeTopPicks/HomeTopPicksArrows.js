import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Button from "../button/Button";

import { products } from "../../data/products";

const HomeTopPicksArrows = () => {
  const navigate = useNavigate();

  const picksSliderRef = useRef();

  return (
    <div id="top-picks" className='w-full text-center pt-5'>
        <div className="flex justify-center relative z-20">
            <div className="pt-2 pb-3 px-6 bg-brandNeonBlue rounded-xl border-[3px] border-brandBlue">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold md:!leading-[1.2] text-transparent text-center drop-shadow-md">
                    <span className='bg-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>
                        Top Picks
                    </span>
                </h3>
            </div>
        </div>
            <div className='border-brandBlue border-[3px] rounded-xl pt-4 bg-white -mt-7'>
                <div className='flex gap-4 justify-center mx-auto px-1 relative'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1.2}
                    autoplay={false}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                    onSwiper={it => (picksSliderRef.current = it)}
                    loop
                    >
                {products.slice(0, 6).map((product) => (
                    <SwiperSlide className="px-2.5">
                    <div  onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer flex flex-col bg-white shadow-sm mb-5 rounded-lg h-full hover:scale-105 transition-all">
                        <div className="rounded-lg w-full py-1">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-between items-center py-3 md:py-3 px-2">
                            <div>
                                <div className=" text-gray-500 lg:text-lg font-bold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0 line-clamp-2">{product.name}</div>
                            </div>
                            <div>
                                <div className="price">
                                    <div className="flex items-end justify-center">
                                        <span className="text-brandBlue font-bold text-sm">£{product.price}</span>
                                        {product.originalPrice &&
                                            <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">£{product.originalPrice}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    </div>
  );
};

export default HomeTopPicksArrows;
