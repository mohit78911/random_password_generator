import React from "react";
import PasswordGenerator from "./Components/PasswordGenerator";
import randomPassword from './'
export default function App() {
  return (
    <div>
      <PasswordGenerator/>
      <randomPassword/>
    </div>
  );
}
