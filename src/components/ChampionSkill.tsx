import { Spell } from "@/types/Champion";
import Image from "next/image";

type ChampionSkillProps = {
  passive: {
    name: string;
    description: string;
    image: { full: string };
  };
  spells: Spell[];
};

const ChampionSkill = ({ passive, spells }: ChampionSkillProps) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl text-red-500 font-bold">챔피언 스킬</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* 패시브 스킬 */}
        <div className="border border-gray-500 p-4 rounded-md bg-gray-900">
          <Image
            src={passive.image.full}
            alt={passive.name}
            width={50}
            height={50}
          />
          <h4 className="text-xl font-bold text-red-400 mt-2">
            {passive.name} (패시브)
          </h4>
          <p className="text-gray-300 text-sm mt-2">{passive.description}</p>
        </div>

        {/* QWER 스킬 */}
        {spells.map((spell) => (
          <div
            key={spell.id}
            className="border border-gray-500 p-4 rounded-md bg-gray-900"
          >
            <Image
              src={spell.image.full}
              alt={spell.name}
              width={50}
              height={50}
            />
            <h4 className="text-xl font-bold text-red-400 mt-2">
              {spell.name}
            </h4>
            <p className="text-gray-300 text-sm mt-2">{spell.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionSkill;
