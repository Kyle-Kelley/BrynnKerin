import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#87ad91",
    margin: "12px 24px",
    border: "1px solid #d4af37",
    borderRadius: "8px",
  },
});

export default function DesktopNav() {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
        href="/"
      >
        Home
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
        href="/about"
      >
        About Me
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
        href="/blog"
      >
        Blog
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
        href="/wellnessAdvocacy"
      >
        Holistic Coaching
      </Button>

      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
        href="/yoga"
      >
        Yoga
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
        href="/theta"
      >
        Theta
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
        href="/podcast"
      >
        Podcasts
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
        href="/contact"
      >
        Contact
      </Button>
    </div>
  );
}
