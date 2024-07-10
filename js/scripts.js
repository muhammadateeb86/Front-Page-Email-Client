document.getElementById('brand-kit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-feedback').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('form-feedback').classList.add('hidden');
    }, 3000);
});

document.getElementById('logo').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('logo-preview').src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

function selectColor(element) {
    document.querySelectorAll('.color').forEach(function(color) {
        color.classList.remove('selected-color');
    });
    element.classList.add('selected-color');
}
