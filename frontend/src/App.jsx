import './App.css'
import { Routes, Route } from 'react-router-dom';
import AuthenticationPage from './pages/authenticationPage'
import DoctorProfilePage from './pages/doctorProfilePage'
import HomePage from './pages/homePage'
import SearchResultsPage from './pages/searchResultsPage'


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthenticationPage />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
      </Routes>
    </>
  )
}

export default App
