import DefaultAppShell from "@/components/catalogo/DefaultAppShell";
import DefaultHeader from "@/components/catalogo/DefaultHeader";
import { Button } from "@mantine/core";
import type { Config } from "@measured/puck";

const config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
    MantineButton: {
      fields: {
        children: {
          type: "text",
        },
      },
      render({ children }) {
        return <Button>{children}</Button>;
      },
    },
    DefaultAppshell: {
      fields: {},
      render: () => {
        return <DefaultAppShell/>;
      },
    }, 
    DefaultHeader: {
      fields: {},
      render: () => {
        return <DefaultHeader/>;
      },
    }
  },
} satisfies Config;

export default config;