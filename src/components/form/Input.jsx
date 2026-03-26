function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label
        htmlFor={name}
        className="text-slate-700 font-semibold text-sm uppercase tracking-wide"
      >
        {text}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        className="px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder-slate-400"
      />
    </div>
  );
}

export default Input;
