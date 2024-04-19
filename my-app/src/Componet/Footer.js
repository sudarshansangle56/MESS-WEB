import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
  return (
    <div className="Footer12">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Home</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Features</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Pricing</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">FAQs</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">About</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Home</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Features</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Pricing</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">FAQs</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">About</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Home</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Features</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Pricing</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">FAQs</Link></li>
              <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">About</Link></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
