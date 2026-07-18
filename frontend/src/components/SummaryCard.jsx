function SummaryCard({ title, items }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      {Array.isArray(items) ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{items}</p>
      )}
    </div>
  );
}

export default SummaryCard;