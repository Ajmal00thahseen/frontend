"use client";
import Button from "./components/Button";
import Input from "./components/Input";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

export default function Home() {
  interface FormData {
    email: string;
    password: string;
  }
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    console.log(formData);
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log(formData)
  //  // axios
  //     .post("/user", {

  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  }
  
  return (
    <div className="flex flex-col justify-center items-center py-8 min-h-screen bg-[url('../public/images/finalbg.svg')] bg-cover">
      <div className="flex flex-col h-2/3 w-96 rounded-xl bg-[#f5f6f9] *shadow-[#0097fc] shadow-xl">
        <div className="rounded-t-xl">
          <h1 className="flex flex-col text-black text-center m-4 py-4 text-3xl font-sans font-extrabold ">
            Sign in
          </h1>
        </div>
        <form
          className="flex flex-col px-8 py-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          >
            Email
          </Input>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          >
            Password
          </Input>
          <a
            href="forgotPassword"
            className="text-blue-700 text-end font-light text-sm "
          >
            Forgot password?
          </a>
          <div className="flex flex-col items-center my-8">
            <Button type="submit">
              Sign in
            </Button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <hr className="w-[38%] border-t-2 border-gray-400" />
          <span className="mx-2 text-gray-500">Or</span>
          <hr className="w-[38%] border-t-2 border-gray-400" />
        </div>
        <div className="flex justify-around my-2 py-4 ">
          <FcGoogle size={50} className="rounded-full p-2" />
          <SiFacebook color="blue" size={50} className="rounded-full p-2" />
          <RiTwitterXFill
            color="black"
            size={50}
            className="rounded-full p-2"
          />
        </div>
      </div>
    </div>
  );
}
