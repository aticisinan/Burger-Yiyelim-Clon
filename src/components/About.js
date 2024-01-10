import React from "react";
import "../styles/About.css";
import BannerImage from "../assets/banneryeni.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque
          beatae cumque, magnam provident veniam? Ab dignissimos reprehenderit,
          similique aperiam saepe in facilis vero natus iusto praesentium
          suscipit quidem sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex eaque beatae cumque, magnam provident veniam? Ab
          dignissimos reprehenderit, similique aperiam saepe in facilis vero
          natus iusto praesentium suscipit quidem sit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ex eaque beatae cumque, magnam
          provident veniam? Ab dignissimos reprehenderit, similique aperiam
          saepe in facilis vero natus iusto praesentium suscipit quidem sit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque
          beatae cumque, magnam provident veniam? Ab dignissimos reprehenderit,
          similique aperiam saepe in facilis vero natus iusto praesentium
          suscipit quidem sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex eaque beatae cumque, magnam provident veniam? Ab
          dignissimos reprehenderit, similique aperiam saepe in facilis vero
          natus iusto praesentium suscipit quidem sit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ex eaque beatae cumque, magnam
          provident veniam? Ab dignissimos reprehenderit, similique aperiam
          saepe in facilis vero natus iusto praesentium suscipit quidem sit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque
          beatae cumque, magnam provident veniam? Ab dignissimos reprehenderit,
          similique aperiam saepe in facilis vero natus iusto praesentium
          suscipit quidem sit.
        </p>
      </div>
    </div>
  );
}

export default About;
