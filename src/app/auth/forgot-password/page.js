"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import logo from "../../../public/logo.png";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Forgot password submitted for:", email);

        // TODO: Replace with real API call
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF3ED] px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="h-auto mb-4 flex justify-center">
                        <Link href="/">
                            <Image
                                src={""}
                                alt="Logo"
                                width={110}
                                height={30}
                                className="hover:opacity-90 transition-opacity"
                            />
                        </Link>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Forgot Password</h1>
                    <p className="text-gray-600 mt-1">
                        Enter your email and we’ll send you a reset link.
                    </p>
                </div>

                {submitted ? (
                    <div className="text-center text-green-600 font-medium">
                        Password reset link sent! Please check your email.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB5704]"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FB5704] text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FB5704] transition duration-300"
                        >
                            Send Reset Link
                        </button>
                    </form>
                )}

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Remembered your password?{" "}
                        <Link href="/auth/login" className="font-medium text-[#FB5704] hover:text-orange-700">
                            Back to login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
