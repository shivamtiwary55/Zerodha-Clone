import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return ( 
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          <div>
            <a 
              href={tryDemo} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>

            <a 
              href={learnMore} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginLeft: "50px" }}
            >
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          <div className="mt-3">
            <a 
              href={googlePlay} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/Media/Images/googlePlayBadge.svg" 
                alt="Get it on Google Play"
              />
            </a>

            <a 
              href={appStore} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/Media/Images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;