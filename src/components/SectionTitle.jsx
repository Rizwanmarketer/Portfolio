function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-20">

      <p className="text-blue-500 text-lg mb-4">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold gradient-text">
  {title}
</h2>

    </div>
  );
}

export default SectionTitle;