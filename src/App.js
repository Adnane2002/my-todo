import { Route, Routes,useLocation} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TodoListe from "./pages/TodoListe";
import React, { useState ,useEffect } from "react";
import LoadingBar from "react-top-loading-bar";



function App() {
  const [progress, setProgress] = useState(0)
  const location = useLocation();

  useEffect(() => {
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    },500);
  }, [location]);
  return (
    <>
      <LoadingBar
        color="red"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<TodoListe />}/>

      </Routes>
    </>
  );
}

export default App;
