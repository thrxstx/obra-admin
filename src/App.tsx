import { useEffect } from "react";
import "./App.css";
import { supabase } from "./lib/supabase";

function App() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error("Error conectando a supabase:", error);
      } else {
        console.log("Supabase conectado ✓", data);
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">ObraAdmin</h1>
      </div>
    </>
  );
}

export default App;
