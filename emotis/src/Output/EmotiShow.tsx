import "../App.css";

type Emoti = {
  id: number;
  symbol: string;
  name: string;
  meaning: string;
};

type EmotiShowProps = {
  emoti: Emoti;
};

export default function EmotiShow({ emoti }: EmotiShowProps) {
  return (
    <div className="emotis-show">
      {
        <div>
          <h2>{emoti.name}</h2>
          <p>{emoti.symbol}</p>
          <p>{emoti.meaning}</p>
        </div>
      }
    </div>
  );
}
