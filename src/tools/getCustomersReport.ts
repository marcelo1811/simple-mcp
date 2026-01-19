import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { generateRandomCustomersArray } from "../utils/dataGenerators.js";

export function registerGetCustomersReportTool(server: McpServer): void {
  server.registerTool(
    "get-customers-report",
    {
      title: "Get Customers Report",
      description: "Get a customers report",
    },
    async () => ({
      content: [
        {
          type: "text",
          text: `${JSON.stringify(generateRandomCustomersArray())}`,
        },
      ],
    })
  );
}
