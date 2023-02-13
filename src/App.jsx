import "./App.css";

import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
import Homepage from "./pages/Homepage/Homepage";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import SearchPage from "./pages/Search/SearchPage";
import WritePost from "./pages/WritePost/WritePost";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import MyProfile from "./pages/MyProfile/MyProfile";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import {isAdmin} from "./service/role";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<AdminPage/>}/>
                    <Route
                        path="/"
                        element={
                            <HomepageLayout>
                                <Homepage/>
                            </HomepageLayout>
                        }
                    />
                    <Route path='/question' element={
                        <MainLayout>

                        </MainLayout>
                    }/>
                    <Route path="/search" element={
                        <MainLayout>
                            <SearchPage/>
                        </MainLayout>
                    }/>
                    <Route path="/write" element={
                        <MainLayout>
                            <WritePost/>
                        </MainLayout>
                    }/>
                    <Route path='/videocall' element={<MainLayout/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signin' element={<Signin/>}/>
                </Routes>

                <Routes>
                    <Route
                        path="/dashboard/my-profile"
                        element={
                            <HomepageLayout>
                                <DashboardLayout>
                                    <MyProfile/>
                                </DashboardLayout>
                            </HomepageLayout>
                        }
                    ></Route>
                </Routes>
                <Routes>
                    <Route
                        path={`/post/get/:id`}
                        element={
                            <MainLayout>
                                <BlogDetail/>
                            </MainLayout>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
