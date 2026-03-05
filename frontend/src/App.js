import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCreateScreen from './screens/ProjectCreateScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/projects/:id' element={<DetailScreen />} />
          <Route path='/create' element={<ProjectCreateScreen />} />
          <Route path='/login' element={<LoginScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
