## DevTime - VSCode Extension
DevTime is a Visual Studio Code extension designed to help developers track the time they spend working on projects. It provides insights into productivity by recording the time spent on coding sessions, and it also tracks resource usage, such as CPU utilization. This extension automatically continues to track time even after restarting VSCode, offering a seamless experience.

## Features
- Automatic Time Tracking: Once the user starts tracking, the extension will automatically keep track of the time spent on a project, including after VSCode restarts.

- Inactivity Detection: The extension pauses time tracking if there is no user interaction (no typing or mouse movements) for 5 seconds. Once activity resumes, the tracking starts again.

- Persistent Time Storage: The tracked time is saved and loaded automatically when the user reopens the project, ensuring that the tracking continues across sessions.

- Status Bar Display: The tracked time is displayed in the status bar of VSCode, showing the total time spent in hours with precision up to two decimal places.

Customizable Start and Stop Tracking: Users can start and stop the tracking manually, allowing flexibility for different workflows.

## Installation
1. Open your VSCode editor.

2. Open the Extensions tab in the sidebar or press Ctrl + Shift + X.

3. Search for DevTime.

4. Click on Install to install the extension.

Alternatively, you can manually install the extension from a local repository using the following steps:

i) Clone the repository and Navigate to the extension directory:
```
cd devtime
```
ii) Install dependencies:
```sh
npm install
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
