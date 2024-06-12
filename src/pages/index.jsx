"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import DialogPopUp from "../components/UI/DialogPopUp";
import LoginPage from "./login";

function MyApp({ Component, pageProps }) {
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();

  const showDialogPopup = () => {
    setOpenDialog(true);
  };

  




  return (
    <div>
      <LoginPage open={openDialog} setOpenDialog={showDialogPopup}  />
      {openDialog && <DialogPopUp openDialog={openDialog} showDialogPopup={showDialogPopup} />}
    </div>
  );
}

export default MyApp;
