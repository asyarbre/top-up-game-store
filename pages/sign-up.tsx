import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "../components/organisms/SignUpForm";

function signUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link className="navbar-brand" href="/">
              <Image src="/icon/logo.png" alt="logo" width="60" height="60" />
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}

export default signUp;
