const FilterBar = ({ filter, setFilter }) => {
  const tabs = ["active", "completed", "all"];

  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-2 rounded-full ${
            filter === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-blue-600"
          }`}
          onClick={() => setFilter(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)} todos
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
