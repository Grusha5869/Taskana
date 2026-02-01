import './assets/global.css'
import { AppLayout } from '@/layouts'
import { IncomingTasks } from "@/pages"
import { useContext, useEffect } from 'react'

function App() {
  return (
    <AppLayout>
      <IncomingTasks />
    </AppLayout>
  )
}

export default App
