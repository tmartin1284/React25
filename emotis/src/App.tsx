import { useState } from "react";
import EmotiList from "./Input/EmotiList.tsx";
import EmotiShow from "./Output/EmotiShow.tsx";
import "./App.css";

type Emoti = {
  id: number;
  symbol: string;
  name: string;
  meaning: string;
};

const emotis: Emoti[] = [
  {
    id: 1,
    symbol: "😀",
    name: "grinning face",
    meaning: "Sonrisa grande, felicidad o saludo amigable",
  },
  {
    id: 2,
    symbol: "😂",
    name: "face with tears of joy",
    meaning: "Algo es tan gracioso que hace llorar de risa",
  },
  {
    id: 3,
    symbol: "🥰",
    name: "smiling face with hearts",
    meaning: "Amor, cariño o adoración",
  },
  {
    id: 4,
    symbol: "😎",
    name: "cool face",
    meaning: "Actitud confiada, estilo o relajación",
  },
  {
    id: 5,
    symbol: "🤔",
    name: "thinking face",
    meaning: "Pensando, dudando o reflexionando",
  },
  {
    id: 6,
    symbol: "😴",
    name: "sleeping face",
    meaning: "Sueño, cansancio o aburrimiento",
  },
  {
    id: 7,
    symbol: "😢",
    name: "crying face",
    meaning: "Tristeza o decepción",
  },
  {
    id: 8,
    symbol: "😡",
    name: "angry face",
    meaning: "Enojo, frustración o molestia",
  },
  {
    id: 9,
    symbol: "😱",
    name: "screaming face",
    meaning: "Sorpresa, miedo o shock",
  },
  {
    id: 10,
    symbol: "🤩",
    name: "star struck",
    meaning: "Fascinación, emoción o admiración",
  },
  {
    id: 11,
    symbol: "🥳",
    name: "party face",
    meaning: "Fiesta, celebración o logro",
  },
  {
    id: 12,
    symbol: "😇",
    name: "angel face",
    meaning: "Inocencia, bondad o buena intención",
  },
  {
    id: 13,
    symbol: "🤯",
    name: "mind blown",
    meaning: "Algo impresionante o sorprendente",
  },
  {
    id: 14,
    symbol: "🤗",
    name: "hugging face",
    meaning: "Abrazo, apoyo o afecto",
  },
  {
    id: 15,
    symbol: "🙃",
    name: "upside down face",
    meaning: "Sarcasmo, broma o ironía",
  },
];

const emotivacio: Emoti = {
  id: 0,
  symbol: "",
  name: "",
  meaning: "",
};

export default function App() {
  const [Seleccionado, setSeleccionado] = useState<Emoti>(emotivacio);

  return (
    <>
      <div>
        <h1>Emotis y sus significados</h1>
        <EmotiList emotis={emotis} onSeleccion={setSeleccionado} />
        <EmotiShow emoti={Seleccionado} />
      </div>
    </>
  );
}
