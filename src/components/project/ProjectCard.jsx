import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const getCategoryColor = (categoryName) => {
    const colors = {
      Infraestrutura: "bg-blue-500",
      Desenvolvimento: "bg-green-500",
      Design: "bg-purple-500",
      Marketing: "bg-orange-500",
      Agência: "bg-pink-500",
      Financeiro: "bg-cyan-500"
    };
    return colors[categoryName] || "bg-slate-500";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-bold text-slate-900 mb-4">{name}</h4>
      <p className="text-slate-700 mb-2">
        <span className="font-semibold">Orçamento: </span>
        <strong className="text-blue-600">R$ {budget}</strong>
      </p>
      <p className="text-slate-700 mb-6">
        <span className="font-semibold">Categoria: </span>
        <span className="inline-flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${getCategoryColor(category)}`}
          ></span>
          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </span>
      </p>
      <div className="flex gap-3">
        <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold text-sm">
          <BsPencil /> Editar
        </Link>
        <button
          onClick={() => handleRemove(id)}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-semibold text-sm"
        >
          <BsFillTrashFill /> Remover
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
