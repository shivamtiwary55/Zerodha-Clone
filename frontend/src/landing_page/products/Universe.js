import React from 'react';

function Universe() {
  return ( 
    <div className="container mt-5">
      <div className="row text-center">
        
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 text-center">
          <img src="/Media/Images/zerodhaFundhouse.png" style={{ height: "40px" }} alt="Zerodha Fundhouse" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img src="/Media/Images/sensibullLogo.svg" style={{ height: "40px" }} alt="Sensibull" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img src="/Media/Images/streakLogo.png" style={{ height: "40px" }} alt="Streak" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img src="/Media/Images/smallcaseLogo.png" style={{ height: "40px" }} alt="Smallcase" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img src="/Media/Images/tijori.svg" style={{ height: "40px" }} alt="Tijori" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img src="/Media/Images/dittoLogo.png" style={{ height: "40px" }} alt="Ditto" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>

      </div>
    </div>
  );
}

export default Universe;