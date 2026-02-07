import { useParams } from "react-router";

export default function PokeError() {
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
