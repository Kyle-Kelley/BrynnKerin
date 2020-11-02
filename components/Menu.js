import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import styles from "./Menu.module.css";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  margin: "12px 12px",
});

//button color linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)

export default function MyMenu() {
  return (
    <div className={styles.navbar}>
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
    </div>
  );
}

// export default function MyMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="menu">
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MenuIcon fontSize="large" />
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>
//           <Link href="/">Home</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link href="/about">About Me</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link href="/blog">Blog</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link href="/yoga">Yoga</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link href="/wellnessAdvocacy">Wellness Advocacy</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link href="/theta">Theta Healing</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link href="/upcoming">Upcoming</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link href="/podcast">Podcasts</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link href="/contact">Contact</Link>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
