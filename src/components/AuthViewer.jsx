"use client";
// JUST A DUMMY COMPONENT SHOWING HOW THE REDUX STATES CAN BE VIEWED
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";

const AuthViewer = () => {
  const [isClient, setIsClient] = useState(false);
  const authState = useAppSelector((state) => state.auth.isAuthenticated);
  // EASY FIX: to avoid hydration state error by rendering some parts of html which can cause mismatch, only at client side only after hydration as we are persisting state on client local storage bcuz we are using react persist library
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a placeholder or nothing on the server
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap border border-1 border-black p-20">
      You are now {authState ? "Logged  In" : "Logged Out"}
    </div>
  );
};
export default AuthViewer;
