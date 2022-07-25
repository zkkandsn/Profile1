import { Routes, Route, Navigate } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import Main from "../components/Main";

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="/home" element={<Main />} />
        <Route path="/main" element={<HeaderMain />} />
      </Routes>
    </div>
  );
}
