import { useEffect } from "react";
import { useRouter } from 'next/router'

function Dashboard() {
  const router = useRouter()
  useEffect(() => {
    router.push('/dashboard/calendar')
  })
  return (
    <div>
    </div>
  );
}

export default Dashboard;
