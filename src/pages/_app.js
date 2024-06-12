'use client';

import { useState } from "react";
import { wrapper } from '../store/index'; 
import DialogPopUp from "../components/UI/DialogPopUp";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  // Function to show loading, typically you should use state or context for this
  const ShowLoading = () => {
    setOpen(true);
  };

  return (
    <div>
      <Component
        {...pageProps}
        ShowLoading={ShowLoading}
        open={open}
        setOpen={setOpen}
      />
      {open && <DialogPopUp open={open} setOpen={setOpen} />}
    </div>
  );
}

export default wrapper.withRedux(MyApp);
