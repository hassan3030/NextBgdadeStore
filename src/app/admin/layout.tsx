import React from "react"
import AdminSidebar from "./AdminSidebar";
// Metadata for the site 
import type { Metadata } from 'next';
import { cookies } from "next/headers";
// next function make as href redirect(path);
import { redirect } from "next/navigation";
import { verifyTokenForPage } from "@/utils/verifyToken";

// interface Admin Dashboard Layout Props
interface AdminDashboardLayoutProps {
  children: React.ReactNode;
  //  React.ReactNode; type of children
}

export const metadata: Metadata = {
  title: 'Admin Dashboard',  // default title for the page
  description: 'This is admin dashboard', // default description for the page
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  const token = cookies().get("jwtToken")?.value;

  if (!token) redirect("/");

  const payload = verifyTokenForPage(token);
  if (payload?.isAdmin === false) redirect("/");
  
  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden">
        <div className="overflow-height w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5">
          <AdminSidebar />
        </div>
        <div className="overflow-height w-full lg:w-4/5 overflow-y-scroll">
          {children}
        </div>
    </div>
  )
}

export default AdminDashboardLayout;