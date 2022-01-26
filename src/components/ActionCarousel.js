
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
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaidIcon from "@mui/icons-material/Paid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import SendIcon from "@mui/icons-material/Send";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import '../styling/ActionCarousel.css';
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
    render() {
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div>
              <h4 className="carousel-header">What would you like to do?</h4>
            <Slider {...settings}>
              <div className="building-block">
                <NavLink className="action-block" to="/buy-request">
                    <div className="action-block-content">
                        <LocalMallIcon sx={{fontSize:60}}/>
                        <h4>Buy</h4>
                    </div>
                </NavLink>
              </div>
              <div className="building-block">
              <NavLink className="action-block" to="/sell-request">
                    <div className="action-block-content">
                        <PaidIcon sx={{fontSize:60}}/>
                        <h4>Sell</h4>
                    </div>
                </NavLink>
              </div>
              <div className="building-block">
              <NavLink className="action-block" to="/offers">
                    <div className="action-block-content">
                        <VisibilityIcon sx={{fontSize:60}}/>
                        <h4>View Offers</h4>
                    </div>
                </NavLink>
              </div>
              <div className="building-block">
                <NavLink className="action-block" to="/my-transaction">
                        <div className="action-block-content">
                            <ReceiptLongIcon sx={{fontSize:60}}/>
                            <h4>Transactions</h4>
                        </div>
                    </NavLink>
              </div>
              <div className="building-block">
              <NavLink className="action-block" to="/my-request">
                    <div className="action-block-content">
                        <NotificationsIcon sx={{fontSize:60}}/>
                        <h4>My Request</h4>
                    </div>
                </NavLink>
              </div>
              <div className="building-block">
              <NavLink className="action-block" to="/my-wallet">
                    <div className="action-block-content">
                        <AccountBalanceWalletIcon sx={{fontSize:60}}/>
                        <h4>My Wallet</h4>
                    </div>
                </NavLink>
              </div>
              <div className="building-block">
              <NavLink className="action-block" to="/fund-wallet">
                    <div className="action-block-content">
                        <AddCircleIcon sx={{fontSize:60}}/>
                        <h4>Fund Wallet</h4>
                    </div>
                </NavLink>
              </div>
              <div className="building-block">
              <NavLink className="action-block" to="/make-withdraw">
                    <div className="action-block-content">
                        <AssignmentReturnedIcon sx={{fontSize:60}}/>
                        <h4>Withdraw Fund</h4>
                    </div>
                </NavLink>
              </div>
            </Slider>
          </div>
        );
      }
  }