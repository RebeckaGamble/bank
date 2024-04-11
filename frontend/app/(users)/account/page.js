"use client";
import React, { useEffect, useState } from "react";

export default function userPage() {
  const [currentAmount, setCurrentAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccountData();
  }, []);

  const fetchAccountData = async () => {
    try {
      const response = await fetch("http://localhost:4000/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        const accountData = await response.json();
        console.log("Account data:", accountData);
        setCurrentAmount(accountData.balance);
        setUsername(accountData.username); // Set the username state - not working
      } else {
        console.error("Failed to fetch account data");
      }
    } catch (error) {
      console.error("Error fetching account data:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleDep = async () => {
    console.log("Deposit amount: ", depositAmount);
    let newAmount = currentAmount + Number(depositAmount); // Convert depositAmount to number
    setCurrentAmount(newAmount);

    try {
      const response = await fetch(
        "http://localhost:4000/account/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ depositAmount }),
        }
      );

      if (response.ok) {
        setDepositAmount("");
        console.log("Money deposited successfully.");
      } else {
        console.error("Failed to deposit money");
      }
    } catch (error) {
      console.error("Error depositing money:", error);
    }
  };

  /*
  if (loading) {
    return <div>Loading...</div>;
  }*/

  return (
    <div className="px-4 w-full xl:max-w-[90rem] xl:mx-auto">
      <h3 className="text-center font-semibold text-[20px] py-4">
        My Account - {username}
      </h3>
      <div className="pb-10">
        <h3 className="font-semibold">
          Balance:{" "}
          {loading ? <div>Loading...</div> : <span> {currentAmount} SEK</span>}
        </h3>
      </div>
      <div>
        <h3 className="font-semibold">Deposit money</h3>
        <div>
          <input
            onChange={(e) => setDepositAmount(e.target.value)}
            pattern="[0-9]*"
            type="text"
            value={depositAmount}
            className="border border-slate-300 px-2 py-0.5"
          />
          <button onClick={handleDep} className="px-4 py-1 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
