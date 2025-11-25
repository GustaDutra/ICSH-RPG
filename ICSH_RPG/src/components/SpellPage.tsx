import { useParams } from "react-router";
import spells from "../spells/spells.json";

type Spell = {
  id: string;
  misterio: any;
  nivel: number;
  nome: string;
  Tempo: string;
  Alcance: string;
  Componentes: string;
  duracao: string;
  descricao: string;
  nivel_superior: string;
};

export default function SpellPage() {
  const { id } = useParams<{ id: string }>();

  const spell: Spell | undefined = spells.find(
    (s) => String(s.id) === String(id)
  );

  if (!spell) {
    return <h1>Magia não encontrada</h1>;
  }

  return (
    <div>
      <p>Mistério(s) de magia: {spell.misterio}</p>
      <h1>{spell.nome}</h1>
      <p>Nível da magia: {spell.nivel}</p>

      <p>Ação: {spell.Tempo}</p>
      <p>Alcance: {spell.Alcance}</p>
      <p>Componentes: {spell.Componentes}</p>
      <p>Duração: {spell.duracao}</p>
      <p className="pre-line">{spell.descricao}</p>
      <p className="pre-line">{spell.nivel_superior}</p>
    </div>
  );
}
