import React from "react";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";
//import styles from '../styles/Home.module.css'

const MyPaper = styled(Paper)({
  background: "#fffdd0",
  width: "85vw",
  height: "85vh",
  margin: "50px auto",
  borderRadius: "10px",
  textAlign: "center",
});

export default function Home() {
  return (
    <div>
      <MyPaper>
        <h1>Hello I'm Brynn Suckas!</h1>
      </MyPaper>

      <style jsx global>{`
        body {
          background: #038a2d;
        }
      `}</style>
    </div>
  );
}
