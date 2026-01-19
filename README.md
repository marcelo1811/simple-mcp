# Simple MCP Server

A Model Context Protocol (MCP) server that provides tools for interacting with simple's data, including customer reports, calendar events, and company information.

## Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- PostgreSQL database (for database-related tools)
- Access to the required environment variables

## Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd simple-mcp
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

   Configure the following environment variables in your `.env` file:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASSWORD=your_password
   ```

## Building the Project

Build the TypeScript project:
```bash
yarn build
```

This will:
- Compile TypeScript files to JavaScript in the `build/` directory
- Make the entry point executable

## Running the MCP Server

### Development

To run the server directly (for testing):
```bash
node build/index.js
```

The server runs on stdio (standard input/output) and communicates via the MCP protocol.

### Using with Cursor

To use this MCP server with Cursor, add it to your Cursor settings:

1. Open Cursor Settings
2. Navigate to MCP Servers configuration
3. Add the following configuration:

```json
{
  "mcpServers": {
    "simple-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/simple-mcp/build/index.js"],
      "env": {
        "DB_HOST": "localhost",
        "DB_PORT": "5432",
        "DB_NAME": "postgres",
        "DB_USER": "postgres",
        "DB_PASSWORD": "your_password"
      }
    }
  }
}
```

Replace `/absolute/path/to/simple-mcp` with the actual absolute path to this project directory.

### Using with Other MCP Clients

The server communicates via stdio using the MCP protocol. Any MCP-compatible client can connect to it by running:
```bash
node build/index.js
```

## Available Tools

The server provides the following tools:

- **getName**: Get a name
- **getCustomersReport**: Get a customers report
- **listCalendarEvents**: List all calendar events
- **fetchCompaniesData**: Query PostgreSQL database to fetch all companies data from the companies table

## Project Structure

```
simple-mcp/
├── src/
│   ├── index.ts          # Main entry point
│   ├── server.ts         # MCP server setup
│   ├── tools/            # Tool implementations
│   └── utils/            # Utility functions (database, data generators)
├── build/                # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

## Development

- Source files are in `src/`
- Compiled output goes to `build/`
- Run `yarn build` after making changes to TypeScript files

## Troubleshooting

- **Database connection errors**: Ensure PostgreSQL is running and the connection details in `.env` are correct
- **Build errors**: Make sure all dependencies are installed with `yarn install`
- **Permission errors**: The build script sets executable permissions, but if issues persist, run `chmod +x build/index.js`
