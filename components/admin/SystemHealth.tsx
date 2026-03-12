export default function SystemHealth(){

 return(

  <div className="bg-white p-6 rounded-xl shadow">

    <h3 className="font-semibold mb-4">
      System Health
    </h3>

    <div className="space-y-2 text-sm">

      <p>CPU Usage: 34%</p>
      <p>Server Uptime: 99.9%</p>
      <p>API Latency: 120 ms</p>
      <p>Error Rate: 0.3%</p>

    </div>

  </div>

 )

}