import React from "react";
import { type Config, Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { Button, Container } from "@mantine/core";
import editorConfig from "./editorconfig";

function Editor() {
  return (
    <Container w={"80dvw"}>
      <Puck data={data} config={editorConfig} onPublish={(data) => {
        console.log(data)
      }} />
    </Container>
  );
}

const data = {};



export default Editor;
