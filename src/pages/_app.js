'use client';

import { useState, useEffect } from "react";
import { wrapper } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserInfo } from "../store/slices/userSlice";
import DialogPopUp from "../components/UI/DialogPopUp";
import ProtectedLayout from "../components/protectedRoute/ProtectedLayout";
import store from "../store/rootReducer.js"
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [open, setOpen] = useState(false);

  const ShowLoading = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.user.userInfo !== null);
  const isAuthenticated = true;

  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);

  const publicRoutes = ['/login', '/signup'];
  const isPublicRoute = publicRoutes.includes(router.pathname);

  return (
    <div>
      {isPublicRoute || isAuthenticated ? (
        <Component
          {...pageProps}
          ShowLoading={ShowLoading}
          open={open}
          setOpen={setOpen}
        />
      ) : (
        <ProtectedLayout>
          <Component
            {...pageProps}
            ShowLoading={ShowLoading}
            open={open}
            setOpen={setOpen}
          />
        </ProtectedLayout>
      )}
      {open && <DialogPopUp open={open} setOpen={setOpen} />}
    </div>
  );
}

export default wrapper.withRedux(MyApp);