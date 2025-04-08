const vscode = require('vscode');

let startTime = null;

function activate(context) {
  console.log('DevTime is now active!');

  const startCommand = vscode.commands.registerCommand('devtime.startTracking', () => {
    startTime = new Date();
    vscode.window.showInformationMessage('DevTime: Tracking started!');
  });

  const stopCommand = vscode.commands.registerCommand('devtime.stopTracking', () => {
    if (!(startTime instanceof Date)) {
      vscode.window.showWarningMessage('DevTime: Tracking was not started.');
      return;
    }

    const endTime = new Date();
    const timeSpentMs = endTime.getTime() - startTime.getTime(); // <-- Aqui garantimos que é um número
    const timeSpentSeconds = Math.floor(timeSpentMs / 1000);
    const minutes = Math.floor(timeSpentSeconds / 60);
    const seconds = timeSpentSeconds % 60;

    vscode.window.showInformationMessage(
      `DevTime: You spent ${minutes}m ${seconds}s working on this project.`
    );

    startTime = null;
  });

  context.subscriptions.push(startCommand, stopCommand);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
