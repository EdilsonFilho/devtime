const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

let startTime = null;
let accumulatedTimeMs = 0;
let interval = null;
let statusBarItem = null;
let storageFilePath = '';

function activate(context) {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) return;

  const workspacePath = workspaceFolders[0].uri.fsPath;
  storageFilePath = path.join(workspacePath, '.devtime.json');

  loadStoredTime();

  const startCmd = vscode.commands.registerCommand('devtime.startTracking', () => {
    if (!startTime) {
      startTime = new Date();
      startInterval();
      vscode.window.showInformationMessage('DevTime tracking started.');
    } else {
      vscode.window.showInformationMessage('Tracking is already running.');
    }
  });

  const stopCmd = vscode.commands.registerCommand('devtime.stopTracking', () => {
    if (startTime) {
      const now = new Date();
      accumulatedTimeMs += now.getTime() - startTime.getTime();
      startTime = null;
      clearInterval(interval);
      saveTime();
      updateStatusBar();
      vscode.window.showInformationMessage('DevTime tracking stopped.');
    } else {
      vscode.window.showInformationMessage('Tracking is not running.');
    }
  });

  context.subscriptions.push(startCmd, stopCmd);

  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  statusBarItem.show();

  // ✅ Inicia automaticamente o tracking ao abrir o projeto
  startTime = new Date();
  startInterval();
  updateStatusBar();
}

function startInterval() {
  interval = setInterval(() => {
    updateStatusBar();
  }, 1000);
}

function updateStatusBar() {
  let totalMs = accumulatedTimeMs;
  if (startTime) {
    const now = new Date();
    totalMs += now.getTime() - startTime.getTime();
  }

  const totalHours = totalMs / (1000 * 60 * 60);
  const displayTime = totalHours.toFixed(2);

  if (statusBarItem) {
    statusBarItem.text = `$(clock) DevTime: ${displayTime} hrs`;
  }
}

function loadStoredTime() {
  try {
    if (fs.existsSync(storageFilePath)) {
      const data = fs.readFileSync(storageFilePath, 'utf8');
      const parsed = JSON.parse(data);
      accumulatedTimeMs = typeof parsed.accumulatedTimeMs === 'number' ? parsed.accumulatedTimeMs : 0;
    }
  } catch (err) {
    console.error('Failed to load stored DevTime:', err);
  }
}

function saveTime() {
  try {
    const data = { accumulatedTimeMs };
    fs.writeFileSync(storageFilePath, JSON.stringify(data), 'utf8');
  } catch (err) {
    console.error('Failed to save DevTime:', err);
  }
}

function deactivate() {
  if (startTime) {
    const now = new Date();
    accumulatedTimeMs += now.getTime() - startTime.getTime();
    saveTime();
  }
}

module.exports = {
  activate,
  deactivate
}; 
