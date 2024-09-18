import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "@mantine/core";
import { test } from "./test.telefunc";

function Auth() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button onClick={() => test()}>
        Hola
      </Button>
    </header>
  );
}

export default Auth;