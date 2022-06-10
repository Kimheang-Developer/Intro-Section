function openNav() {
    document.getElementById('sidebar').style.width = "240px";
    document.getElementById('overlay').classList.add('bg-almost-black', 'opacity-75', 'absolute', 'inset-0');
}

function closeNav() {
    document.getElementById('sidebar').style.width = "0";
    document.getElementById('overlay').classList.remove('bg-almost-black', 'opacity-75', 'absolute', 'inset-0');
}

var dropdown = document.getElementsByClassName('dropdown-btn');
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    })
}