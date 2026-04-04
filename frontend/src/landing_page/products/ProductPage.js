import React from 'react';
import Hero from './Hero';

import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

import Footer from '../Footer';
import Navbar from '../Navbar';

function ProductPage() {
  return ( 
    <>
      <Navbar />

      <Hero/>

      <LeftSection 
        imageURL="/Media/Images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.zerodha.com/"
        learnMore="https://zerodha.com/products/kite/"
        googlePlay="https://play.google.com/store"
        appStore="https://www.apple.com/app-store/"
      />

      <RightSection
        imageURL="/Media/Images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://zerodha.com/products/console/"
      />

      <LeftSection 
        imageURL="/Media/Images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com/"
        learnMore="https://zerodha.com/products/coin/"
        googlePlay="https://play.google.com/store"
        appStore="https://www.apple.com/app-store/"
      />
      
      <RightSection
        imageURL="/Media/Images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://kite.trade/"
      />
        
      <LeftSection 
        imageURL="/Media/Images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="https://zerodha.com/varsity/"
        learnMore="https://zerodha.com/varsity/"
        googlePlay="https://play.google.com/store"
        appStore="https://www.apple.com/app-store/"
      />

      <p className='text-center mt-5 mb-5'>
        Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>
        
      <Universe/>

      <Footer />
    </>
  );
}

export default ProductPage;