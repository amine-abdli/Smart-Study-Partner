import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null); // يخزن المستخدم بعد login/register
  const [showRegister, setShowRegister] = useState(false);

  if (!user) {
    return (
      <div style={{padding:"20px"}}>
        {showRegister ? (
          <>
            <Register />
            <p>
              Already have an account?{" "}
              <button onClick={()=>setShowRegister(false)}>Login</button>
            </p>
          </>
        ) : (
          <>
            <Login />
            <p>
              Don't have an account?{" "}
              <button onClick={()=>setShowRegister(true)}>Register</button>
            </p>
          </>
        )}
      </div>
    );
  }

  // بعد تسجيل الدخول
  return (
    <div style={{padding:"20px"}}>
      <button onClick={()=>setUser(null)}>Logout</button>
      <Dashboard userId={user.id} />
    </div>
  );
}

export default App;