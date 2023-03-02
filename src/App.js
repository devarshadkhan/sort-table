import Table from "./components/Table";
import tableData1 from "./tableData1.json";

const columns = [
  { label: "id", accessor: "id", sortable: true },
  { label: "Full Name", accessor: "full_name", sortable: true },
  { label: "Email", accessor: "email", sortable: true },
  { label: "number", accessor: "number", sortable: true, sortbyOrder: "desc" },
  { label: "date of birth", accessor: "dateofbirth", sortable: true },
  ,
];

const App = () => {
  return (
    <div className="table_container">
      <h1 style={{textAlign:"center",textTransform:"capitalize"}}>sortable table with React</h1>
      <Table
        data={tableData1}
        columns={columns}
      />
    </div>
  );
};

export default App;
