
// Staff list
const staff = [
  { name: "Adesina", color: "crimson" },
  { name: "Ayomide", color: "royalblue" },
  { name: "Vida", color: "seagreen" },
  { name: "Olayinka", color: "goldenrod" },
  { name: "Comfort", color: "pink" },
  { name: "Damilola", color: "Grey" },
  
  { name: "Glory", color: "Green" },
  
  { name: "Chidinma", color: "Blue" },
  
  { name: "Collins", color: "black" }
];

let assignments = [];
let alreadyClicked = false;

// Generate random assignments (Secret Santa rules)
function assignRecipients() {
  let givers = [...staff];
  let receivers = [...staff];
  let valid = false;

  while (!valid) {
    receivers.sort(() => Math.random() - 0.5);
    valid = givers.every((giver, i) => giver.name !== receivers[i].name);
  }

  assignments = givers.map((giver, i) => ({
    ...giver,
    recipient: receivers[i].name
  }));
}

// Build the circles
function renderCircles() {
  const container = document.getElementById("circles");
  container.innerHTML = "";

  assignments.forEach((person) => {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.background = person.color;
    circle.innerText = "?";

    circle.onclick = () => {
      if (!alreadyClicked) {
        circle.innerText = person.recipient;
        alreadyClicked = true;

        // lock all other circles
        document.querySelectorAll(".circle").forEach(c => {
          if (c !== circle) {
            c.classList.add("locked");
          }
        });
      }
    };

    container.appendChild(circle);
  });
}

// Initialize
window.onload = () => {
  assignRecipients();
  renderCircles();
};

