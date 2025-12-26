const DashboardCard = ({ title, count, description }) => {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold text-purple-600">{title}</h3>
      <p className="text-4xl font-bold my-3 text-gray-800">{count}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default DashboardCard;
