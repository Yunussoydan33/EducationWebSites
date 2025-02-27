import React from "react";
import HomeScroll from '../components/HomePage/HomeScroll';
import HomeWrite from "../components/HomePage//HomeWrite";
import HomeInfo from "../components/HomePage/HomeInfo";
import OnlineEducationInfo from "../components/HomePage/OnlineEducationInfo";
import HomePrice from "../components/HomePage/HomePrice";
import HomeContact from "../components/HomePage/HomeContact";

const Home = () => {
  return (
    <div className="container">
      <HomeScroll />
      <HomeWrite />
      <HomeInfo />
      <OnlineEducationInfo />
      <HomePrice />
      <HomeContact />
    </div>
  );
};

export default Home;