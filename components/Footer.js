import React from "react";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import { styled } from "@material-ui/core/styles";

const MyLink = styled(Link)({
  padding: "25px 25px",
});

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <MyLink href="https://www.instagram.com/brynniebaby/?hl=en">
          <InstagramIcon fontSize="large" />
        </MyLink>
      </footer>
      <style jsx>{`
        .footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 4rem;
          border-top: 1px solid #ff8e53;
          padding: 15px;
        }
      `}</style>
    </div>
  );
}
