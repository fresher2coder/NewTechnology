import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import LeftSideBar from "./components/layout/LeftSideBar";
import RightSideBar from "./components/layout/RightSideBar";
import UserProfile from "./components/props/UserProfile";
import Container from "./components/props/Container";
import Counter from "./components/state/Counter";
import MultiCounter from "./components/state/MultiCounter";
import Parent from "./components/props/propsMethod/Parent";
import UserDashboard from "./components/conditional_rendering/UserDashboard";
import ArrayList from "./components/list_rendering/ArrayList";
import ArrayList2 from "./components/list_rendering/demo/ArrayList2";
import ArrayListID from "./components/list_rendering/ArrayListID";
import ArrayListAuto from "./components/list_rendering/ArrayListAuto";
import ProfileForm from "./components/form_handling/ProfileForm";
import Profile from "./components/form_handling/Profile";
import Counters from "./components/useEffect/Counters";
// import CssStyleSheet from "./components/css/CssStyleSheet";
import CssModule from "./components/css/CSSModule";
import StyledComponent from "./components/css/StyledComponent";

function App() {
  return (
    <>
      {/* layout */}
      {/* <Header />
      <section className="main-content">
        <LeftSideBar />
        <Main />
        <RightSideBar />
      </section>
      <Footer /> */}

      {/* props  */}
      {/* <UserProfile
        name="Dineshkumar"
        age={34}
        email="sendmail2dk@gmail.com"
        address="Chennai"
      />
      <UserProfile
        name="Divya Dineshkumar"
        age={31}
        address="Greater Chennai"
      /> */}

      {/* props as children */}
      {/* <Container name="User Dashboard">
        <h1>Welcome to Dashboard</h1>
        <p>This area contains user information</p>
      </Container>
      <Container name="User Settings">
        <h1>Settings</h1>
        <p>Adjust your preferences here.</p>
      </Container> */}

      {/* state  */}
      {/* <Counter initialValue={0} incrementValue={1} />
      <Counter initialValue={10} incrementValue={10} />
      <Counter initialValue={100} incrementValue={100} /> */}

      {/* <MultiCounter /> */}

      {/* props as method */}
      {/* <Parent /> */}

      {/* conditional rendering */}
      {/* <UserDashboard isLoggedIn={false} /> */}

      {/* list rendering */}
      {/* <ArrayList />
      <ArrayListID />
      <ArrayListAuto /> */}

      {/* form handling  */}
      {/* <Profile /> */}

      {/* useEffect  */}
      {/* <Counters /> */}

      {/* css  */}
      {/* <CssStyleSheet /> */}
      {/* <CssModule /> */}
      <StyledComponent />
    </>
  );
}

export default App;
