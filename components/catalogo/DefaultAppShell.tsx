import { AppShell } from "@mantine/core";
import { DropZone } from "@measured/puck";

function DefaultAppShell() {
  return (
    <AppShell>
      <AppShell.Header>
        <DropZone zone="header" allow={["DefaultHeader"]} />
      </AppShell.Header>
    </AppShell>
  );
}

export default DefaultAppShell;
