import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="router">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
