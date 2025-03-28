function checkAvatar() {
    const avatarUrl = localStorage.getItem('avatarUrl') || localStorage.getItem('selectedAvatar');
    if (!avatarUrl || !isValidUrl(avatarUrl)) {
        document.getElementById('userAvatar').src = 'avater/default-avatar.png';
    }
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

window.addEventListener('load', checkAvatar);