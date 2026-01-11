import './assets/global.css'
import AppLayout from './layouts/appLayout/AppLayout'
import IncomingTasks from "../src/pages/incomingTasks/IncomingTasks.jsx"

function App() {

  return (
    <>
      <AppLayout>
        <IncomingTasks />
      </AppLayout>
    </>
  )
}

export default App
