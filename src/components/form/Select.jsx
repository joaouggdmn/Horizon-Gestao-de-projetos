function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label
        htmlFor={name}
        className="text-slate-700 font-semibold text-sm uppercase tracking-wide"
      >
        {text}
      </label>
      <select
        required
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 bg-white cursor-pointer appearance-none pr-10"
      >
        <option value="" disabled>
          Selecione uma categoria
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
