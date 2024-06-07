function toggleTheme() {
    var root = document.documentElement;
    if (root.classList.contains('light-theme')) {
        root.classList.remove('light-theme');
    } else {
        root.classList.add('light-theme');
    }
}