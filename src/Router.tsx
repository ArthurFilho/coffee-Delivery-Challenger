import { Routes, Route } from 'react-router-dom'
import { CheckoutPage } from './pages/CheckoutPage'
import { HomePage } from './pages/HomePage'


export function Router() {
  return (
    <Routes>
      <Route >
        <Route path="/" element={<HomePage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
      </Route>
    </Routes>
  )
}
