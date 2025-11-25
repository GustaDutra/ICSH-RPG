import { Link } from "react-router";
import { useState } from "react";
import magias from "../spells/spells.json";

function SpellList() {
  const MisteriosArr = [
    "Astral",
    "Cronomancia",
    "Espaçomancia",
    "Gravitomancia",
    "Runomancia",
    "Elemental Geral",
    "Água",
    "Fogo",
    "Terra",
    "Vento",
    "Elétrico",
    "Som",
    "Flora",
    "Areia",
    "Veneno",
    "Metal",
    "Gelo",
    "Cristal",
    "Magma",
    "Sombra",
    "Luz",
    "Advinhação",
    "Encantamento",
    "Étermancia",
    "Ilusão",
    "Invocação",
    "Necromancia",
    "Oniromancia",
    "Transmutação",
    "Umbramancia",
  ];

  const MagiaNivel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {MisteriosArr.map((misterioAtual) => (
        <CollapseMisterio
          key={misterioAtual}
          misterioAtual={misterioAtual}
          MagiaNivel={MagiaNivel}
        />
      ))}
    </>
  );
}

interface CollapseProps {
  misterioAtual: string;
  MagiaNivel: number[];
}

function CollapseMisterio({ misterioAtual, MagiaNivel }: CollapseProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ margin: "20px" }}>
      {/* BOTÃO DO COLLAPSE */}
      <h2
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {misterioAtual} {open ? "▲" : "▼"}
      </h2>
      {open && (
        <div style={{ marginLeft: "20px" }}>
          {MagiaNivel.map((nivel) => (
            <NivelList
              key={nivel}
              nivel={nivel}
              misterioAtual={misterioAtual}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface NivelProps {
  nivel: number;
  misterioAtual: string;
}

function NivelList({ nivel, misterioAtual }: NivelProps) {
  const filtradas = magias.filter(
    (spell) => spell.misterio.includes(misterioAtual) && spell.nivel === nivel
  );

  return (
    <>
      <p>{nivel}° nível</p>
      <ul>
        {filtradas.map((spell) => (
          <li key={spell.id}>
            <Link to={`${spell.id}`}>{spell.nome}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SpellList;
