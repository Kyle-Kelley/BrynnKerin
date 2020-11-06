import React from "react";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";

export default function MobileNav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {
    margin: "15px",
  };

  return (
    <div className="navbar">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={style}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/about">About Me</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/blog">Blog</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/wellnessAdvocacy">Holistic Coaching</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/yoga">Yoga</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/theta">Theta</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/podcast">Podcasts</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/contact">Contact Me</Link>
        </MenuItem>
      </Menu>
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
