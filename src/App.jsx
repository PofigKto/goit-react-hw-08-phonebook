import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/Appbar';
import Container from './components/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/Spinner/Spinner';
import { authOperations } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <ToastContainer
        position={'top-center'}
        autoClose={3000}
        theme={'colored'}
      />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          ></Route>
          {/* <Route path="contacts" element={<ContactsView />}></Route> */}
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="register"
            element={
              <PublicRoute restricted NavigateTo="/login">
                <RegisterView />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="login"
            element={
              <PublicRoute restricted NavigateTo="/contacts">
                <LoginView />
              </PublicRoute>
            }
          ></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
