import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  margin: "12px 12px",
});

export default function MyMenu() {
  return (
    <div className="navbar">
      <MyButton variant="contained" size="large" href="/">
        Home
      </MyButton>
      <MyButton variant="contained" size="large" href="/about">
        About Me
      </MyButton>
      <MyButton variant="contained" size="large" href="/blog">
        Blog
      </MyButton>
      <MyButton variant="contained" size="large" href="/wellnessAdvocacy">
        Wellness Guide
      </MyButton>
      <MyButton variant="contained" size="large" href="/yoga">
        Yoga
      </MyButton>
      <MyButton variant="contained" size="large" href="/theta">
        Theta
      </MyButton>
      <MyButton variant="contained" size="large" href="/podcast">
        Podcast
      </MyButton>
      <MyButton variant="contained" size="large" href="/contact">
        Contact
      </MyButton>
      <style jsx>{`
        .navbar {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
