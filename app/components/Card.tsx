"use client";

import Image from "next/image";
import starIcon from "../assets/images/icon-star.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import React, { useState } from "react";

const Card = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // Start with first item open which is index 0

  // Function to toggle an FAQ item open/closed
  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newItems = prev.includes(index)
        ? prev.filter((i) => i !== index) // Remove from array (close) when using the toggle button
        : [...prev, index]; // Add to array (open) when using the toggle button
      return newItems;
    });
  };

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      // Enter or Spacebar
      event.preventDefault(); // Prevent default scrolling behavior for spacebar
      toggleItem(index);
    }
  };

  // Helper function to render each FAQ item
  const renderFaqItem = (
    index: number,
    question: string,
    answer: string,
    isLast: boolean = false //because last faq__item shouldn't have a line below it.
  ) => {
    const isOpen = openItems.includes(index);

    return (
      <div key={index} className="faq__item">
        <div className="faq__question--container">
          {/* Clickable question area */}
          <div
            className="faq__question flex flex-row items-center gap-6 w-full justify-between pb-[24px] cursor-pointer group focus:outline-none "
            onClick={() => {
              toggleItem(index);
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            tabIndex={0} // Makes the div focusable
            role="button" // Tells screen readers this is a button
            aria-expanded={isOpen} // Tells screen readers if it's expanded
            aria-controls={`faq-answer-${index}`} // Links to the answer element
          >
            <h2 className="text-[#301534] text-[18px] max-[375px]:text-[16px] leading-[21px] font-bold group-hover:text-[#AD28EB] group-focus:text-[#AD28EB] transition-colors duration-100">
              {question}
            </h2>
            {/* Show minus icon if open, plus icon if closed */}
            <Image
              src={isOpen ? minusIcon : plusIcon}
              alt={isOpen ? "Minus icon" : "Plus icon"}
              width={30}
              height={30}
            />
          </div>

          {/* Answer that appears/disappears with smooth animation */}
          <div
            id={`faq-answer-${index}`} // ID for aria-controls
            className={`faq__answer overflow-hidden transition-all duration-200 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 pb-[24px]" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#8B6990] text-[16px] max-[375px]:text-[14px] leading-[24px]">
              {answer}
            </p>
          </div>
        </div>
        {/* Conditionally render border - only if it's NOT the last item */}
        {!isLast && (
          <div className="w-full border-t border-gray-300 mb-[24px]"></div>
        )}
      </div>
    );
  };

  // Single return statement for the main component
  return (
    // Update the main container div:
    <div className="mx-auto bg-white min-h-[565px] rounded-[3%] w-full max-w-none max-[375px]:max-w-[327px] pt-[40px] max-[375px]:pt-[24px] pr-[40px] max-[375px]:pr-[24px] pb-[0px] pl-[40px] max-[375px]:pl-[24px]">
      <header className="flex flex-row items-center gap-6 w-full mb-[32px]">
        <Image
          src={starIcon}
          alt="Star icon"
          width={40}
          height={40}
          className="w-10 h-10 max-[375px]:w-6 max-[375px]:h-6"
        />
        <h1 className="faq__title">FAQs</h1>
      </header>

      <div className="faq__list">
        {renderFaqItem(
          0,
          "What is Frontend Mentor, and how will it help me?",
          "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
          false
        )}

        {renderFaqItem(
          1,
          "Is Frontend Mentor free?",
          "Yes, Frontend Mentor offers both free and premium challenges. Free challenges provide access to basic projects and community features.",
          false
        )}

        {renderFaqItem(
          2,
          "Can I use Frontend Mentor projects in my portfolio?",
          "Absolutely! Frontend Mentor projects are designed to be portfolio pieces. They provide realistic practice and demonstrate your coding skills to potential employers.",
          false
        )}

        {renderFaqItem(
          3,
          "How can I get help if I'm stuck on a challenge?",
          "Frontend Mentor has an active community on Discord and Slack where you can ask questions. You can also check out solutions from other developers for inspiration.",
          true
        )}
      </div>
    </div>
  );
};

export default Card;
