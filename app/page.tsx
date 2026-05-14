import Link from "next/link";

export default function Home(){
  return (
    <>
      <h1 className="text-2xl mb-4">Ramen Logs</h1>
      <div>
        <Link href="/ramen_logs">ログへ移動</Link>
      </div>    
    </>
  )
}