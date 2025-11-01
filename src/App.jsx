import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import PageNotFound from './pages/PageNotFound'
import Transactions from './pages/Transactions'
import Advisor from './pages/Advisor'
import { Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import BudgetPlanner from './components/layout/footerPages/BudgetPlanner'
import FinancialTips from './components/layout/footerPages/FinancialTips'
import InvestmentBasics from './components/layout/footerPages/InvestmentBasics'
import PrivacyPolicy from './components/layout/footerPages/PrivacyPolicy'
import ScrollToTop from './components/layout/ScrollToTop'
import History from './pages/History'
import Footer from './components/layout/Footer'
import { ExpenseProvider } from './context/ExpenseContext'
const App = () => {
  return (
    <>
      <ExpenseProvider>
        <ScrollToTop />  {/*  This ensures every new route starts at top */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/dashboard' element={<DashBoard />}></Route>
          <Route path='/transactions' element={<Transactions />}></Route>
          <Route path='/advisor' element={<Advisor/>}></Route>
          <Route path='/history' element={<History/>}></Route>
          <Route path="/contact" element={<Contact/>} />
          <Route path='*' element={<PageNotFound />}></Route>



          <Route path="/budget" element={<BudgetPlanner />} />
          <Route path="/tips" element={<FinancialTips />} />
          <Route path="/investment" element={<InvestmentBasics />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </ExpenseProvider>
    </>
  )
}

export default App
