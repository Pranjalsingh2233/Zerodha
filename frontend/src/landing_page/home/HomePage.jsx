import React from "react";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../../components/OpenAccount";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        "https://zerodha-6yfr.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      if (status) {
        console.log(user);
      } else {
        await axios.post(
          "https://zerodha-6yfr.onrender.com/logout",
          {},
          { withCredentials: true }
        );
        toast.error("You should login first", {
          position: "bottom-left",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <ToastContainer />
    </>
  );
}

export default HomePage;
