import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const navbar = ({isVisible}) => {
  console.log(isVisible);
    return (
    <div>
      <section id='header'>
        <nav className= "navbar navbar-expand-lg navbar-dark" >
        <div className="container-fluid navbar-extended">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse oncollapse mx-5" id="navbarSupportedContent">
             <ul className={isVisible ? "scroll" : "navbar-nav m-auto mb-lg-0"}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{color:'white'}} href="/">HOME</a>
              </li>
              <li className="nav-item">
              <Link to="/#services"  style={{color:'white'}} className="nav-link">SERVICES</Link>
              </li>
              <li className="nav-item">
              <Link to="/#offerings"  style={{color:'white'}} className="nav-link">AMENITIES</Link>
              </li>
              <li className="nav-item">
              <Link to="/#reviews"  style={{color:'white'}} className="nav-link">TESTIMONIALS</Link>
              </li>
              <li className="nav-item">
              <Link to="/#faqs"  style={{color:'white'}} className="nav-link">FAQ</Link>
              </li>
              <li className="nav-item">
              <Link to="/#contact"  style={{color:'white'}} className="nav-link">CONTACT</Link>
              </li>
            </ul>
           </div>
        </div>
        </nav>
           
           <div className='info'>
             <h3>MODERN & UPSCALE LAUNDRACAN</h3>
            <h1 className='main-info'>The Best Place to do Your Laundry</h1>        
            <p><button className='btn-header'>
            <Link style={{color:'#5C5C5C', textDecoration:'none'}} to="/#contact">VIEW LOCATION</Link>
              </button></p>
         </div>         
         </section>
    </div>
    )
}

export default navbar
