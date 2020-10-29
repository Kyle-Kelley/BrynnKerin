import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

export default function MyMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
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
          <Link href="/yoga">Yoga</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/wellnessAdvocacy">Wellness Advocacy</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/theta">Theta Healing</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/upcoming">Upcoming</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/podcast">Podcasts</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
