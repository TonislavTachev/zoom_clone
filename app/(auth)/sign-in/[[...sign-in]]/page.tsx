import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="flex w-full justify-center items-center h-screen">
      <SignIn />
    </main>
  );
};

export default SignInPage;
