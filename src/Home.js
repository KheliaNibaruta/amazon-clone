import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img 
            className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
            alt=''/>

            <div className="home__row">
              <Product 
              title='The lean startup' 
              price={29.99} 
              image='https://pngimg.com/uploads/coffee_beans/coffee_beans_PNG97303.png' 
              rating={5}
              />

              <Product 
              id="49538094"
              title='Café 100% robusta' 
              price={29.99} 
              image='https://pngimg.com/uploads/coffee_beans/coffee_beans_PNG97303.png' 
              rating={3}
              />

            </div>

            <div className="home__row">
              <Product 
              id="49538094"
              title="Café arabica Brésil"
              price={239.0}
              rating={4}
              image='https://pngimg.com/uploads/coffee_beans/coffee_beans_PNG9284.png'
              />
              <Product 
              id="49538094"
              title="Café robusta Guatemala"
              price={239.0}
              rating={4}
              image='https://pngimg.com/uploads/coffee_beans/coffee_beans_PNG9284.png' 
              />
              <Product 
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image='https://pngimg.com/uploads/coffee_beans/coffee_beans_PNG9284.png'
              />
            </div>

            <div className="home__row">
            <Product 
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image='https://pngimg.com/uploads/coffee_beans/coffee_beans_PNG97304.png'
              />
            </div>

        </div>
    </div>
  )
}

export default Home;