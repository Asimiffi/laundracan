import React from "react";
import "./../App.css";
import { useState, useEffect } from "react";
import Data from "../components/data";
import { AiFillStar } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import map from './../images/map.png'

const Homepage = () => {
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(false);
  const faqclick = (id) => {
    setClicked(!clicked);
    setIndex(id);
  };
  

  return (
    <div>
     
      {/*------------------------------------Services-------------------------------------*/}
      <section id="services" className="py-3">
        <div className="row justify-content-center">
          {Data.slice(0, 3).map((card) => (
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card services-card border-light my-lg-5 py-lg-5">
                <img src={card.img} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-text">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*------------------------------------Offerings-------------------------------------*/}
      <section id="offerings">
        <div className="offerings-heading text-light my-lg-5 my-sm-3 my-md-4">
          <h4>{Data[3].title}</h4>
          <h4>{Data[3].desc}</h4>
        </div>
        <div className="row">
          {Data.slice(4, 12).map((offering) => (
            <div className="col-lg-3 col-md-4 col-sm-4 my-lg-5">
              <div className="offerings-card align-items-center d-flex flex-column">
                  <img
                    className="offerings-image"
                    src={offering.img}
                    alt=""
                  />
                <p>{offering.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*------------------------------------Reviews-------------------------------------*/}
      <section id="reviews">
        <div className="reviews mx-lg-5 px-lg-5 mb-5">
          <div className="row">
            <div className="col-12 justify-content-center d-flex my-4 py-lg-5">
              <h2>{Data[13].title}</h2>
            </div>
          </div>
              <div className="review-details px-5">
            {Data.slice(14, 18).map((review) => (
              <div className="py-2">
                <div className="review-top">
                  <h6 className="review-name">{review.name}</h6>
                  <p className="review-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                  <img
                    className="review-platform"
                    src={review.platform}
                    alt=""
                  />
                </div>
                <p>{review.date}</p>
                <p>{review.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      {/*------------------------------------Frequently Asked Questions-------------------------------------*/}
      <section
        id="faqs"
        style={{ minHeight: "110vh" }}
        className="d-flex align-items-center"
      >
        
        <div style={{ color: "#5C5C5C" }}>
          <h1 className="text-center my-lg-5">Frequently Asked Questions</h1>
          <div className="row">
            {Data.slice(19).map((faq, id) => (
              <div className="col-lg-6 col-sm-12 ps-5">
               
                  <h6 onClick={() => faqclick(id)} className="my-sm-2 my-lg-3 faqs">
                    {" "}
                    <span
                      style={{ color: "#C23F3E", fontWeight: "bold" }}
                    >
                      +
                    </span>{" "}
                    {faq.question}
                  </h6>
                  
                  {id === index && clicked && <p className="answer"> {faq.answer}</p>}
                
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*-----------------------------------Contacts-------------------------------------*/}
      <section
        id="contact"
        style={{
          maxHeight: "100vh",
          width:"auto",
          alignItems: "center",
          display: "flex",
        }}
        className="mx-5 py-5 my-5"
      >
          <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6">
        <div className="contact">
          <div className="location">
            <h4>Location</h4>
            <p>Mclver street, adjacent to Crescent Avenue SC 45601</p>
          </div>
          <div className="hours">
            <h4>Hours</h4>
            <p>Open every day from 8am-10pm (Last wash at 9pm)</p>
          </div>
          <div className="email">
            <h4>EMAIL</h4>
            <p>info@laundracan.com</p>
          </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-6">
            <img className="map-image" src={map} alt="" />
        </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
