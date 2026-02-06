import EmotiIcon from "./EmotiIcon.tsx";
import "../App.css";

type Emoti = {
  id: number;
  symbol: string;
  name: string;
  meaning: string;
};

type EmotiListProps = {
  emotis: Emoti[];
  onSeleccion: (emoti: Emoti) => void;
};

export default function EmotiList({ emotis, onSeleccion }: EmotiListProps) {
  return (
    <div className="emotis-list">
      {emotis.map((emoti) => (
        <EmotiIcon
          key={emoti.id}
          emoti={emoti}
          onSeleccion={() => onSeleccion(emoti)}
        />
      ))}
    </div>
  );
}
