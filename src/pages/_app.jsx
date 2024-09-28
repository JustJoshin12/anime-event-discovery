"use client";

import { useState, useEffect } from "react";
import { wrapper } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
import { loadUserInfo } from "../store/slices/userSlice.js";
import ProtectedLayout from "../components/protectedRoute/ProtectedLayout.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.user.userInfo !== null);
  const isAuthenticated = true;

  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);

  const publicRoutes = ["/login", "/signup"];
  const isPublicRoute = publicRoutes.includes(router.pathname);

  return (
    <div>
      {isPublicRoute || isAuthenticated ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedLayout>
          <Component {...pageProps} />
        </ProtectedLayout>
      )}
    </div>
  );
}

export default wrapper.withRedux(MyApp);
