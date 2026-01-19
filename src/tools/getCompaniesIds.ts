import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { executeQuery } from "../utils/database.js";

export function registerFetchCompaniesDataTool(server: McpServer): void {
  server.registerTool(
    "fetch-companies-data",
    {
      title: "Fetch Companies Data",
      description: "Query PostgreSQL database to fetch all companies data from the companies table",
    },
    async () => {
      try {
        const result = await executeQuery("SELECT * FROM companies");
        
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: true,
                count: result.rows.length,
                data: result.rows,
              }),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : String(error),
              }),
            },
          ],
        };
      }
    }
  );
}
