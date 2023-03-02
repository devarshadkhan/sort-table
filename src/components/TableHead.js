import { useState } from "react";
const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState(columns);
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSearch = () => {
    return columns.filter(
      (a) =>
      a.name?.toLowerCase().includes(search) ||
      a.email?.toLowerCase().includes(search) ||
      a.number?.toLowerCase().includes(search)
    );
  };

  return (
    <thead>
      <tr>
        {columns.filter(handleSearch).map(({ label, accessor, sortable }) => {
          
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <>
            <th
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
              className={cl}
            >
             <p> {label}</p>
              {/* <br/> */}
              <input type="" name="" id="" placeholder={`Enter your ${label}`} onChange={(e) => setSearch(e.target.value)} />
            </th>
            
            </>
          );
        })}
        
      </tr>
      
    </thead>
  );
};

export default TableHead;
