import React from "react";
import Link from "next/link";

export default function NavLinks({ isLoggedIn, handleLogout }) {
  /*
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
      setIsLoggedIn(false);
    };
    */
  return (
    <>
      <li>
        <Link href="/login">{isLoggedIn ? "Logout" : "Login"}</Link>
      </li>
      <li>
        {isLoggedIn ? (
          <Link href="/account"> My account </Link>
        ) : (
          <Link href="/create">Create account </Link>
        )}
      </li>
    </>
  );
}

/*

 {!isLoggedIn ? (
        <>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/create">Create account</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link href="/account">My account</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      )}
*/
