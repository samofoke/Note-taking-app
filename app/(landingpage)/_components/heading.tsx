"use client";

import { DynamicLoader } from "@/components/loader/loader";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        The space for your Ideas, Documents, & Planning. Welcome to{" "}
        <span className="underline">Motion</span>
      </h1>
      <h3>
        Motion allows us to connect workspaces where
        <br />
        we work faster, better.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <DynamicLoader size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Motion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Motion Free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
