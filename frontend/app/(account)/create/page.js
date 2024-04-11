"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function createPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("Response from server:", response);

      if (response.ok) {
        console.log("New user created.");
        router.push("/login");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user: ", error);
    }
    setUsername('')
    setPassword('')
  };

  return (
    <div className="px-4">
      <div className="pt-10 xl:pt-40 flex flex-col mx-auto">
        <h3 className="font-semibold pb-6 text-center text-xl">
          Create new user account
        </h3>
        <form
          action=""
          onSubmit={handleCreateUser}
          className="flex flex-col mx-auto"
        >
          <label htmlFor="" className="">
            Username:{" "}
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value) }
            className="max-w-[300px] border bordre-slate-300 px-2 py-0.5 mb-2"
          />

          <label htmlFor="" className="">
            Password:{" "}
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value) }
            className="max-w-[300px] border bordre-slate-300 px-2 py-0.5"
          />
          <div className="max-w-[300px] mt-4 flex justify-end">
            <button className="max-w-fit px-4 py-1 text-white">
              Create account
            </button>
          </div>
        </form>
        <div className="pt-4 text-center">
          <p>
            Already have an account? Go to{" "}
            <Link href="/login" className="underline text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
