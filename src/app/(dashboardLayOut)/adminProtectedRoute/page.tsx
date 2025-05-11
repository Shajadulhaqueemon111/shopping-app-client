// // src/components/AdminProtectedRoute.tsx
// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/app/authContext/contaxt";
// import toast from "react-hot-toast";

// const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       toast.error("Please login first!");
//       router.push("/login");
//     } else if (user.role !== "admin") {
//       toast.error("Unauthorized access!");
//       router.push("/");
//     }
//   }, [user, router]);

//   if (!user || user.role !== "admin") {
//     return null;
//   }

//   return <>{children}</>;
// };

// export default AdminProtectedRoute;
