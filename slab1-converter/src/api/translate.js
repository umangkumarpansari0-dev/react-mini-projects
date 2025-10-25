// src/api/translate.js
import axios from "axios";

/**
 * Translate `text` (English) to `targetLang` using google-translator9 on RapidAPI.
 */
export async function translateText(text, targetLang = "hi") {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY; // ✅ Use your .env.local key

  if (!apiKey) {
    throw new Error("Missing VITE_RAPIDAPI_KEY in .env.local");
  }

  const payload = {
    q: text,
    source: "en",
    target: targetLang,
    format: "text",
  };

  try {
    const response = await axios.request({
      method: "POST",
      url: "https://google-translator9.p.rapidapi.com/v2",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": apiKey, // ✅ Correct key reference
        "x-rapidapi-host": "google-translator9.p.rapidapi.com",
      },
      data: payload,
    });

    const translated =
      response?.data?.data?.translations?.[0]?.translatedText ??
      response?.data?.translatedText ??
      null;

    if (!translated) {
      throw new Error("Unexpected API response: " + JSON.stringify(response.data));
    }

    return translated;
  } catch (err) {
    const msg = err?.response?.data ?? err.message ?? err;
    throw new Error("Translation API error: " + JSON.stringify(msg));
  }
}
