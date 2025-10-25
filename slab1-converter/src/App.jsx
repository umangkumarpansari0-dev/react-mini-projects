// src/App.jsx
import Translator from "./components/Translator";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <Translator />
    </div>
  );
}
