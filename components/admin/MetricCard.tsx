interface Props{
  title:string
  value:string | number
  sub:string
}

export default function MetricCard({title,value,sub}:Props){
  return(

    <div className="bg-white shadow rounded-xl p-6">

        <p className="text-gray-500">{title}</p>

        <h2 className="text-2xl font-bold mt-1">
          {value ?? 0}
        </h2>

        <p className="text-green-500 text-sm">
          {sub}
        </p>

    </div>

  )
}