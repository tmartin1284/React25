import { useState } from "react";
import "../App.css";

type Emoti = {
  id: number;
  symbol: string;
  name: string;
  meaning: string;
};

type EmotiIconProps = {
  emoti: Emoti;
  onSeleccion: () => void;
};

export default function EmotiIcon({ emoti, onSeleccion }: EmotiIconProps) {
  const [pulsado , setPulsado] = useState(0);
  return (
    <div className="emotis-icon">
            {
          <button onClick={() => {
            setPulsado((prev) => prev + 1);
            onSeleccion();
          }}>
          {emoti.symbol}
          {<span className="contador">{pulsado}</span>}
          </button>
      }
        
    </div>
  );
}
