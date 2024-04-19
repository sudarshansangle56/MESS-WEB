import React from "react";
import Navbar from "../Componet/Navbar";
import CardMenu from "../Componet/CardMenu";
import Footer from "../Componet/Footer";
import Card from "../Componet/Card";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="parta">
        <div className="parta1">
          <h1>
            India's First <br />
            Customized Online <br />
            Tiffin Service
          </h1>
          <p>
            Order a healthy and well-balanced meal designed by our <br /> expert
            dietician in any part of Mumbai. <br /> It’s all homemade… "Ghar ka
            khana just the way you want."
          </p>
          <button>order Now</button>
        </div>
        <div className="parta2">
          <Card />
        </div>
      </div>
      <div className="partb">
        <div className="partb1">
          <h1>MEAL PLANS</h1>
          <h3>
            Affordable * Calorie-counted * Daily Changing Menu * Customizable
            Weekly/Monthly Plans
          </h3>
          <p>
            Our meals are a healthy combination of whole grains, veggies, pulses
            and spices and provide essential nutrients like proteins,
            carbohydrates, fibre etc without compromising on taste.
          </p>
        </div>
        <div className="partb2">
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="MONDAY"
            Headl="ur meals are a healthy combination of whole grains, veggies, pulses and spices and provide essential nutrients like proteins, carbohydrates, fibre etc without compromising on taste."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Tuesday"
            Headl="ur meals are a healthy combination of whole grains, veggies, pulses and spices and provide essential nutrients like proteins, carbohydrates, fibre etc without compromising on taste."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Wednesday"
            Headl="ur meals are a healthy combination of whole grains, veggies, pulses and spices and provide essential nutrients like proteins, carbohydrates, fibre etc without compromising on taste."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Thursday"
            Headl="ur meals are a healthy combination of whole grains, veggies, pulses and spices and provide essential nutrients like proteins, carbohydrates, fibre etc without compromising on taste."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Friday"
            Headl="ur meals are a healthy combination of whole grains, veggies, pulses and spices and provide essential nutrients like proteins, carbohydrates, fibre etc without compromising on taste."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Saturday"
            Headl="ur meals are a healthy combination of whole grains, veggies, pulses and spices and provide essential nutrients like proteins, carbohydrates, fibre etc without compromising on taste."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Sunday"
            Headl="ur meals are a healthy combination of whole grains, veggies, pulses and spices and provide essential nutrients like proteins, carbohydrates, fibre etc without compromising on taste."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Holiday"
            Headl="ur meals are a healthy combination of whole grains, veggies, pulses and spices and provide essential nutrients like proteins, carbohydrates, fibre etc without compromising on taste."
          />
        </div>
      </div>
      <div className="both2">
        <h2>Location & Payment</h2>
      </div>
      <div className="partc">
        <div className="location">
          <h1>Location</h1>
          <img
            src="/IMAGES/Screenshot 2024-03-13 195411.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="payment">
          <h1>Payment</h1>
          <img
            src="/IMAGES/Screenshot 2024-03-13 200112.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
