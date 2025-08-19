import Image from "next/image";
import starIcon from "../assets/images/icon-star.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg"
import React from "react";

const Card = () => {
  return (
    <div className="mx-auto bg-white h-[565px] rounded-[3%] w-full p-[40px]">
      <header className="flex flex-row items-center gap-6 w-full mb-[32px]">
        <Image src={starIcon} alt="Star icon" width={40} height={40} />
        <h1 className="faq__title">FAQs</h1>
      </header>
      <div className="faq__list">


        <div className="faq__item">
          <div className="faq__question--container">
            <div className="faq__question flex flex-row items-center gap-6 w-full justify-between pb-[24px]">
              <h2 className="text-[#301534] text-[18px] leading-[21px] font-bold">
                What is Frontend Mentor, and how will it help me?
              </h2>
              <Image src={minusIcon} alt="Minus icon" width={40} height={40} />
            </div>
            <div className="faq__answer pb-[24px]">
                <p className="text-[#8B6990] text-[16px] leading-[24px]">Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. </p>
            </div>
          </div>
          <div className="w-full border-t border-gray-300 mb-[24px]"></div>
        </div>


        <div className="faq__item">
          <div className="faq__question--container">
            <div className="faq__question flex flex-row items-center gap-6 w-full justify-between pb-[24px]">
              <h2 className="text-[#301534] text-[18px] leading-[21px] font-bold">
                Is Frontend Mentor free?
              </h2>
              <Image src={plusIcon} alt="Minus icon" width={40} height={40} />
            </div>
            <div className="faq__answer pb-[24px]">
                <p className="text-[#8B6990] text-[16px] leading-[24px]">temporary</p>
            </div>
          </div>
          <div className="w-full border-t border-gray-300 mb-[24px]"></div>
        </div>


        <div className="faq__item">
          <div className="faq__question--container">
            <div className="faq__question flex flex-row items-center gap-6 w-full justify-between pb-[24px]">
              <h2 className="text-[#301534] text-[18px] leading-[21px] font-bold">
                Can I use Frontend Mentor projects in my portfolio?
              </h2>
              <Image src={plusIcon} alt="Minus icon" width={40} height={40} />
            </div>
            <div className="faq__answer pb-[24px]">
                <p className="text-[#8B6990] text-[16px] leading-[24px]">temporary</p>
            </div>
          </div>
          <div className="w-full border-t border-gray-300 mb-[24px]"></div>
        </div>

        <div className="faq__item">
          <div className="faq__question--container">
            <div className="faq__question flex flex-row items-center gap-6 w-full justify-between pb-[24px]">
              <h2 className="text-[#301534] text-[18px] leading-[21px] font-bold">
                How can I get help if I'm stuck on a challenge?
              </h2>
              <Image src={plusIcon} alt="Minus icon" width={40} height={40} />
            </div>
            <div className="faq__answer pb-[24px]">
                <p className="text-[#8B6990] text-[16px] leading-[24px]">temporary</p>
            </div>
          </div>
          <div className="w-full border-t border-gray-300 mb-[24px]"></div>
        </div>
            
        
      </div>
    </div>
  );
};

export default Card;
