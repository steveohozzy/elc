import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

import { ChevronUp, X } from "lucide-react";

const DeliveryStrip = () => {
  const [toyfinderOpen, setToyfinderOpen] = useState(false);
  const [ageValue, setAge] = useState('Age');
  const [ageUrlString, setAgeUrlString] = useState();
  const [typeValue, setType] = useState('Type');
  const [typeUrlString, setTypeUrlString] = useState();
  const [priceValue, setPrice] = useState('Price');
  const [priceUrlString, setPriceUrlString] = useState();
  const [showAge, setshowAge] = useState(false);
  const [showType, setshowType] = useState(false);
  const [showPrice, setshowPrice] = useState(false);

  const navigate = useNavigate();

  const ageWrapperRef = useRef(null);
  const typeWrapperRef = useRef(null);
  const priceWrapperRef = useRef(null);

  function useOutsideAlerterAge(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowAge(false)
          document.body.classList.remove('body-noscroll');
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function useOutsideAlerterType(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowType(false)
          document.body.classList.remove('body-noscroll');
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function useOutsideAlerterPrice(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowPrice(false)
          document.body.classList.remove('body-noscroll');
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
    useOutsideAlerterAge(ageWrapperRef);
    useOutsideAlerterType(typeWrapperRef);
    useOutsideAlerterPrice(priceWrapperRef);

  return (
    <div className="bg-white">
      <div className="w-full">
        <Swiper
        className="lg:!overflow-visible lg:!z-[9999]"
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            }
          }}
          loop
        >
          <SwiperSlide>
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex items-center justify-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 37 29" fill="none">
                  <path d="M18.5547 21.5V12.75H22.0547V26.75C22.0547 27.224 21.8724 27.625 21.5078 27.9531C21.1797 28.3177 20.7786 28.5 20.3047 28.5H6.30469C5.83073 28.5 5.41146 28.3177 5.04688 27.9531C4.71875 27.625 4.55469 27.224 4.55469 26.75V12.75H8.05469V21.5H18.5547ZM35.7812 8.26562C36.1458 8.84896 36.1641 9.45052 35.8359 10.0703C35.5078 10.6901 34.9974 11 34.3047 11H2.80469C2.11198 11 1.60156 10.6901 1.27344 10.0703C0.945312 9.45052 0.981771 8.84896 1.38281 8.26562L6.03125 1.26562C6.35938 0.755208 6.83333 0.5 7.45312 0.5H29.6562C30.276 0.5 30.75 0.755208 31.0781 1.26562L35.7812 8.26562ZM29.0547 27.625V12.75H32.5547V27.625C32.5547 27.8802 32.4635 28.0807 32.2812 28.2266C32.1354 28.4089 31.9349 28.5 31.6797 28.5H29.9297C29.6745 28.5 29.4557 28.4089 29.2734 28.2266C29.1276 28.0807 29.0547 27.8802 29.0547 27.625Z" fill="#0D943F"></path>
              </svg>
              <div className="text-textBlue text-xs font-[500] ml-2">
                  <span className="font-bold text-brandBlue">Free</span> Click &amp; Collect
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center w-full py-2">
              <span className="flex cursor-pointer" onClick={() => setToyfinderOpen(!toyfinderOpen)}>
              <span className="font-semibold text-brandBlue">TOY {toyfinderOpen && <br/>} FINDER</span>
              <span className={`${toyfinderOpen ? 'relative -left-4' : 'mr-1 ml-1'} rotate-[20deg]`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 15 15" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0C3.11929 0 2 1.11929 2 2.5V2.78571C2 3.23408 2.13327 3.65133 2.36235 4H1.5C0.671573 4 0 4.67157 0 5.5V6.5C0 7.32843 0.671573 8 1.5 8H7V4H8V8H13.5C14.3284 8 15 7.32843 15 6.5V5.5C15 4.67157 14.3284 4 13.5 4H12.6377C12.8667 3.65133 13 3.23408 13 2.78571V2.5C13 1.11929 11.8807 0 10.5 0C9.22684 0 8.11245 0.679792 7.5 1.69621C6.88755 0.679792 5.77316 0 4.5 0ZM8 4H10.7857C11.4563 4 12 3.45635 12 2.78571V2.5C12 1.67157 11.3284 1 10.5 1C9.11929 1 8 2.11929 8 3.5V4ZM7 4H4.21429C3.54365 4 3 3.45635 3 2.78571V2.5C3 1.67157 3.67157 1 4.5 1C5.88071 1 7 2.11929 7 3.5V4Z" fill="#C0DF16"/>
                <path d="M7 9H1V12.5C1 13.8807 2.11929 15 3.5 15H7V9Z" fill="#C0DF16"/>
                <path d="M8 15H11.5C12.8807 15 14 13.8807 14 12.5V9H8V15Z" fill="#C0DF16"/>
               </svg>
               </span>
               </span>
               {!toyfinderOpen && (
                <>
                  <div className="flex cursor-pointer" onClick={() => setToyfinderOpen(!toyfinderOpen)}>
                  <span className="font-semibold text-black ml-2 text-sm">Ideal play to guide their growth</span>
                  <span className="text-white rounded-full bg-brandBlue p-0.5 ml-2">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                  </div>
                </>
               )}
               <div
                className={`grid transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                  toyfinderOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0 hidden"
                }`}
              >
                <div>
                  <div className="flex items-center grid grid-cols-[repeat(4,1fr)0.5fr] gap-1 w-[calc(100%-60px)] md:w-2/3">
        <div ref={ageWrapperRef} className="relative">
          <button className={`relative z-[2] flex items-center text-gray-400 font-semibold border-[1px] border-gray-300 rounded-lg w-full justify-center py-1 transition-all ${showAge ? 'bg-white' : 'bg-yellow-100'}`} onClick={() => {setshowAge(!showAge)}}>
            <span>{ageValue}</span>
            <ChevronUp className={`h-4 w-4 rotate-180 mt-1 ml-1 transition-all ${showAge && 'rotate-[0]'}`} />
          </button>
          <div ref={ageWrapperRef}
            className={`absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out left-0 no-scrollbar w-full border-textBlue rounded-bl-lg rounded-br-lg text-center text-brandBlue font-semibold flex flex-col gap-0.5 ${
              showAge ? "max-h-[calc(100vh-250px)] overflow-y-auto border-[3px] top-[calc(100%-4px)] p-2" : "max-h-0 top-full"
            }`}
          >
            <button onClick={() => {setAge('0-3'); setAgeUrlString('0-3'); setshowAge(!showAge)}}>
              0-3
            </button>
            <button onClick={() => {setAge('3-5'); setAgeUrlString('3-5'); setshowAge(!showAge)}}>
              3-5
            </button>
            <button onClick={() => {setAge('5-8'); setAgeUrlString('5-8'); setshowAge(!showAge)}}>
              5-8
            </button>
            <button onClick={() => {setAge('8-11'); setAgeUrlString('8-11'); setshowAge(!showAge)}}>
              8-10
            </button>
            <button onClick={() => {setAge('11+'); setAgeUrlString('11-plus'); setshowAge(!showAge)}}>
              11+
            </button>
            <button onClick={() => {setAge('Big Kids'); setAgeUrlString('big-kids'); setshowAge(!showAge)}}>
              Adult
            </button>
          </div>
        </div>
        <div ref={typeWrapperRef} className="relative">
          <button className={`relative z-[2] flex items-center text-gray-400 font-semibold border-[1px] border-gray-300 rounded-lg w-full justify-center py-1 transition-all ${showType ? 'bg-white' : 'bg-yellow-100'}`} onClick={() => {setshowType(!showType)}}>
            <span>{typeValue}</span>
            <ChevronUp className={`h-4 w-4 rotate-180 mt-1 ml-1 transition-all ${showType && 'rotate-[0]'}`} />
          </button>
          <div ref={typeWrapperRef}
            className={`absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out left-0 no-scrollbar w-full border-textBlue rounded-bl-lg rounded-br-lg text-center text-brandBlue font-semibold flex flex-col gap-0.5 ${
              showType ? "max-h-[calc(100vh-250px)] overflow-y-auto border-[3px] top-[calc(100%-4px)] p-2" : "max-h-0 top-full"
            }`}
          >
            <button onClick={() => {setType('Arts'); setTypeUrlString('arts-and-crafts'); setshowType(!showType)}}>
              Arts
            </button>
            <button onClick={() => {setType('Games'); setTypeUrlString('games-and-puzzles'); setshowType(!showType)}}>
              Games
            </button>
            <button onClick={() => {setType('Dolls'); setTypeUrlString('dolls'); setshowType(!showType)}}>
              Dolls
            </button>
            <button onClick={() => {setType('Action'); setTypeUrlString('action-figures'); setshowType(!showType)}}>
              Action
            </button>
            <button onClick={() => {setType('Soft'); setTypeUrlString('plushies'); setshowType(!showType)}}>
              Soft
            </button>
            <button onClick={() => {setType('Cars'); setTypeUrlString('cars'); setshowType(!showType)}}>
              Cars
            </button>
            <button onClick={() => {setType('Garden'); setTypeUrlString('outdoor-toys'); setshowType(!showType)}}>
              Garden
            </button>
            <button onClick={() => {setType('Baby'); setTypeUrlString('pre-school-toys'); setshowType(!showType)}}>
              Baby
            </button>
          </div>
        </div>
        <div ref={priceWrapperRef} className="relative">
          <button className={`relative z-[2] flex items-center text-gray-400 font-semibold border-[1px] border-gray-300 rounded-lg w-full justify-center py-1 transition-all ${showPrice ? 'bg-white' : 'bg-yellow-100'}`} onClick={() => {setshowPrice(!showPrice)}}>
            <span>{priceValue}</span>
            <ChevronUp className={`h-4 w-4 rotate-180 mt-1 ml-1 transition-all ${showPrice && 'rotate-[0]'}`} />
          </button>
          <div ref={priceWrapperRef}
            className={`absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out left-0 no-scrollbar w-full border-textBlue rounded-bl-lg rounded-br-lg text-center text-brandBlue font-semibold flex flex-col gap-0.5 ${
              showPrice ? "max-h-[calc(100vh-250px)] overflow-y-auto border-[3px] top-[calc(100%-4px)] p-2" : "max-h-0 top-full"
            }`}
          >
            <button onClick={() => {setPrice('-£15'); setPriceUrlString('0-15'); setshowPrice(!showPrice)}}>
              -£15
            </button>
            <button onClick={() => {setPrice('£15+'); setPriceUrlString('15-30'); setshowPrice(!showPrice)}}>
              £15+
            </button>
            <button onClick={() => {setPrice('£30+'); setPriceUrlString('30-45'); setshowPrice(!showPrice)}}>
              £30+
            </button>
            <button onClick={() => {setPrice('45+'); setPriceUrlString('45-60'); setshowPrice(!showPrice)}}>
              £45+
            </button>
            <button onClick={() => {setPrice('£60+'); setPriceUrlString('60-75'); setshowPrice(!showPrice)}}>
              £60+
            </button>
            <button onClick={() => {setPrice('£75+'); setPriceUrlString('75'); setshowPrice(!showPrice)}}>
              £75+
            </button>
          </div>
        </div>
        <button 
          onClick={() => { navigate(`/category/?age=${ageUrlString}&type=${typeUrlString}&price=${priceUrlString}`); window.location.reload(false);}}
          className="shadow-md z-20 group text-white font-bold bg-brandRed rounded-full size-[40px] md:h-[40px] md:w-[59px] transition-all hover:bg-brandGreen hover:scale-105">
          <span className="block transition-all group-hover:rotate-[20deg]">
            <span className="inline-block rotate-[-10deg] text-lg">G</span>
            <span className="inline-block translate-y-[-2px] rotate-[-10deg] text-sm ml-[1.2px]">O</span>
            <span className="inline-block translate-y-[-2px] rotate-[5deg] text-[10px] ml-[2px]">!</span>
          </span>
        </button>
    
        <div className="flex cursor-pointer" onClick={() => setToyfinderOpen(!toyfinderOpen)}>
          <span className="text-white rounded-full bg-brandBlue p-0.5 ml-2">
            <X className="h-4 w-4" />
          </span>
        </div>
      </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex items-center justify-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 35 29" fill="none">
                  <path d="M34.125 19.75C34.5625 19.75 35 20.1875 35 20.625V22.375C35 22.8672 34.5625 23.25 34.125 23.25H31.5C31.5 26.1484 29.1484 28.5 26.25 28.5C23.3516 28.5 21 26.1484 21 23.25H14C14 26.1484 11.6484 28.5 8.75 28.5C5.85156 28.5 3.5 26.1484 3.5 23.25H2.625C1.14844 23.25 0 22.1016 0 20.625V3.125C0 1.70312 1.14844 0.5 2.625 0.5H20.125C21.5469 0.5 22.75 1.70312 22.75 3.125V5.75H25.1562C25.8125 5.75 26.5234 6.07812 27.0156 6.57031L32.4297 11.9844C32.9219 12.4766 33.25 13.1875 33.25 13.8438V19.75H34.125ZM8.75 25.875C10.1719 25.875 11.375 24.7266 11.375 23.25C11.375 21.8281 10.1719 20.625 8.75 20.625C7.27344 20.625 6.125 21.8281 6.125 23.25C6.125 24.7266 7.27344 25.875 8.75 25.875ZM26.25 25.875C27.6719 25.875 28.875 24.7266 28.875 23.25C28.875 21.8281 27.6719 20.625 26.25 20.625C24.7734 20.625 23.625 21.8281 23.625 23.25C23.625 24.7266 24.7734 25.875 26.25 25.875ZM30.625 14.5V13.8438L25.1562 8.375H22.75V14.5H30.625Z" fill="#0D943F"></path>
              </svg>
              <div className="text-textBlue text-xs font-[500] ml-2">
                  <span className="font-bold text-brandBlue">Free delivery</span> on orders over £39.99
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex items-center justify-center bg-black text-white text-xs py-2 h-full">
              Pay Later with <span className="font-bold mx-1">Klarna.</span> <span className="underline">Learn more</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex items-center justify-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 35 29" fill="none">
                  <path d="M34.125 19.75C34.5625 19.75 35 20.1875 35 20.625V22.375C35 22.8672 34.5625 23.25 34.125 23.25H31.5C31.5 26.1484 29.1484 28.5 26.25 28.5C23.3516 28.5 21 26.1484 21 23.25H14C14 26.1484 11.6484 28.5 8.75 28.5C5.85156 28.5 3.5 26.1484 3.5 23.25V16.25H11.8125C12.0312 16.25 12.25 16.0859 12.25 15.8125V14.9375C12.25 14.7188 12.0312 14.5 11.8125 14.5H0.4375C0.164062 14.5 0 14.3359 0 14.0625V13.1875C0 12.9688 0.164062 12.75 0.4375 12.75H13.5625C13.7812 12.75 14 12.5859 14 12.3125V11.4375C14 11.2188 13.7812 11 13.5625 11H2.1875C1.91406 11 1.75 10.8359 1.75 10.5625V9.6875C1.75 9.46875 1.91406 9.25 2.1875 9.25H15.3125C15.5312 9.25 15.75 9.08594 15.75 8.8125V7.9375C15.75 7.71875 15.5312 7.5 15.3125 7.5H0.4375C0.164062 7.5 0 7.33594 0 7.0625V6.1875C0 5.96875 0.164062 5.75 0.4375 5.75H3.5V3.125C3.5 1.70312 4.64844 0.5 6.125 0.5H20.125C21.5469 0.5 22.75 1.70312 22.75 3.125V5.75H25.1562C25.8125 5.75 26.5234 6.07812 27.0156 6.57031L32.4297 11.9844C32.9219 12.4766 33.25 13.1875 33.25 13.8438V19.75H34.125ZM8.75 25.875C10.1719 25.875 11.375 24.7266 11.375 23.25C11.375 21.8281 10.1719 20.625 8.75 20.625C7.27344 20.625 6.125 21.8281 6.125 23.25C6.125 24.7266 7.27344 25.875 8.75 25.875ZM26.25 25.875C27.6719 25.875 28.875 24.7266 28.875 23.25C28.875 21.8281 27.6719 20.625 26.25 20.625C24.7734 20.625 23.625 21.8281 23.625 23.25C23.625 24.7266 24.7734 25.875 26.25 25.875ZM30.625 14.5V13.8438L25.1562 8.375H22.75V14.5H30.625Z" fill="#0D943F"></path>
              </svg>
              <div className="text-textBlue text-xs font-[500] ml-2">
                  <span className="font-bold text-brandBlue">Next Day Delivery</span> if you order by 7pm
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default DeliveryStrip