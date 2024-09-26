import LoginForm from "./ui/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#025951] via-[#04D99D] to-[#04D9B2] ">
      <div className="mx-auto w-full max-w-[400px] flex flex-col space-y-2.5">
        <LoginForm />
      </div>
    </main>
  );
}
