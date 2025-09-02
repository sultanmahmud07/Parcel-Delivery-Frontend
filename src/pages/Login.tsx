import loginImg from "@/assets/images/login-img.jpg";
import { LoginForm } from "@/components/modules/Authentication/LoginForm";

export default function Login() {
  return (
    <div className="main-container  py-5 md:py-20 pt-32 md:pt-52 flex flex-col-reverse md:flex-row  gap-4 md:gap-16">
      <div className="w-full md:w-1/2">
        <LoginForm />
      </div>
      <div className="w-ful full md:w-1/2">
        <img
          src={loginImg}
          alt="Image"
          className="w-full rounded"
        />
      </div>
    </div>
  );
}
