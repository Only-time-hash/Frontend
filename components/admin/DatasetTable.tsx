import { Download } from "lucide-react";

const datasets = [
  {
    name: "sales_data_2024.csv",
    owner: "sarah.smith@example.com",
    type: "CSV",
    size: "2.4 MB",
    rows: "15,420",
    columns: "28",
    date: "Mar 2, 2026",
    analyses: "12 analyses",
  },
  {
    name: "customer_behavior.xlsx",
    owner: "john.doe@example.com",
    type: "Excel",
    size: "5.8 MB",
    rows: "42,380",
    columns: "35",
    date: "Mar 1, 2026",
    analyses: "8 analyses",
  },
];

export default function DatasetTable() {
  return (
    <div className="bg-white border rounded-lg p-6">

      <div className="flex justify-between mb-4">

        <div className="flex gap-3">

          <input
            placeholder="Search datasets by name or owner..."
            className="border px-3 py-2 rounded-md text-sm w-72"
          />

          <select className="border px-3 py-2 rounded-md text-sm">
            <option>All Types</option>
            <option>CSV</option>
            <option>Excel</option>
          </select>

        </div>

        <button className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm">
          <Download size={16} />
          Export Report
        </button>

      </div>


      <table className="w-full text-sm">

        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-left py-3">Dataset Name</th>
            <th>Owner</th>
            <th>Type</th>
            <th>Size</th>
            <th>Rows</th>
            <th>Columns</th>
            <th>Upload Date</th>
            <th>Analyses</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {datasets.map((data, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">

              <td className="py-3 font-medium">{data.name}</td>

              <td>{data.owner}</td>

              <td>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                  {data.type}
                </span>
              </td>

              <td>{data.size}</td>

              <td>{data.rows}</td>

              <td>{data.columns}</td>

              <td>{data.date}</td>

              <td>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                  {data.analyses}
                </span>
              </td>

              <td>⋮</td>

            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}