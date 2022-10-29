import React, { useEffect, useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [intervalId, setIntervalId] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevCounter) =>
        prevCounter == dataSlider.length ? 1 : prevCounter + 1
      );
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(()=>{

  //    const idx = slideIndex;
  //    const fnn=(idx)=>{
  //     if (idx === dataSlider.length) {
  //          setSlideIndex(1)
  //        } else {
  //         setSlideIndex(idx+1);
  //        }

  //    }

  // fnn(idx);

  // },[2000])

  //   const autoSlide=()=>{
  //     if(intervalId)
  //     {
  //         clearInterval(intervalId);
  //         setIntervalId(0);
  //         return;
  //     }

  //   const newIntervalId=setInterval(()=>{

  //     setSlideIndex(prevCount=>{
  //         if (prevCount === dataSlider.length) {
  //           return 1;
  //         } else {
  //           return prevCount + 1;
  //         }
  //     })
  //   },5000)
  //   setIntervalId(newIntervalId);
  // }

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <div className="conatiner">
              <img src={obj.url} alt="alt" />
              <div className={`banner${obj.id}`}>
                <div className="banner1d">
                  <h1>{obj.heading} </h1>
                  <hr className="hrb" />
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, facilis!
                  </h2>
                  <h1>SOLAR MAINTAINANCE SERVICE</h1>
                  <p>Starting ₹100*</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
      {/* <button className="autoSlide-button" onClick={autoSlide}>
        {intervalId ? "Stop Slide Show" : "Start Slide Show"}
      </button> */}
    </div>
  );
}
