import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import Homepage from './pages/Homepage/Homepage';
import BlogDetail from './pages/BlogDetail/BlogDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>}
          />
          <Route path='/question' element={
            <MainLayout>

            </MainLayout>
          }/>
          <Route path='/videocall' element={<MainLayout />} />
        </Routes>
        <Routes>
          <Route path='/blog/1' element={
            <MainLayout>
                <BlogDetail/>
            </MainLayout>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
