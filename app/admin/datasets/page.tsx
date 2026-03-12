import DatasetStats from "@/components/admin/DatasetStats";
import StorageUsage from "@/components/admin/StorageUsage";
import DatasetTable from "@/components/admin/DatasetTable";

export default function DatasetsPage() {
  return (
    <div className="p-8">

      <h1 className="text-2xl font-bold mb-2">
        Dataset Management
      </h1>

      <p className="text-gray-500 mb-6">
        Monitor and manage all platform datasets
      </p>

      <DatasetStats />

      <StorageUsage />

      <DatasetTable />

    </div>
  );
}