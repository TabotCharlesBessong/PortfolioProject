import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Footer,
  Header,
  OnlyAdminPrivateRoute,
  PrivateRoute,
  ScrollToTop,
} from "./components";
import { CreatePost, Dashboard, EditPost, HomePage, PostPage, SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={"About page"} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/editpost/:postId" element={<EditPost />} />
        </Route>
        <Route path="/projects" element={"Projects Page"} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
