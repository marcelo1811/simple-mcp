import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
// Create server instance
const server = new McpServer({
    name: "revi-mcp",
    version: "1.0.0",
});
// Register tools
server.registerTool("get-name", {
    title: "Get Name",
    description: "Get a name",
}, async () => ({
    content: [
        {
            type: "text",
            text: `The name is Marcelo`,
        },
    ],
}));
// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Weather MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
