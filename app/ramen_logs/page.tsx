export default async function Page() {
  const res = await fetch("http://localhost:3000/ramens", {
    cache: "no-store"
  })

  if(!res.ok) {
    throw new Error("Failed to fetch Ramen Logs... :(")
  }

  type RamenLog = {
    id: number,
    soup_type: string,
    topping: string,
    noodle_size: string,
  }

  const ramenLogs: Array<RamenLog> = await res.json()

  return (
    <div>
      <h1 className="text-2xl mb-4">Ramen Logs</h1>
      <ul>
        { ramenLogs.map(log => (
          <li key={log.id}>ID:{log.id}, スープ:{log.soup_type}, トッピング:{log.topping}, 麺の量:{log.noodle_size}</li>
        ))}
      </ul>
    </div>
  )
}