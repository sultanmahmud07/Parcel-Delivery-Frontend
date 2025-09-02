import loginImg from "@/assets/images/register-img.jpg";
import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";

export default function Register() {
  return (
    <div className="main-container py-5 md:py-10 pt-32 md:pt-52 flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-6">
      <div className="w-ful full md:w-1/2">
        <img
          src={loginImg}
          alt="Image"
          className="w-full rounded"
        />
      </div>
      <div className="w-full md:w-1/2">
        <RegisterForm />
      </div>
    </div>
  );
}
