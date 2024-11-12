import { Badge } from "../comprovantes/page"; // Supondo que a interface Badge esteja definida na página de comprovantes

const BadgeList = ({ badges }: { badges: Badge[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 bg-white">
      {badges.length === 0 ? (
        <p className="text-center text-xl font-semibold text-gray-500">
          Nenhum badge encontrado.
        </p>
      ) : (
        badges.map((badge, index) => {
          // Acessa os dados dentro do campo "metadata"
          const metadata = badge.metadata;
          return (
            <div key={index} className="card border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={metadata.badge} // Exibe a imagem do badge
                alt={`Badge do evento ${metadata.nomeDoEvento}`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{metadata.nomeDoEvento}</h3>
              <p className="text-sm text-gray-600">Estudante: {metadata.estudante}</p>
              <p className="text-sm text-gray-600">Curso: {metadata.curso}</p>
              <p className="text-sm text-gray-600">Instituição: {metadata.instituicaoDeEnsino}</p>
              <p className="text-sm text-gray-600">Data de Participação: {metadata.dataDeParticipacao}</p>
              <p className="text-sm text-gray-600">Horas: {metadata.horasEquivalentes}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default BadgeList;