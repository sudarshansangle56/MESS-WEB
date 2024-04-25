import React from "react";
import Navbar from "../Componet/Navbar";
import CardMenu from "../Componet/CardMenu";
import Footer from "../Componet/Footer";



function Home() {
  return (
    <div>
      <Navbar />

      <div className="parta">
        <div className="parta1">
          <h1>
             First <br />
            Customized Online <br />
            Tiffin Service
          </h1>
          <p>
            Order a healthy and well-balanced meal designed by our <br /> expert
            dietician in any part of Mumbai. <br /> It’s all homemade… "Ghar ka
            khana just the way you want."
          </p>
          <button>Show More</button>
        </div>
        <div className="parta2">
         <img src="/IMAGES/Screenshot 2024-03-08 230039.png" alt="" srcset="" />
        </div>
      </div>
 
      <div className="partb">
        <div className="partb1">
          <h1>MEAL PLANS</h1>
          <h3>
            Affordable Calorie-counted Daily Changing Menu  Customizable
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
            Headl="Our meals offer a nutritious blend of whole grains, vegetables, pulses, and spices, providing essential nutrients such as proteins, carbohydrates, and fiber, all while ensuring delightful flavors."
          />
          <CardMenu
            link="https://www.shutterstock.com/image-photo/indian-vegetarian-lunch-box-tiffin-260nw-1781289758.jpg"
            title="Tuesday"
            Headl="Indulge in our flavorful meals crafted with a balanced mix of wholesome ingredients, including whole grains, fresh vegetables, and aromatic spices, ensuring a nourishing."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Wednesday"
            Headl="Experience the perfect harmony of taste and nutrition with our meals, carefully prepared with a rich combination of whole grains, crisp veggies, and savory spices, delivering essential."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Thursday"
            Headl="Savor the goodness of our meals, thoughtfully curated with a medley of whole grains, vibrant vegetables, hearty pulses, and aromatic spices, providing a nutritious feast for your senses."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Friday"
            Headl="Enjoy the goodness of nature in every meal, as our dishes are meticulously crafted with the finest whole grains, farm-fresh vegetables, wholesome pulses, and flavorful spices, offering a nutritious culinary journey."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Saturday"
            Headl="Delight in the natural goodness of each meal, with our dishes expertly crafted using top-quality whole grains, fresh-from-the-farm vegetables, nutritious pulses, and fragrant spices, ensuring a wholesome dining experience."
          />
          <CardMenu
            link="/IMAGES/Screenshot 2024-03-08 230039.png"
            title="Sunday"
            Headl="Savor the richness of nature in every dish, as our meals are carefully prepared with premium whole grains, farm-fresh vegetables, wholesome pulses, and aromatic spices, providing a nourishing culinary adventure."
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
