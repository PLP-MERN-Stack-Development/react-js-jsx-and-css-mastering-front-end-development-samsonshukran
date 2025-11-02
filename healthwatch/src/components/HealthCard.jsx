function HealthCard({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border-l-4 border-primary hover:shadow-lg transition">
      <h2 className="text-lg font-bold text-primary mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default HealthCard;
