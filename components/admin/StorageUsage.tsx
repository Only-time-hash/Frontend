export default function StorageUsage() {
  return (
    <div className="bg-white border rounded-lg p-6 mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">
          Storage Usage
        </span>

        <span className="text-sm text-gray-500">
          0.03 GB / 500 GB
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-blue-500 h-3 rounded-full w-[1%]"></div>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        100.0% storage available
      </p>
    </div>
  );
}