let addNBSP;

module.exports = {
	activate: function() {
		return atom.commands.add('atom-text-editor', 'sierotki:insertNBSP', function() {
			let editor;
			editor = atom.workspace.getActiveTextEditor();
			return insertNBSP(editor);
		});
	}
};

function insertNBSP(editor)
{

	let text;

	if (editor.getSelectedText()) {

		text = editor.getSelectedText();
		return editor.insertNBSPText(addNBSP(text));

	} else {

		text = editor.getText();
		return editor.setText(addNBSP(text));

	}

}

function addNBSP(text)
{
	text = text.replace(/(\s)([\a-zA-Z])([\s])([\a-zA-Z])([\s])+/g,"$1$2 $4&nbsp;");
	text = text.replace(/(\s)(([\"\(\']?)[\a-zA-Z])[\s]+/g,"$1$2&nbsp;");

	return text;

}
