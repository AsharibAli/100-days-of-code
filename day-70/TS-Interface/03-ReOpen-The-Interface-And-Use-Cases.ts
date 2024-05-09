/**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/

// Homepage Interface Declaration
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page Interface Reopening
interface Settings {
  sidebar: boolean;
}

// Contact Page Interface Reopening
interface Settings {
  external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};
