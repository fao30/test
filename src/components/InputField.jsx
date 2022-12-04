export default function InputField({ placeholderValue, type, valueTyped }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholderValue}
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => {
          valueTyped(e.target.value);
        }}
      />
    </div>
  );
}
