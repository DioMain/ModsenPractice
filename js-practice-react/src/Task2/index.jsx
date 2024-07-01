import { useState } from "react";

function Task2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <input
        type="button"
        style={{ backgroundColor: count > 10 ? "red" : "green" }}
        onClick={() => setCount(count + 1)}
        value={"Click"}
      />
    </div>
  );
}

export default Task2;
