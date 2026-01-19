import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerGetNameTool(server: McpServer): void {
  server.registerTool(
    "get-name",
    {
      title: "Get Name",
      description: "Get a name",
    },
    async () => ({
      content: [
        {
          type: "text",
          text: `{"name": "Marcelo"}`,
        },
      ],
    })
  );
}
