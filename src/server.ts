import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerGetNameTool } from "./tools/getName.js";
import { registerGetCustomersReportTool } from "./tools/getCustomersReport.js";
import { registerListCalendarEventsTool } from "./tools/listCalendarEvents.js";
import { registerFetchCompaniesDataTool } from "./tools/getCompaniesIds.js";

export function createServer(): McpServer {
  const server = new McpServer({
    name: "revi-mcp",
    version: "1.0.0",
  });

  // Register all tools
  registerGetNameTool(server);
  registerGetCustomersReportTool(server);
  registerListCalendarEventsTool(server);
  registerFetchCompaniesDataTool(server);

  return server;
}

export async function startServer(server: McpServer): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Revi MCP Server running on stdio");
}
