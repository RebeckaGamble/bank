"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function loginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLoginUser = async (e) => {
    e.preventDefault();

    setError("");

    try {
      //http://localhost:/login/sessions
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log("Login Successful!!");

        setIsLoggedIn(true);
        router.push("/account");

      } else {
        console.log("Can't login, check username or password.");
        setError("Wrong username or password.");
      }
    } catch (error) {
      console.error("Error trying to login", error);
      setError("Error trying to login. Please try again.");
    }
  };

  return (
    <div className="px-4">
      <div className="pt-10 xl:pt-40 flex flex-col mx-auto">
        <h3 className="font-semibold pb-6 text-center text-xl">
          Login to your user account
        </h3>
        <form
          action=""
          onSubmit={handleLoginUser}
          className="flex flex-col mx-auto"
        >
          <label htmlFor="" className="">
            Username:{" "}
          </label>
          <input
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            className="max-w-[300px] border bordre-slate-300 px-2 py-0.5 mb-2"
          />
          <label htmlFor="" className="">
            Password:{" "}
          </label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="max-w-[300px] border bordre-slate-300 px-2 py-0.5"
          />

          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="max-w-[300px] mt-4 flex justify-end">
            <button className="max-w-fit px-4 py-1 text-white">Log in</button>
          </div>
        </form>

        <div className="pt-4 text-center">
          <p>
            Don't have an account? Go to{" "}
            <Link href="/create" className="underline text-blue-700">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
