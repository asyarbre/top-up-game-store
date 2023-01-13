import React, { useState } from "react";
import Link from "next/link";
import cx from "classnames";
import { json } from "stream/consumers";
import { useRouter } from "next/router";

export default function fSignUpForm() {
  const router = useRouter();

  const className = {
    label: cx("form-label text-lg fw-medium color-palette-1 mb-10"),
    signUp: cx(
      "btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
    ),
    signIn: cx(
      "btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
    ),
  };
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const userForm = {
      name,
      email,
      password,
    };

    localStorage.setItem("user-form", JSON.stringify(userForm));
    router.push("/sign-up-photo");
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label className={className.label}>Full Name</label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="pt-30">
        <label className={className.label}>Email Address</label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="pt-30">
        <label className={className.label}>Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button className={className.signUp} type="button" onClick={onSubmit}>
          Continue
        </button>
        <Link className={className.signIn} href="/sign-in" role="button">
          Sign In
        </Link>
      </div>
    </>
  );
}
