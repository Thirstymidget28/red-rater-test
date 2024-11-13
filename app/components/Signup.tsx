import React, { useState } from "react";
import Image from "next/image";

const Signup = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFName(e.target.value);
    }

    const handleLName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLName(e.target.value);
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignup = async () => {
        if (fname && lname && email && password) {
            try {
                // Call the API route to create the user
                const res = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fname, lname, email, password }),
                });

                if (res.ok) {
                    // Optionally clear the form fields after successful signup
                    setFName('');
                    setLName('');
                    setEmail('');
                    setPassword('');
                    <div role="alert" className="alert alert-success">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Signup Successful!</span>
                    </div>
                } else {
                    throw new Error('Failed to sign up');
                }
            } catch (error) {
                console.error('Error during signup:', error);
                <div role="alert" className="alert alert-error">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Signup Failed.</span>
                </div>
            }
        } else {
            <div role="alert" className="alert alert-warning">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Please fill out all of the fields.</span>
            </div>
        }
    };

    return (
        <dialog id="signup_modal" className="modal modal-bottom sm:modal-middle">
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
                    <div>
                        <h4 className="font-bold text-xl">Full Name</h4>
                        <div className="flex justify-between mb-2">
                            <div>
                                <label className="input input-bordered flex items-center gap-2 mb-2">
                                    <input
                                        type="text"
                                        className="grow"
                                        value={fname}
                                        onChange={handleFName}
                                    />
                                </label>
                                <p className="text-gray-400">First Name</p>
                            </div>
                            <div>
                                <label className="input input-bordered flex items-center gap-2 mb-2">
                                    <input 
                                        type="text" 
                                        className="grow" 
                                        value={lname}
                                        onChange={handleLName}
                                    />
                                </label>
                                <p className="text-gray-400">Last Name</p>
                            </div>
                        </div>
                        <h4 className="font-bold text-xl">Email</h4>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <input
                                type="text"
                                className="grow"
                                placeholder="ex: johndoe@example.com"
                                value={email}
                                onChange={handleEmail}
                            />
                        </label>
                        <h4 className="font-bold text-xl">Password</h4>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <input 
                                type="password" 
                                className="grow" 
                                value={password}
                                onChange={handlePassword}
                            />
                        </label>
                        <button 
                            className="btn bg-red-600 w-full hover:text-white hover:bg-black"
                            onClick={handleSignup}
                        >
                            Signup
                        </button>
                    </div>
                    <p className="self-center">
                        Don't have an account?{" "}
                        <button
                            className="text-red-600 underline"
                            onClick={() => {
                                const currModal = document.getElementById(
                                    "signup_modal"
                                ) as HTMLDialogElement;
                                const nextModal = document.getElementById(
                                    "login_modal"
                                ) as HTMLDialogElement;

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
                            Login here
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

export default Signup;
