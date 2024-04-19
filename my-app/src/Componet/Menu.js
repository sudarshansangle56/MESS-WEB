import React from 'react'
import CardMenu from './CardMenu'
import Navbar from './Navbar'
import Footer from './Footer'

function Menu() {
  return (
    <div>
        <Navbar/>

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
        <Footer/>
    </div>
  )
}

export default Menu
