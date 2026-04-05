import React from 'react';

function Awards() {
  return ( 
    <div className='container mt-5'>
      <div className='row'>
        
        <div className='col-6 p-5'>
          <img 
            src="/Media/Images/largestBroker.svg"
            alt="Largest stock broker"
          />
        </div>

        <div className='col-6 p-5 mt-3'>
          <h1>Largest stock broker in India</h1>

          <p className='mb-5'>
            Over 2 million+ clients trust us for their trading and investment needs, making us one of the largest stock brokers in India. We provide a seamless platform with advanced tools, low costs, and reliable support to help investors grow their wealth.
          </p>

          <div className='row'>
            
            <div className='col'>
              <ul>
                <li><p>Future and option</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>

            <div className='col'>
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>

          </div>

          <img 
            src="/Media/Images/pressLogos.png"
            style={{ width: "80%" }}
            alt="Press logos"
          />

        </div>
      </div>
    </div>
  );
}

export default Awards;