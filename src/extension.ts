// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "gluautils" is now active!');

	let editor = vscode.window.activeTextEditor;

	const disposable = vscode.commands.registerCommand('gluautils.helloWorld', () => {
		if (!editor) {return;}
		
		let selection = editor.selection;
		let document = editor.document;
		let range, text;

		if (selection.isEmpty) {
			range = new vscode.Range(0, 0, document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
			text = document.getText(range);
		} else {
			range = selection;
			text = document.getText(selection);
		}

		editor.edit(editBuilder => {
			let newText = text.replace(new RegExp(/(class=)/g, 'ig'), 'className=');
			editBuilder.replace(range, newText);
		});

		vscode.window.showInformationMessage('Hello World from gLua-Utils!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
