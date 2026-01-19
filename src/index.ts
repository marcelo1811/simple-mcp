import { createServer, startServer } from "./server.js";
import "dotenv/config";

async function main() {
  const server = createServer();
  await startServer(server);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
