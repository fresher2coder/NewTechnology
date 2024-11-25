document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('toggle-form');
    const textElement = document.getElementById('text');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const newText = document.getElementById('new-text').value;
        const bold = document.getElementById('bold');
        const italic = document.getElementById('italic');
        const underline = document.getElementById('underline');

        let styledText = newText;

        if (bold.checked) {
            styledText = `<strong>${styledText}</strong>`;
        }
        if (italic.checked) {
            styledText = `<em>${styledText}</em>`;
        }
        if (underline.checked) {
            styledText = `<u>${styledText}</u>`;
        }

        textElement.innerHTML = styledText;
    });
});
