const vscode = require('vscode');

let startTime = null;
let intervalId = null;
let statusBarItem = null;

function activate(context) {
  console.log('DevTime is now active!');

  const startCommand = vscode.commands.registerCommand('devtime.startTracking', () => {
    if (startTime !== null) {
      vscode.window.showInformationMessage('DevTime: Tracking is already running.');
      return;
    }

    startTime = new Date();
    vscode.window.showInformationMessage('DevTime: Tracking started!');

    // Cria o item na barra de status
    if (!statusBarItem) {
      statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
      statusBarItem.show();
    }

    updateStatusBar(); // mostra imediatamente
    intervalId = setInterval(updateStatusBar, 1000); // atualiza a cada segundo
  });

  const stopCommand = vscode.commands.registerCommand('devtime.stopTracking', () => {
    if (!startTime) {
      vscode.window.showWarningMessage('DevTime: Tracking is not running.');
      return;
    }

    clearInterval(intervalId);
    intervalId = null;

    if (statusBarItem) {
      statusBarItem.hide();
    }

    const endTime = new Date();
    const timeSpentMs = endTime.getTime() - startTime.getTime();
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

function updateStatusBar() {
  if (!startTime || !statusBarItem) return;

  const now = new Date();
  const elapsedMs = now.getTime() - startTime.getTime();
  const totalSeconds = Math.floor(elapsedMs / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  statusBarItem.text = `$(watch) DevTime: ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  statusBarItem.tooltip = 'Time spent on this project (since tracking started)';
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function deactivate() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  if (statusBarItem) {
    statusBarItem.dispose();
  }
}

module.exports = {
  activate,
  deactivate
};
