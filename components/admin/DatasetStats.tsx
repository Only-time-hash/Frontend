import { Database, FileSpreadsheet, FileText, File } from "lucide-react";

export default function DatasetStats() {
  const stats = [
    {
      title: "Total Datasets",
      value: "18,394",
      icon: Database,
      color: "text-blue-500",
    },
    {
      title: "CSV Files",
      value: "8,234",
      icon: FileText,
      color: "text-green-500",
    },
    {
      title: "Excel Files",
      value: "6,842",
      icon: FileSpreadsheet,
      color: "text-purple-500",
    },
    {
      title: "Other Formats",
      value: "3,318",
      icon: File,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {stats.map((stat, i) => {
        const Icon = stat.icon;

        return (
          <div
            key={i}
            className="bg-white border rounded-lg p-5 flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
            </div>

            <Icon className={`w-7 h-7 ${stat.color}`} />
          </div>
        );
      })}
    </div>
  );
}