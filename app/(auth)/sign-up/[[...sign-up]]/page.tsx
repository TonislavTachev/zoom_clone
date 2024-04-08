import { SignIn, SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex w-full justify-center items-center h-screen">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
