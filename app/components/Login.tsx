import React, { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    // Prepare the login request payload
    const body = JSON.stringify({ email, password });

    try {
      // Send the login request to your API (adjust the URL as needed)
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      // Get the response (for example, the JWT token)
      const data = await response.json();

      // Store the JWT token (in cookies or localStorage)
      // For example, using localStorage:
      localStorage.setItem("authToken", data.token);

      // Optionally, you can also close the modal upon successful login
      const loginModal = document.getElementById("login_modal") as HTMLDialogElement;
      if (loginModal) {
        loginModal.close();
      }
      
      // Reload the page
      window.location.href = "/";
    } catch (error) {
      // Handle errors (display error message)
      setError("Invalid email or password.");
    }
  };

  return (
    <dialog id="login_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box relative">
        <div className="banner border-b-4 border-solid border-black flex p-2">
          <h2 className="font-bold text-6xl p-4 me-auto">Red Rater</h2>
          <Image
            src="/DoubleT_BlkWht.png"
            alt="Black and white Texas Tech Double T"
            width={100}
            height={100}
            style={{ width: "20%", height: "20%" }}
          />
        </div>
        <div className="modal-action flex flex-col w-full">
          <form onSubmit={handleLogin} className="w-full">
            <div>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <input
                  type="text"
                  className="grow"
                  placeholder="Texas Tech Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              {error && <p className="text-red-600">{error}</p>}
              <button
                type="submit"
                className="btn bg-red-600 w-full hover:text-white hover:bg-black"
              >
                Login
              </button>
            </div>
          </form>
          <p className="self-center">
            Don't have an account?{" "}
            <button
              className="text-red-600 underline"
              onClick={() => {
                const currModal = document.getElementById("login_modal") as HTMLDialogElement;
                const nextModal = document.getElementById("signup_modal") as HTMLDialogElement;

                if (currModal && nextModal) {
                  // Verify objects are not null
                  if (currModal.open) {
                    currModal.close();
                  }
                  if (!nextModal.open) {
                    nextModal.showModal();
                  }
                }
              }}
            >
              Signup here
            </button>
          </p>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;
