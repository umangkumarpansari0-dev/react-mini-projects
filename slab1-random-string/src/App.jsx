import { useState, useEffect, useCallback } from "react";

export default function App() {
  const [length, setLength] = useState(50);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [excludeSimilar, setExcludeSimilar] = useState(true);
  const [generated, setGenerated] = useState("");
  const [history, setHistory] = useState([]);
  const [strength, setStrength] = useState({ label: "Weak", color: "bg-red-500" });

  const generateString = useCallback(() => {
    let chars = "";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+=-[]{};:,.<>?";
    if (excludeSimilar) chars = chars.replace(/[Il1LoO0]/g, "");

    if (!chars) {
      setGenerated("⚠️ Select at least one option!");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setGenerated(result);
    setHistory((prev) => [result, ...prev.slice(0, 1)]);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, excludeSimilar]);

  // 🔹 Strength Logic
  useEffect(() => {
    let score = 0;
    if (includeUppercase) score++;
    if (includeLowercase) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;
    if (length >= 12) score++;
    if (length >= 20) score++;

    if (score <= 2) setStrength({ label: "Weak", color: "bg-red-500" });
    else if (score === 3 || score === 4) setStrength({ label: "Medium", color: "bg-yellow-500" });
    else setStrength({ label: "Strong", color: "bg-green-500" });
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  return (
    <div className="max-w-2xl w-full mx-auto bg-white/90 shadow-xl rounded-2xl p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          🔁 Random <span className="text-purple-600">String Generator</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Generate secure random strings for passwords, tokens, and more
        </p>
      </div>

      {/* Settings Card */}
      <div className="bg-white rounded-xl border shadow-sm p-6 space-y-5">
        <h2 className="font-semibold text-lg text-gray-800">Settings</h2>

        {/* Length Slider */}
        <div>
          <label className="font-medium text-gray-700">Length: {length}</label>
          <input
            type="range"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-purple-600 mt-2"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-2">
          <h3 className="text-gray-700 font-medium">Character Types:</h3>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />
              Uppercase (A–Z)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
              />
              Lowercase (a–z)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              Numbers (0–9)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              Symbols (!@#$...)
            </label>
            <label className="flex items-center gap-2 col-span-2">
              <input
                type="checkbox"
                checked={excludeSimilar}
                onChange={() => setExcludeSimilar(!excludeSimilar)}
              />
              Exclude similar (Il1LoO0)
            </label>
          </div>
        </div>

        {/* Strength Bar */}
        <div className="mt-3">
          <div className={`w-full h-2 rounded-full ${strength.color}`}></div>
          <p
            className={`text-sm mt-1 text-right ${
              strength.label === "Strong"
                ? "text-green-600"
                : strength.label === "Medium"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            Strength: {strength.label}
          </p>
        </div>
      </div>

      {/* Generated String */}
      <div className="bg-white rounded-xl border shadow-sm p-6 space-y-4 text-center">
        <h2 className="font-semibold text-gray-800">Generated String</h2>
        <p className="bg-gray-100 border rounded-lg py-3 px-2 text-lg font-mono break-all">
          {generated || "—"}
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={generateString}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Generate New
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(generated)}
            className="px-4 py-2 border border-purple-400 rounded-lg hover:bg-purple-100"
          >
            Copy
          </button>
        </div>
      </div>

      {/* Recent History */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="font-semibold text-gray-800 mb-3">Recent History</h2>
        {history.length === 0 ? (
          <p className="text-gray-500 text-sm">No strings generated yet.</p>
        ) : (
          <ul className="space-y-2">
            {history.map((str, index) => (
              <li
                key={index}
                className="bg-gray-50 p-2 rounded-md text-sm font-mono truncate flex justify-between items-center"
              >
                <span>{str}</span>
                <span className="text-gray-400 text-xs">
                  {new Date().toLocaleTimeString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
