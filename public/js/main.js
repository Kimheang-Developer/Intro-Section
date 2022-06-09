function openNav() {
    document.getElementById('sidebar').style.width = "240px";
    document.getElementById('overlay').classList.add('bg-almost-black', 'opacity-75', 'absolute', 'inset-0');
}

function closeNav() {
    document.getElementById('sidebar').style.width = "0";
    document.getElementById('overlay').classList.remove('bg-almost-black', 'opacity-75', 'absolute', 'inset-0');
}