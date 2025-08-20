// RSVP hantering
const form = document.getElementById("rsvp-form");
const guestList = document.getElementById("guest-list");
let guests = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const response = document.getElementById("response").value;

  if (name && response) {
    guests.push({ name, response });
    renderGuests();
    form.reset();
  }
});

function renderGuests() {
  guestList.innerHTML = "<h3>Svar:</h3>";
  guests.forEach(g => {
    const p = document.createElement("p");
    p.textContent = `${g.name}: ${g.response}`;
    guestList.appendChild(p);
  });
}

// Fotoalbum
const input = document.getElementById("photo-input");
const gallery = document.getElementById("gallery");

input.addEventListener("change", () => {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});
