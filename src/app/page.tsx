"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to "/admin" when the component mounts
    router.push("/admin");
  }, [router]);

  return (
    <div className="w-full h-screen flex justify-center items-center font-bold text-2xl">
      Redirecting to the dashboard...
    </div>
  );
}
