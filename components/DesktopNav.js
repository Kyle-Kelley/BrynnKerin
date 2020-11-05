import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

const MyButton = styled(Button)({
  background: "#87ad91",
  margin: "12px 24px",
  border: "1px solid #d4af37",
  borderRadius: "8px",
});

//"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"

export default function DesktopNav() {
  return (
    <div className="navbar">
      <MyButton variant="contained" color="primary" size="large" href="/">
        Home
      </MyButton>
      <MyButton variant="contained" color="primary" size="large" href="/about">
        About Me
      </MyButton>
      <MyButton variant="contained" color="primary" size="large" href="/blog">
        Blog
      </MyButton>
      <MyButton
        variant="contained"
        color="primary"
        size="large"
        href="/wellnessAdvocacy"
      >
        Coaching
      </MyButton>

      <MyButton variant="contained" color="primary" size="large" href="/yoga">
        Yoga
      </MyButton>
      <MyButton variant="contained" color="primary" size="large" href="/theta">
        Theta
      </MyButton>
      <MyButton
        variant="contained"
        color="primary"
        size="large"
        href="/podcast"
      >
        Podcasts
      </MyButton>
      <MyButton
        variant="contained"
        color="primary"
        size="large"
        href="/contact"
      >
        Contact
      </MyButton>
      <style jsx>{`
        .navbar {
          text-align: center;
          justify-content: center;
          display: flex;
        }
      `}</style>
    </div>
  );
}
