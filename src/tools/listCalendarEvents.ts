import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { generateRandomCalendarEvents } from "../utils/dataGenerators.js";

export function registerListCalendarEventsTool(server: McpServer): void {
  server.registerTool(
    "list-calendar-events",
    {
      title: "List Calendar Events",
      description: "List all calendar events",
    },
    async () => ({
      content: [
        {
          type: "text",
          text: `${JSON.stringify(generateRandomCalendarEvents())}`,
        },
      ],
    })
  );
}
