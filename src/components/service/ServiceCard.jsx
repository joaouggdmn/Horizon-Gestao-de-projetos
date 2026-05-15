import { BsFillTrashFill } from "react-icons/bs";

function ServiceCard({ id, name, cost, description, handleRemove }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-lg font-bold text-slate-900">{name}</h4>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          R$ {cost}
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Servico
        </span>
        <button
          onClick={() => handleRemove(id)}
          className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 transition-colors hover:border-red-300 hover:bg-red-100"
        >
          <BsFillTrashFill className="h-3.5 w-3.5" />
          Excluir
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;
