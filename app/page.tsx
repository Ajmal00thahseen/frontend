import Button from "./components/Button";
import Input from "./components/Input";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-8 min-h-screen bg-cover bg-[url('../public/images/login_bg.jpg')] bg-no-repeat ">
      <div className="flex flex-col h-2/3 w-96 rounded-xl bg-[#f5f6f9]">
        <div className="rounded-t-xl">
          <h1 className="flex flex-col text-black text-center m-4 py-4 text-3xl font-sans font-extrabold ">
            Sign in
          </h1>
        </div>
        <form className="flex flex-col px-8 py-4">
          <Input type="email">Email</Input>
          <Input type="password">Password</Input>
          <a
            href="forgotPassword"
            className="text-blue-700 text-end font-light text-sm "
          >
            Forgot password?
          </a>
          <div className="flex flex-col items-center my-10">
            <Button>Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
