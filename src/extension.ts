// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscodeextension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscodeextension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		// vscode.window.showInformationMessage('Hello World from VSCodeExtension!');
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		let document = editor.document;
		let selection = editor.selection;
		let text = document.getText(selection);
		let result = text.split('').reverse().join('');
		editor.edit(editBuilder => {
			editBuilder.replace(selection, result);
		});
	});

	let disposable2 = vscode.commands.registerCommand('vscodeextension.sayHello', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		// vscode.window.showInformationMessage('Hello World from VSCodeExtension!');
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		let document = editor.document;
		let selection = editor.selection;
		let text = document.getText(selection);
		let result = text.split('').reverse().join('');
		editor.edit(editBuilder => {
			editBuilder.replace(selection, result);
		});
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() { }
