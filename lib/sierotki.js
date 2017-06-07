var movetonextline;

module.exports = {
	activate: function() {
		return atom.commands.add('atom-text-editor', 'sierotki:move', function() {
			var editor;
			editor = atom.workspace.getActiveTextEditor();
			return move(editor);
		});
	}
};

function move(editor)
{

	var text;

	if (editor.getSelectedText()) {

		text = editor.getSelectedText();
		return editor.insertText(movetonextline(text));

	} else {

		text = editor.getText();
		return editor.setText(movetonextline(text));

	}

}

function movetonextline(text)
{
	text = text.replace(/(\s)([\a-zA-Z])([\s])([\a-zA-Z])([\s])+/g,"$1$2 $4&nbsp;");
	text = text.replace(/(\s)(([\"\(\']?)[\a-zA-Z])[\s]+/g,"$1$2&nbsp;");

	return text;

}
