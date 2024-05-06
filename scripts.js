// Sample pet data
const pets = [
  { name: "Buddy", type: "Dog", age: 3, personality: "Friendly and playful", image: "buddy.jpg", description: "Buddy is a friendly dog who loves playing fetch and going for walks in the park." },
    { name: "Whiskers", type: "Cat", age: 2, personality: "Independent but affectionate", image: "whiskers.jpg", description: "Whiskers is a sweet cat who enjoys lounging in the sun and cuddling on the couch." },
    { name: "Snowball", type: "Rabbit", age: 1, personality: "Curious and energetic", image: "snowball.jpg", description: "Snowball is an adorable rabbit who loves exploring and nibbling on fresh veggies." },
    { name: "Bubble", type: "Dog", age: 1, personality: "Friendly and active", image: "bubble.jpg", description: "Bubble is a friendly dog which is too cut while sleeping and very active." },
    { name: "Rexa", type: "Cat", age: 2, personality: "Outgoingness but Dominance", image: "rexa.jpg", description: "Rexa is a cute cat who enjoys going out but aggressive with some other cats." },
    { name: "Lexa", type: "Bird", age: 1, personality: "Loyal and energetic", image: "lexa.jpg", description: "Lexa is an adorable sparrow which is very loyal to the owner and very active around the people." },
    { name: "Max", type: "Dog", age: 4, personality: "Gentle and loyal", image: "max.jpg", description: "Max is a loyal dog who loves cuddling and going for long walks." },
    { name: "Mittens", type: "Cat", age: 3, personality: "Curious but shy", image: "mittens.jpg", description: "Mittens is a shy cat who enjoys exploring new places and hiding in cozy spots." },
    { name: "Fluffy", type: "Rabbit", age: 2, personality: "Playful and affectionate", image: "fluffy.jpg", description: "Fluffy is an energetic rabbit who loves hopping around and being cuddled by their owner." },
    { name: "Rocky", type: "Dog", age: 2, personality: "Energetic and adventurous", image: "rocky.jpg", description: "Rocky is an adventurous dog who loves hiking and playing fetch." },
    { name: "Luna", type: "Cat", age: 1, personality: "Mischievous but loving", image: "luna.jpg", description: "Luna is a playful cat who enjoys chasing toys and snuggling with their owner." },
    { name: "Kiwi", type: "Bird", age: 2, personality: "Sociable and talkative", image: "kiwi.jpg", description: "Kiwi is a sociable bird who loves chatting with their owner and learning new tricks." },
    { name: "Charlie", type: "Dog", age: 5, personality: "Calm and obedient", image: "charlie.jpg", description: "Charlie is a calm and obedient dog who enjoys relaxing at home and going for leisurely walks." },
    { name: "Whiskey", type: "Cat", age: 4, personality: "Regal and independent", image: "whiskey.jpg", description: "Whiskey is a regal cat who prefers to observe from a distance but enjoys occasional affection from their owner." },
    { name: "Pepper", type: "Rabbit", age: 3, personality: "Clever and curious", image: "pepper.jpg", description: "Pepper is a clever rabbit who enjoys solving puzzles and exploring new environments." },
    { name: "Bella", type: "Dog", age: 3, personality: "Affectionate and playful", image: "bella.jpg", description: "Bella is an affectionate dog who loves cuddling with their owner and playing fetch in the park." },
    { name: "Smokey", type: "Cat", age: 2, personality: "Mysterious but affectionate", image: "smokey.jpg", description: "Smokey is a mysterious cat who enjoys lounging in sunbeams and receiving gentle pets from their owner." },
    { name: "Sky", type: "Bird", age: 1, personality: "Energetic and curious", image: "sky.jpg", description: "Sky is an energetic bird who loves flying around their cage and exploring new toys." }
  ];


// Function to generate pet profiles
function generatePetProfiles(petsData) {
  const petListSection = document.getElementById("pet-list");

  petListSection.innerHTML = ""; // Clear existing pet profiles

  petsData.forEach(pet => {
    const petProfile = document.createElement("article");
    petProfile.classList.add("pet-profile");

    petProfile.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}">
      <h2>${pet.name}</h2>
      <p><strong>Type:</strong> ${pet.type}</p>
      <p><strong>Age:</strong> ${pet.age} years old</p>
      <p><strong>Personality:</strong> ${pet.personality}</p>
      <p><strong>Description:</strong> ${pet.description}</p>
      <button onclick="adoptPet('${pet.name}')">Adopt ${pet.name}</button>
    `;

    petListSection.appendChild(petProfile);
  });
}

// Function to simulate pet adoption
function adoptPet(petName) {
  alert(`Congratulations! You've adopted ${petName}!`);
}

// Function to show pet profiles
function showPets() {
  document.getElementById("options").style.display = "none"; // Hide options section
  document.getElementById("pet-list").style.display = "block"; // Show pet list section
  generatePetProfiles(pets); // Generate pet profiles
}

// Dummy functions for other options
function startSearch() {
  alert("Search functionality will be implemented soon!");
}

function scheduleAppointment() {
  alert("Appointment scheduling functionality will be implemented soon!");
}

// Generate pet profiles when the page loads
window.addEventListener("load", function() {
  // Add event listeners to buttons
  document.getElementById("options").querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
      this.disabled = true; // Disable button after click
    });
  });
});
