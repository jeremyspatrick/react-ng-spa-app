import React from "react";
import App from "./App";

export default function Root(props) {
  return (
    <section style={{ marginTop: 100, backgroundColor: "yellow" }}>
      <App name="Testapp" />
    </section>
  );
}

