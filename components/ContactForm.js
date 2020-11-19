import React from "react";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles({
  root: {
    margin: "5px 10px",
    padding: "10px",
    width: "25ch",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: "120px",
  },
});

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [helpText, setHelpText] = useState("");
  const [instagram, setInstagram] = useState("");
  // const onSubmit = (data) => alert(JSON.stringify(data));
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={classes.root}
            name="Full Name"
            type="text"
            ref={register}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={classes.root}
            type="text"
            name="email"
            value={email}
            ref={register}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={classes.root}
            type="text"
            name="helpText"
            ref={register}
            value={helpText}
            onChange={(e) => setHelpText(e.target.value)}
            required
          />
          <input
            className={classes.root}
            type="text"
            name="instagram"
            value={instagram}
            ref={register}
            onChange={(e) => setInstagram(e.target.value)}
            required
          />
          <button type="submit" className="sub-btn">
            Submit!
          </button>
        </form>
      </Paper>
    </div>
  );
}
