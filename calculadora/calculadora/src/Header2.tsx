import "./App.css";

type Props = {
  title: string;
  onDelete: (n: number) => void;
};

export function Header2({ title, onDelete }: Props) {
  return (
    <h1
      onClick={() => {
        onDelete(10);
      }}
    >
      {title}
    </h1>
  );
}
