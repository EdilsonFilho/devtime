# DevTime - VSCode Extension

DevTime is a Visual Studio Code extension designed to help developers track the time they spend working on projects. It provides insights into productivity by recording the time spent on coding sessions and detecting user activity. It continues tracking even after restarting VSCode, offering a seamless experience.

---

## 🚀 Features

- **🔄 Automatic Time Tracking**  
  Once tracking is started, DevTime automatically tracks the time spent on a project, even across VSCode restarts.

- **💤 Inactivity Detection**  
  If there is no typing or mouse movement for 5 seconds, time tracking pauses. When activity resumes, tracking continues.

- **💾 Persistent Time Storage**  
  Tracked time is saved locally and loaded automatically when the project is reopened.

- **⏱ Status Bar Display**  
  Time is shown live in the bottom status bar in hours (with two decimal places).

- **🎛 Manual Controls**  
  Start and stop tracking manually via the Command Palette (`Ctrl+Shift+P`).

---

## 🛠 Installation

### 📦 Option 1: Marketplace VSCODE

Coming soon...

---

### 📁 Option 2: Manual installation using `.vsix`

#### Step 1: Clone the repository

```
cd devtime
```

*Note: Remember to add the `devtime` folder and `.devtime.json` to your project's gitignore!*

#### Step 2: Install dependencies

```sh
npm install

```

#### Step 3: Step 3: Package the extension
``` sh
npx vsce package

```
This will generate a .vsix file (e.g., devtime-0.0.1.vsix).

#### Step 4: Install the extension locally
```sh
code --install-extension devtime-0.0.1.vsix
```

## Usage
### Start Tracking Time
After installing and activating the extension, press `Ctrl + Shift + P` to open the command palette.

Type DevTime: `Start Tracking` and hit Enter. The extension will begin tracking your time.

### Stop Tracking Time
To stop tracking, press `Ctrl + Shift + P` again.

Type DevTime: `Stop Tracking` and hit Enter. The extension will stop the tracking and save the accumulated time.

Automatic Time Tracking on Project Open
The extension will automatically start tracking time as soon as you open the project folder, and it will continue tracking even after you close and reopen VSCode.

- Inactivity Detection
If there is no interaction (typing or mouse movement) within 5 seconds, the extension will pause the time tracking. Once the user resumes interaction, the tracking will continue automatically.

- Time Display in the Status Bar
The tracked time will be visible in the status bar at the bottom left of VSCode. The time is displayed in hours with two decimal places for easy tracking.

![image](https://github.com/user-attachments/assets/1ab93845-6cba-43eb-abb8-a83fb191371c)



## License

This project is licensed under the MIT License - see the LICENSE file for details.
