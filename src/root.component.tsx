import { useState } from "react";

export default function Root(props) {
  const [title, setTitle] = useState(props.name);

  const onClick = () => {
    setTitle("Clicked");
  };
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={onClick}>Change Title</button>
      <br />
      <br />
      <a href="/">Return To Root App</a>
    </section>
  );
}
