import React from "react";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";

const MyPaper = styled(Paper)({
  background: "beige",
  width: "85vw",
  height: "85vh",
  margin: "50px auto",
  borderRadius: "10px",
  textAlign: "center",
});

export default function Home({ posts }) {
  return (
    <div>
      <MyPaper>
        <h1>Hello I'm Brynn Suckas!</h1>
      </MyPaper>
    </div>
  );
}
