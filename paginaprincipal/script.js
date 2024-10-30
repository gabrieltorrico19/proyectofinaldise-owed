document.getElementById('toggle-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('expanded');
});
document.getElementById('user-menu').addEventListener('click', function() {
    document.getElementById('user-options').classList.toggle('hidden');
});

document.getElementById('logout').addEventListener('click', function() {
    window.history.back();
});
