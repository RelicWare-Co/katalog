import "@mantine/core/styles.css";
import { AppShell, Burger, Group, Image, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import theme from "./theme.js";

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env file");
}

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY as string}
        afterSignOutUrl={"/"}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </ClerkProvider>
    </>
  );
}
