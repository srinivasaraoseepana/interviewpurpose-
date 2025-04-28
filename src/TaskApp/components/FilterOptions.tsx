// src/components/FilterOptions.tsx

interface FilterOptionsProps {
    filterStatus: "All" | "Completed" | "Incompleted";
    setFilterStatus: (status: "All" | "Completed" | "Incompleted") => void;
  }
  
  const FilterOptions = ({ filterStatus, setFilterStatus }: FilterOptionsProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterStatus(e.target.value as "All" | "Completed" | "Incompleted");
    };
  
    return (
      <div style={{ marginBottom: "20px" }}>
        <select
          value={filterStatus}
          onChange={handleChange}
          style={{
            padding: "8px",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="All">All Tasks</option>
          <option value="Completed">Completed Tasks</option>
          <option value="Incompleted">Incompleted Tasks</option>
        </select>
      </div>
    );
  };
  
  export default FilterOptions;
  