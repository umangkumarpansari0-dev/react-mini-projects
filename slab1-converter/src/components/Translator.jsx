import React, { useState } from "react";
import { translateText } from "../api/translate";

export default function Translator() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("hi");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) {
      alert("Please enter text to translate.");
      return;
    }
    setLoading(true);
    setTranslated("");
    try {
      const result = await translateText(text, lang);
      setTranslated(result);
    } catch (err) {
      console.error(err);
      alert("Translation failed: " + (err.message || "Check console"));
    } finally {
      setLoading(false);
    }
  };

  const languageOptions = [
    { code: "hi", name: "Hindi" },
    { code: "mr", name: "Marathi" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "bn", name: "Bengali" },
    { code: "ta", name: "Tamil" },
    { code: "gu", name: "Gujarati" },
    { code: "ur", name: "Urdu" },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-3xl border border-white/30 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        🌐 Text Translator
      </h1>

      {/* Box 1 - Input */}
      <div className="bg-gray-50 p-5 rounded-xl shadow-md border border-gray-200">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Enter Text (English)
        </label>
        <textarea
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400"
          placeholder="Type English text here..."
          spellCheck={false}
        />
      </div>

      {/* Box 2 - Language Selection */}
      <div className="bg-gray-50 p-5 rounded-xl shadow-md border border-gray-200 flex flex-wrap gap-4 items-end justify-between">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Target Language
          </label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400"
          >
            {languageOptions.map((l) => (
              <option key={l.code} value={l.code}>
                {l.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleTranslate}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition disabled:opacity-60"
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </div>

      {/* Box 3 - Output */}
      <div className="bg-gray-50 p-5 rounded-xl shadow-md border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-2">Translated Text</h3>
        {translated ? (
          <>
            <p className="text-gray-700 whitespace-pre-wrap">{translated}</p>
            <button
              onClick={() => navigator.clipboard.writeText(translated)}
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              📋 Copy translated text
            </button>
          </>
        ) : (
          <p className="text-gray-400 italic">Translation will appear here...</p>
        )}
      </div>
    </div>
  );
}
