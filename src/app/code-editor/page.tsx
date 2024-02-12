'use client'

// pages/index.tsx
import { useState, FormEvent } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { useCodeExecution } from "../hooks/useCodeExecution";

const Home = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("");
  
  const { output, loading, executeCode } = useCodeExecution();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await executeCode(code, input, lang);
  };

  return (
    <MaxWidthWrapper>
      <div className="m-10">
        <h1>Code Execution</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code"
          ></textarea>
          <input
            type="text"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            placeholder="Enter language"
          />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter input"
          />
          <button type="submit">Execute</button>
        </form>
        {loading ? <p>Loading...</p> : <pre>{output}</pre>}
      </div>
    </MaxWidthWrapper>
  );
};

export default Home;
