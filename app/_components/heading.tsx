"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
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
      <Button>
        Enter Motion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
