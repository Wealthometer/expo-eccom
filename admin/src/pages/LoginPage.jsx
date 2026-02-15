import { SignIn } from "@clerk/clerk-react";

function LoginPage() {
  return (
    <div className="h-screen hero">
      <SignIn />
    </div>
  );
}
export default LoginPage;
