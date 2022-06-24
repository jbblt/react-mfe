import React, { useState } from "react";
import { functionAngular } from "@jbblt/angular-mfe";
export default function Root(props) {
  const [title, setTitle] = useState(props.name);

  const onClick = () => {
    setTitle(reactFunctionExported);
  };

  const onRazClick = () => {
    setTitle(props.name);
  };

  const onAngularClick = () => {
    functionAngular();
  };

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={onClick}>Change Title</button>
      <button onClick={onRazClick}>Reset Title</button>
      <button onClick={onAngularClick}>Call Angular Function</button>
      <br />
      <br />
      <a href="/">Return To Root App</a>
    </section>
  );
}
// Here declare data/Function want to share with other MFE.
export const reactFunctionExported = (optionalPassedString?: string) => {
  return "String Value From React Function";
};
