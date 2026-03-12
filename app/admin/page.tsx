import MetricCard from "@/components/admin/MetricCard"
import UsageCharts from "@/components/admin/UsageCharts"
import SystemOverview from "@/components/admin/SystemOverview"
import RecentActivities from "@/components/admin/RecentActivities"
import TopActiveUsers from "@/components/admin/TopActiveUsers"

export default function AdminDashboard(){

return(

<div className="p-8">

<div className="max-w-7xl mx-auto">

{/* Header */}

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>

<p className="text-gray-500 mt-1 mb-8">
Platform overview and system metrics
</p>


{/* Metric Cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<MetricCard
title="Total Users"
value="2,847"
sub="+12%"
/>

<MetricCard
title="Datasets Uploaded"
value="18,394"
sub="+8%"
/>

<MetricCard
title="Analyses Today"
value="1,423"
sub="+23%"
/>

<MetricCard
title="AI Queries"
value="8,912"
sub="+19%"
/>

</div>


{/* Charts */}

<div className="mb-8">
<UsageCharts/>
</div>


{/* System Overview */}

<div className="mb-8">
<SystemOverview/>
</div>


{/* Bottom Section */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<RecentActivities/>

<TopActiveUsers/>

</div>

</div>

</div>

)

}