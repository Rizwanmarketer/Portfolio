function PrimaryButton({ text }) {
  return (
    <button
      className="
      px-8 py-4
      rounded-2xl
      bg-blue-600
      hover:bg-blue-700
      duration-300
      font-medium
      shadow-lg shadow-blue-600/30"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;