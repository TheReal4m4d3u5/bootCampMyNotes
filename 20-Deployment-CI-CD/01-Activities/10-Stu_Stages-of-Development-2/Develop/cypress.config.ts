import { defineConfig } from "cypress";
import coverageTask from "@cypress/code-coverage/task";

export default defineConfig({
	component: {
		devServer: {
			framework: "react",
			bundler: "vite"
		},
		specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",

		// Defines a function to set up Node.js event listeners for Cypress. 
		// These event listeners can hook into the Cypress testing lifecycle to perform tasks, modify the configuration, or extend Cypress' functionality.
		setupNodeEvents(on, config) {

			//The coverageTask function is imported from the @cypress/code-coverage library. It integrates Cypress with a code coverage tool (e.g., Istanbul or NYC).
			//This task listens for events (e.g., test completion) and collects code coverage data while tests run.
			//By calling coverageTask(on, config), you:
			//Register the task with Cypress via the on parameter, enabling coverage tracking.
			//Pass the configuration (config) to ensure compatibility with the Cypress testing environment.
			//Code coverage is typically used to measure how much of your application's code is tested.

			coverageTask(on, config);

			return config;
		},
	},

	e2e: {
		baseUrl: "http://localhost:3000",
		setupNodeEvents(on, config) {
			// implement node event listeners here
			coverageTask(on, config);

			return config;
		},
	},
});
