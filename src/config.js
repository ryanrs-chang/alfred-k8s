import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
	NOTION_TOKEN: str(),
	NOTION_DATABASE_ID: str(),
	// NODE_ENV: str({ choices: ["development", "test", "production", "staging"],  }),
});

// Envalid checks for NODE_ENV automatically, and provides the following
// shortcut (boolean) properties for checking its value:
env.isProduction; // true if NODE_ENV === 'production'
env.isTest; // true if NODE_ENV === 'test'
env.isDev; // true if NODE_ENV === 'development'

export { env };
