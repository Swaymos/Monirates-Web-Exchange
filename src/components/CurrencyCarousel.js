
import React, { Component } from "react";
import Slider from "react-slick";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import '../styling/CurrencyCarousel.css';
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {

    render() {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div >
            <h4 className="carousel-header">Your wallet</h4>
            <Slider {...settings}>
              <div className="building-block">
                <div className="wallet gradient-one">
                  <div className="currency">
                    <p>
                      <span><img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/></span>Dollar Wallet
                    </p>
                  </div>
                  <div className="currency-amount">$ 1,000</div>
                  <div className="wallet-id">Wallet ID: #MO3421</div>
                  <NavLink className="view-wallet" to="/dollar-wallet">
                    View Wallet
                    <span>
                      <ArrowCircleRightIcon />
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="building-block">
              <div className="wallet gradient-two">
                  <div className="currency">
                    <p>
                      <span><img alt="Nigerian Naira" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg"/></span>Naira Wallet
                    </p>
                  </div>
                  <div className="currency-amount">₦ 100,000</div>
                  <div className="wallet-id">Wallet ID: #MO3421</div>
                  <NavLink className="view-wallet" to="/naira-wallet">
                    View Wallet
                    <span>
                      <ArrowCircleRightIcon />
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="building-block">
                <div className="wallet gradient-three">
                    <div className="currency">
                      <p>
                        <span><img alt="Euros" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/EU.svg"/></span>Euro Wallet
                      </p>
                    </div>
                    <div className="currency-amount">€ 1,000</div>
                    <div className="wallet-id">Wallet ID: #MO3421</div>
                    <NavLink className="view-wallet" to="/euro-wallet">
                      View Wallet
                      <span>
                        <ArrowCircleRightIcon />
                      </span>
                    </NavLink>
                  </div>
              </div>
              <div className="building-block">
              <div className="wallet gradient-four" to="/pound-wallet">
                    <div className="currency">
                      <p>
                        <span><img alt="United Kingdom" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/></span>Pound Wallet
                      </p>
                    </div>
                    <div className="currency-amount">£ 1,000</div>
                    <div className="wallet-id">Wallet ID: #MO3421</div>
                    <NavLink className="view-wallet" to="/wallet">
                      View Wallet
                      <span>
                        <ArrowCircleRightIcon />
                      </span>
                    </NavLink>
                  </div>
              </div>
              <div className="building-block">
                <div className="add-new-wallet">
                <NavLink className="add-wallet" to="/add-wallet">
                  <span>
                    <AddCircleIcon sx={{ fontSize: 70 }} />
                  </span>
                  <h4>Add Wallet</h4>
                </NavLink>
              </div>
              </div>
            </Slider>
          </div>
        );
      }
  }