"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin"/>
          Please wait...
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          Submit
        </Button>
      )}
    </>
  );
}