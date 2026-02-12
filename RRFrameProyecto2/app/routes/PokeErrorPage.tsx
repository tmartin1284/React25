import { useParams } from "react-router";
import "../App.css";

export default function PokeErrorPage() {
  const { error } = useParams<{ error: string }>();
  const params = useParams();
  console.log("params en PokeError:", params.error);
  return (
    <>
      <div style={{ background: "red" }}>
        <h1>{error}</h1>
      </div>
    </>
  );
}
