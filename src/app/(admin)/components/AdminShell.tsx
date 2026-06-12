"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./Header";

const AdminShell = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <main className="flex relative min-h-[calc(100vh-4rem)]">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        {children}
      </main>
    </>
  );
};

export default AdminShell;
