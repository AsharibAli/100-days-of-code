## Setup

1. **Install Git:**
    - Download Git from the official website: [Git Downloads](https://git-scm.com/downloads).
    - Follow the installation instructions for your specific operating system.
2. **Install Visual Studio Code (VSCode):**
    - Download Visual Studio Code from the official website: [VSCode Downloads](https://code.visualstudio.com/download).
    - Follow the installation instructions for your specific operating system.
3. **Install Node.js:**
    - Download Node.js from the official website: [Node.js Downloads](https://nodejs.org/).
    - Choose the LTS (Long-Term Support) version for stability or the Current version for the latest features.
    - Follow the installation instructions for your specific operating system.
4. **Verify Node.js Installation (Optional):**
    - Open your terminal or Git Bash.
    - Run the following command to check if Node.js is installed:
        
        ```
        node -v
        
        ```
        
    - It should display the Node.js version if it's installed correctly.
5. **Install TypeScript:**
    - Once Node.js is installed, you can use the Node Package Manager (npm) to install TypeScript globally.
    - Open your terminal or Git Bash.
    - Run the following command to install TypeScript:
        
        ```
        npm install -g typescript
        
        ```
        
    - After installation, verify TypeScript by running:
        
        ```
        tsc -v
        
        ```
        
    - It should display the TypeScript version if it's installed correctly.

---

## **Create Your First Application**

1. Create a new folder on your desktop, for example, named "typescript."
2. Inside the "typescript" folder, create a new file called `index.ts` and open it in Visual Studio Code (VS Code).
3. Write the following code in `index.ts`:

```tsx
console.log(Math.floor(11.3));

```

1. Notice that VS Code highlights `Math.floor()` as if there's a problem even before compiling or running the code.
2. If you hover over it, you will see the message "(expected 1 argument but got 0)."
3. To fix the problem, add a number (e.g., 11.3) as an argument inside `Math.floor()`.

---

## **Running the Code**

**Open Git Bash:**

1. Open the Git Bash terminal and navigate to the directory where you created your TypeScript file on the desktop.

```bash
cd /desktop/typescript/
```

**Compile TypeScript to JavaScript:**

1. Use the `tsc` command to compile it into JavaScript. For example:

```bash
tsc
```

This will generate a JavaScript file with the same name as your TypeScript file (`index.js`).

**Run the JavaScript File:**

1. Once the TypeScript file is compiled, you can run the resulting JavaScript file using Node.js. For example:

```bash
node filename.js
```

In this case 

```bash
node filename.js
```

This will execute your JavaScript code, and you should see the output in the terminal.

---

## **Configuration**

1. Let's begin by structuring the project:
    - Create a `src` folder.
    - Move the `index.ts` file into the newly created `src` folder.
2. **Generate a tsconfig.json File:**
Create a `tsconfig.json` file with default settings using this command:
    
    ```bash
    tsc --init
    ```
    
    This command will generate a `tsconfig.json` file in your project directory, including default compiler options.
    
3. **Customize tsconfig.json (Optional):**
Open the `tsconfig.json` file in a text editor to tailor compiler options to your project's needs. Pay special attention to these key configurations:
    - `"rootDir": "./src"`
        - **rootDir**: Defines the root directory for TypeScript source files.
    - `"outDir": "./dist"`
        - **outDir**: Specifies the output directory for compiled JavaScript files. (that folder and file are going to be generated)
4. **Save tsconfig.json:**
Save your changes to the `tsconfig.json` file if you made any customizations.
5. **Compile Your TypeScript Code:**
After creating and configuring `tsconfig.json`, compile your TypeScript code by running:
    
    ```bash
    tsc
    ```
    
    TypeScript will utilize the settings defined in your `tsconfig.json` to compile your project.
    
6. **Run the Compiled JavaScript Code:**
Once your TypeScript code is compiled to JavaScript, you can run the compiled JavaScript file using Node.js. Use the following command
    
    ```bash
    node dist/filename.js
    ```
    
    In this case
    
    ```bash
    node dist/index.js
    ```
    
    This will execute your JavaScript code, and you should see the output in the terminal.