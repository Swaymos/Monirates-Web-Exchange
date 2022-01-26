import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import react from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import style from './styling/styles.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Components Import

import DashboardLayout from './components/DashboardLayout';
import WelcomeMessage from "./components/WelcomeMessage";
import SelectCurrency from "./components/SelectCurrency";
import ActionCarousel from "./components/CurrencyCarousel";
import Carousel from "./components/ActionCarousel";
import StickyHeadTable from "./components/Table";
import ProfileHint from "./components/ProfileHint";
import ProfileToolTip from "./components/ProfileToolTip";

// Pages Import

import Withdraw from "./pages/MakeWithdraw";
import ConfirmBankDetails from "./pages/WithdrawConfirmation";
import MyWallet from "./pages/MyWallet";
import Offers from "./pages/Offers";
import MyTransaction from "./pages/MyTransaction";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordResetLink from "./pages/PasswordResetLink";
import CreateNewPassword from "./pages/CreateNewPassword";
import PasswordCreated from "./pages/PasswordCreated";
import BuyRequest from "./pages/BuyRequest";
import SellRequest from "./pages/SellRequest";
import FundWallet from "./pages/FundWallet";
import MakeTransfer from "./pages/MakeTransfer";
import TransferConfirmation from "./pages/TransferConfirmation";
import MyProfile from "./pages/MyProfile";
import MyRequest from "./pages/MyRequest";
import NairaWallet from "./pages/NairaWallet";
import DollarWallet from "./pages/DollarWallet";
import WithdrawSuccess from "./pages/WithdrawSuccess";


const theme = createTheme({
  typography: {
    fontFamily:"Inter",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  },
  palette: {
    type: 'light',
    primary: {
      main: '#ff2e63',
      light: '#192259',
      dark: '#0e164d',
    },
    secondary: {
      main: '#f50057',
      light: 'rgba(247,51,120,0)',
    },
    text: {
      primary: '#0E164D',
      secondary: '#0E164D',
      disabled: '#9DA0B8',
      hint: '#FF2E63',
    },
    divider: '#9DA0B8',
  },
  typography: {
    fontFamily: 'inter',
  }
});

export default function App (){
  return(
    <ThemeProvider theme={theme}>
        <Router>
      <Switch>
        <Route path="/welcome">
          <DashboardLayout >
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <Typography>Welcome</Typography>
          </Breadcrumbs>
            <WelcomeMessage />
            <SelectCurrency />
          </DashboardLayout>
        </Route>
        <Route exact path="/">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <Typography>Home</Typography>
          </Breadcrumbs>
           <ProfileHint />
          <ActionCarousel />
          <Carousel />
          <StickyHeadTable />
          <ProfileToolTip />
          </DashboardLayout>
        </Route>
        <Route path="/add-wallet">
          <DashboardLayout >
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>Add Wallet</Typography>
          </Breadcrumbs>
            <SelectCurrency />
          </DashboardLayout>
        </Route>
        <Route path="/my-profile">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>My Profile</Typography>
          </Breadcrumbs>
            <MyProfile />
          </DashboardLayout>
        </Route>
        <Route path="/transfer-confirmation">
          <DashboardLayout>
            <TransferConfirmation />
          </DashboardLayout>
        </Route>
        <Route path="/make-transfer">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>Make Transfer</Typography>
          </Breadcrumbs>
            <MakeTransfer />
          </DashboardLayout>
        </Route>
        <Route path="/make-withdraw">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>Withdraw</Typography>
          </Breadcrumbs>
            <Withdraw />
          </DashboardLayout>
        </Route>
        <Route path="/withdraw-successful">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>Withdraw Successful</Typography>
          </Breadcrumbs>
            <WithdrawSuccess />
            <ActionCarousel />
          <Carousel />
          <StickyHeadTable />
          </DashboardLayout>
        </Route>
        <Route path="/fund-wallet">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>Fund Wallet</Typography>
          </Breadcrumbs>
            <FundWallet />
          </DashboardLayout>
        </Route>
        <Route path="/confirm-bank-details">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Link underline="hover" href="/">
                      Make Withdraw
              </Link>
              <Typography>Confirm Details</Typography>
          </Breadcrumbs>
            <ConfirmBankDetails />
          </DashboardLayout>
        </Route>
        <Route path="/my-wallet">
          <DashboardLayout >
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>My Wallet</Typography>
          </Breadcrumbs>
          <MyWallet />
          </DashboardLayout>
        </Route>
        <Route path="/naira-wallet">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Link underline="hover" to="/my-wallet">
                      My Wallet
              </Link>
              <Typography>Naira Wallet</Typography>
          </Breadcrumbs>
            <NairaWallet />
          <Carousel />
          <StickyHeadTable />
          </DashboardLayout>
        </Route>
        <Route path="/dollar-wallet">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Link underline="hover" to="/my-wallet">
                      My Wallet
              </Link>
              <Typography>Dollar Wallet</Typography>
          </Breadcrumbs>
            <DollarWallet />
          <Carousel />
          <StickyHeadTable />
          </DashboardLayout>
        </Route>
        <Route path="/buy-request">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>Buy Request</Typography>
          </Breadcrumbs>
            <BuyRequest />
          </DashboardLayout>
        </Route>
        <Route path="/sell-request">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>Sell Request</Typography>
          </Breadcrumbs>
            <SellRequest />
          </DashboardLayout>
        </Route>
        <Route path="/my-request">
          <DashboardLayout>
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" exact to="/">
                      Home
              </NavLink>
              <Typography>My Request</Typography>
          </Breadcrumbs>
            <MyRequest />
          </DashboardLayout>
        </Route>
        <Route path="/offers">
          <DashboardLayout >
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" to="/">
                      Home
              </NavLink>
              <Typography>Offers</Typography>
          </Breadcrumbs>
          <Offers />
          </DashboardLayout>
        </Route>
        <Route path="/my-transaction">
          <DashboardLayout >
          <Breadcrumbs aria-label="breadcrumb" className={style.breadCrumbNavigation}>
              <NavLink underline="hover" to="/">
                      Home
              </NavLink>
              <Typography>Transaction</Typography>
          </Breadcrumbs>
          <MyTransaction />
          </DashboardLayout>
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/password-reset">
          <PasswordResetLink />
        </Route>
        <Route path="/create-password">
          <CreateNewPassword />
        </Route>
        <Route path="/password-created">
          <PasswordCreated/>
        </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
