import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [input3, setInput3] = useState<number>(0);
  const [input4, setInput4] = useState<number>(0);
  const [output, setOutput] = useState<number>(0);
  const [output2, setOutput2] = useState<number>(0);

  function Greater() {
    let max = 0;
    if (input > max) {
      max = input;
    }
    if (input2 > max) {
      max = input2;
    }
    if (input3 > max) {
      max = input3;
    }
    if (input4 > max) {
      max = input4;
    }
    setOutput(max);
  }

  function Smaller() {
    let min = input;

    if (input2 < min) {
      min = input2;
    }
    if (input3 < min) {
      min = input3;
    }
    if (input4 < min) {
      min = input4;
    }
    setOutput2(min);
  }

  function Delete() {
    setInput(0);
    setInput2(0);
    setInput3(0);
    setInput4(0);
    setOutput(0);
    setOutput2(0);
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-black justify-center py-2">
      <div className=" space-x-4">
        <input
          type="number"
          className="py-2 rounded-lg"
          value={input}
          placeholder="Type a number"
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <input
          type="number"
          className="py-2 rounded-lg"
          value={input2}
          placeholder="Type a number"
          onChange={(e) => setInput2(Number(e.target.value))}
        />
        <input
          type="number"
          className="py-2 rounded-lg"
          value={input3}
          placeholder="Type a number"
          onChange={(e) => setInput3(Number(e.target.value))}
        />
        <input
          type="number"
          className="py-2 rounded-lg"
          value={input4}
          placeholder="Type a number"
          onChange={(e) => setInput4(Number(e.target.value))}
        />
        <div className="flex justify-center space-x-4 py-6 text-xl font-semibold">
          <button
            className="bg-green-400 px-6 py-2 rounded-lg"
            onClick={Greater}
          >
            Find Greatest
          </button>
          <button
            className="bg-blue-400 px-6 py-2 rounded-lg"
            onClick={Smaller}
          >
            Find Smallest
          </button>
          <button className="bg-red-500 px-6 py-2 rounded-lg" onClick={Delete}>
            Clear
          </button>
        </div>
      </div>
      <div className="flex space-x-10 text-white font-bold text-xl">
        <div>Greatest: {output}</div>
        <div>Samallest: {output2}</div>
      </div>
    </div>
  );
};

export default Home;
