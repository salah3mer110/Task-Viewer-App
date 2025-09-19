function TextInput({ title, placeholder, value, onChange, required = "" }) {
  return (
    <label className="flex flex-col lg:w-[calc(85%/4)] w-full">
      <span className="mb-1 font-medium text-secondary-100">{title}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md sm:px-4 py-2 shadow-sm"
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

export default TextInput;
