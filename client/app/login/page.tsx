"use client"
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleFirstButtonClick = () => {
    // Redirect to the first page
    router.push('login/serviceProviderLogin');
  };

  const handleSecondButtonClick = () => {
    // Redirect to the second page
    router.push('login/userLogin');
  };

  return (
    <div>
      <h1>Welcome to Next.js Page</h1>
      <button onClick={handleSecondButtonClick}>Go to userLogin Page</button>
      <button onClick={handleFirstButtonClick}>Go to providerLogin Page</button>
    </div>
  );
};

export default Login;
