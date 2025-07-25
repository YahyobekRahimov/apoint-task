import { Toaster } from "sonner";
import AuthInitializer from "./auth-init";
import ReduxProvider from "./redux";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReduxProvider>
        <AuthInitializer />
        <Toaster />
        {children}
      </ReduxProvider>
    </>
  );
}
