"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { DynamicLoader } from "@/components/loader/loader";

const MainDocumentsLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <DynamicLoader size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return <div>{children}</div>;
};

export default MainDocumentsLayout;
