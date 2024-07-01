import { useState } from "react";

function Task3() {
  const [text, setText] = useState("");

  return (
    <form>
      <input type="text" onChange={(evt) => setText(evt.currentTarget.value)} />
      <br />
      <input type="button" value="submit" onClick={() => console.log(text)} />
    </form>
  );
}

export default Task3;
