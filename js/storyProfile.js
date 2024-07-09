
    const data = [
      {
        "image": "../image/peopleProfile.webp",
        "name": "Ferdausi Rabbi",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere."
      },
      {
        "image": "../image/peopleProfile1.webp",
        "name": "John Doe",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere."
      },
      {
        "image": "../image/peopleProfile2.png",
        "name": "Jane Smith",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere."
      },
      {
        "image": "../image/peopleProfile3.png",
        "name": "Emily Johnson",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere."
      },
      {
        "image": "../image/peopleProfile4.png",
        "name": "Michael Brown",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere."
      },
      {
        "image": "../image/peopleProfile2.png",
        "name": "Sarah Davis",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere."
      }
    ];

    const profilesContainer = document.getElementById("profiles");

    data.forEach(profile => {
      const profileCard = document.createElement("div");
      profileCard.classList.add("relative", "w-96","h-72", "bg-white", "p-8", "mt-10","rounded-lg");

      profileCard.innerHTML = `
        <div class="absolute top-0 left-28 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40  flex items-center justify-center">
          <img src="${profile.image}" alt="${profile.name}" class="rounded-2xl w-full h-full object-cover">
        </div>
        <h1 class="text-blue-500 text-sm mt-24">By: ${profile.name}</h1>
        <p>${profile.description}</p>
        <button class="bg-blue-600 p-2 rounded-full text-white mt-4">Read More</button>
      `;

      profilesContainer.appendChild(profileCard);
    });
