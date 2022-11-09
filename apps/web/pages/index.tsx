import { Button } from "ui";
import { GeneratePassword } from "password-generator";
import { useState } from "react";

export default function Web() {
  const [password, setPassword] = useState("");

  const generate = () => {
    const pw = GeneratePassword();
    setPassword(pw);
  };

  return (
    <div>
      <h1>Web</h1>
      <div>
        <div>{password ?? "Click the button below"}</div>
        <div>
          <button onClick={generate}>Generate</button>
        </div>
      </div>
    </div>
  );
}
