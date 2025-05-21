import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './components/home-page/Blog.jsx';
import SingUp from './components/sign-up/SignUp.jsx';
import SingIn from './components/login/SignIn.jsx';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Blog />} />
                <Route path="/SingUp" element={<SingUp/>} />
                <Route path="/SingIn" element={<SingIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
