import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export default function Navegacion2() {
  return (
    <>
      <div style={{ background: "GreenYellow" }}>
        <p>Ejemplo de componente con React Rourter Declarativo. </p>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <NavLink
            to="/"
            end
            className={({ isActive }: NavLinkRenderProps) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }: NavLinkRenderProps) =>
              isActive ? "active" : ""
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/sobre/tomas"
            className={({ isActive }: NavLinkRenderProps) =>
              isActive ? "active" : ""
            }
          >
            {" "}
            Tomas
          </NavLink>
          <NavLink
            to="/sobre/txupito"
            className={({ isActive }: NavLinkRenderProps) =>
              isActive ? "active" : ""
            }
          >
            {" "}
            Txupito
          </NavLink>
          <NavLink
            to="/pokemons"
            className={({ isActive }: NavLinkRenderProps) =>
              isActive ? "active" : ""
            }
          >
            {" "}
            Pokemon
          </NavLink>
        </nav>
      </div>
    </>
  );
}
