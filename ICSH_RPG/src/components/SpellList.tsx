import { Link } from "react-router";
import magias from "../spells/spells.json";

function SpellList() {
  const MisteriosArr = [
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
        <div key={misterioAtual}>
          <h3>{misterioAtual}</h3>
          {MagiaNivel.map((nivel) => (
            <div key={nivel} style={{ display: "none" }}>
              <p>{nivel}° nível</p>
              <ul>
                {magias
                  .filter(
                    (spell) =>
                      spell.misterio.includes(misterioAtual) &&
                      nivel === spell.nivel
                  )

                  .map((spells) => (
                    <li key={spells.id}>
                      <Link to={`${spells.id}`}>{spells.nome}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default SpellList;
