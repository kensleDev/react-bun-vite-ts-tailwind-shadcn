import { cva } from "class-variance-authority";
import { cn } from "../utils";
import { useToast } from "@/lib/components/ui/use-toast";
import { ToastAction } from "./ui/toast";

interface ServerStatusProps {
  status: boolean;
  fetchStatus: () => void;
}

export function ServerConnected({ status, fetchStatus }: ServerStatusProps) {
  const { toast } = useToast();

  const serverConnectedVariants = cva(
    "flex flex-col items-center justify-center fixed right-0 top-0 text-xs lg:text-md p-2 lg:4 border-2 m-1 rounded-2xl m-2",
    {
      variants: {
        variant: {
          default: "border-red-400",
          connected: "border-green-400",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    },
  );

  function handleClick() {
    toast({
      variant: status ? "destructive" : "default",
      title: status ? "Connected!" : "Not connected!",
      action: status ? undefined : (
        <ToastAction onClick={() => fetchStatus()} altText="Check status">
          Check status
        </ToastAction>
      ),
    });
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        serverConnectedVariants({ variant: status ? "connected" : "default" }),
      )}
    >
      {status ? <p>✅</p> : <p>❌</p>}
    </div>
  );
}
