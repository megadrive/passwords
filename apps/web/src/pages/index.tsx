import Head from "next/head";
import { GeneratePassword } from "password-generator";
import { useRef, useState } from "react";

export default function Web() {
  const [password, setPassword] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const generate = () => {
    const pw = GeneratePassword();
    setPassword(pw);
    if (passwordRef.current) {
      passwordRef.current.value = password;
    }
  };

  const pageTitle = "Password Generator 🐱‍👤";

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1 className="text-center">{pageTitle}</h1>
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <input
            style={{
              textAlign: "center",
              border: "1px solid #DDD",
              fontSize: 32,
              minWidth: "85%",
              padding: "0.8rem 0.3rem",
              borderRadius: 999,
            }}
            type="text"
            defaultValue={password}
            ref={passwordRef}
            placeholder="Click the button below to generate a password!"
          />
        </div>
        <div>
          <button onClick={generate}>Generate</button>
        </div>
      </div>
    </div>
  );
}
