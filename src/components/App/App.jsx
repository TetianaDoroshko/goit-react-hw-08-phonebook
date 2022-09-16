import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';
import { refreshThunk } from 'redux/authThunk';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <GlobalStyle />
          <Toaster />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
          </Routes>
        </Container>
      </PersistGate>
    </BrowserRouter>
  );
};
