import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ThankYouInvest from './pages/ThankYouInvest'
import ThankYouNoInvest from './pages/ThankYouNoInvest'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you-invest" element={<ThankYouInvest />} />
        <Route path="/thank-you-no-invest" element={<ThankYouNoInvest />} />
      </Routes>
    </div>
  )
}

export default App
