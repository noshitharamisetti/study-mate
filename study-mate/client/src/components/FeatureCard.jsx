const FeatureCard = ({ title, description }) => {
  return (
    <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
