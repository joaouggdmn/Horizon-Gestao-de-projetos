import { useEffect, useState } from "react";

function MoneyInput({
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  currency = "R$",
  min = "0",
  step = "0.01",
}) {
  const [displayValue, setDisplayValue] = useState("");

  function formatDigitsToMoney(digits) {
    if (!digits) {
      return "";
    }

    const padded = digits.padStart(3, "0");
    const cents = padded.slice(-2);
    let intPart = padded.slice(0, -2).replace(/^0+(?=\d)/, "");

    if (intPart === "") {
      intPart = "0";
    }

    const intPartFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${intPartFormatted},${cents}`;
  }

  function digitsToNormalized(digits) {
    if (!digits) {
      return "";
    }

    const padded = digits.padStart(3, "0");
    const cents = padded.slice(-2);
    let intPart = padded.slice(0, -2).replace(/^0+(?=\d)/, "");

    if (intPart === "") {
      intPart = "0";
    }

    return `${intPart}.${cents}`;
  }

  function formatFromValue(rawValue) {
    const digits = String(rawValue).replace(/\D/g, "");
    return formatDigitsToMoney(digits);
  }

  function handleInputChange(e) {
    const digits = e.target.value.replace(/\D/g, "");
    const formatted = formatDigitsToMoney(digits);
    const normalized = digitsToNormalized(digits);

    setDisplayValue(formatted);
    handleOnChange({ target: { name, value: normalized } });
  }

  useEffect(() => {
    if (value === undefined || value === null || value === "") {
      setDisplayValue("");
      return;
    }

    setDisplayValue(formatFromValue(value));
  }, [value]);

  return (
    <div className="flex flex-col space-y-2 w-full">
      <label
        htmlFor={name}
        className="text-slate-700 font-semibold text-sm uppercase tracking-wide"
      >
        {text}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
          {currency}
        </span>
        <input
          required
          type="text"
          inputMode="decimal"
          name={name}
          placeholder={placeholder}
          onChange={handleInputChange}
          value={displayValue}
          min={min}
          step={step}
          className="w-full px-4 py-3 pl-12 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder-slate-400"
        />
      </div>
    </div>
  );
}

export default MoneyInput;
