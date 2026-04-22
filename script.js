// Top 25 universities in Pakistan (approximate ranking labels for quick reference).
const universities = [
  {
    name: "National University of Sciences and Technology (NUST)",
    city: "Islamabad",
    ranking: "Top 1-2 (National)",
    description: "A leading public research university known for engineering, technology, and innovation-driven programs."
  },
  {
    name: "Quaid-i-Azam University (QAU)",
    city: "Islamabad",
    ranking: "Top 1-3 (National)",
    description: "Well-regarded for natural sciences, social sciences, and strong research output."
  },
  {
    name: "Lahore University of Management Sciences (LUMS)",
    city: "Lahore",
    ranking: "Top 1-3 (National)",
    description: "Prestigious private university with high-quality business, law, and computer science education."
  },
  {
    name: "University of the Punjab (PU)",
    city: "Lahore",
    ranking: "Top 5-10 (National)",
    description: "One of Pakistan's oldest and largest universities with a broad range of disciplines."
  },
  {
    name: "Aga Khan University (AKU)",
    city: "Karachi",
    ranking: "Top 5 (National)",
    description: "Internationally recognized institution focused on health sciences, medicine, and research."
  },
  {
    name: "COMSATS University Islamabad (CUI)",
    city: "Islamabad",
    ranking: "Top 5-8 (National)",
    description: "Popular for computing, engineering, and applied sciences with campuses across Pakistan."
  },
  {
    name: "University of Engineering and Technology (UET Lahore)",
    city: "Lahore",
    ranking: "Top 5-10 (National)",
    description: "A top engineering university with long-standing excellence in technical education."
  },
  {
    name: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
    city: "Islamabad",
    ranking: "Top 5-10 (National)",
    description: "Highly respected for nuclear engineering, applied sciences, and postgraduate research."
  },
  {
    name: "University of Karachi (UoK)",
    city: "Karachi",
    ranking: "Top 10-15 (National)",
    description: "Major public university offering extensive undergraduate and postgraduate programs."
  },
  {
    name: "University of Agriculture Faisalabad (UAF)",
    city: "Faisalabad",
    ranking: "Top 10-15 (National)",
    description: "Leading institution in agriculture, food sciences, and rural development studies."
  },
  {
    name: "Bahauddin Zakariya University (BZU)",
    city: "Multan",
    ranking: "Top 15-20 (National)",
    description: "A key public university in South Punjab with programs in sciences, arts, and management."
  },
  {
    name: "Government College University (GCU Lahore)",
    city: "Lahore",
    ranking: "Top 10-15 (National)",
    description: "Historic university known for academic excellence in sciences, humanities, and research."
  },
  {
    name: "Institute of Business Administration (IBA Karachi)",
    city: "Karachi",
    ranking: "Top 5-10 (National)",
    description: "Premier business school with strong programs in management, economics, and computer science."
  },
  {
    name: "The Islamia University of Bahawalpur (IUB)",
    city: "Bahawalpur",
    ranking: "Top 20-25 (National)",
    description: "Expanding public-sector university with growing strengths in science and professional studies."
  },
  {
    name: "University of Peshawar",
    city: "Peshawar",
    ranking: "Top 15-20 (National)",
    description: "A major educational hub in Khyber Pakhtunkhwa with diverse faculties and departments."
  },
  {
    name: "International Islamic University Islamabad (IIUI)",
    city: "Islamabad",
    ranking: "Top 15-20 (National)",
    description: "Offers a blend of modern and Islamic education across social, legal, and technical fields."
  },
  {
    name: "FAST National University (NUCES)",
    city: "Islamabad / Karachi / Lahore",
    ranking: "Top 10-15 (National)",
    description: "Highly regarded for computer science, software engineering, and technology-focused education."
  },
  {
    name: "University of Sindh",
    city: "Jamshoro",
    ranking: "Top 20-25 (National)",
    description: "One of the oldest universities in Sindh with programs across arts, sciences, and commerce."
  },
  {
    name: "University of Balochistan",
    city: "Quetta",
    ranking: "Top 20-25 (National)",
    description: "A central higher education institution in Balochistan with broad academic offerings."
  },
  {
    name: "NED University of Engineering and Technology",
    city: "Karachi",
    ranking: "Top 10-15 (National)",
    description: "Well-known for engineering and technical disciplines with strong industry connections."
  },
  {
    name: "University of Gujrat (UOG)",
    city: "Gujrat",
    ranking: "Top 20-25 (National)",
    description: "A modern public university providing quality education in social and natural sciences."
  },
  {
    name: "Hazara University",
    city: "Mansehra",
    ranking: "Top 20-25 (National)",
    description: "Recognized regional university supporting research and education in multiple disciplines."
  },
  {
    name: "Khyber Medical University (KMU)",
    city: "Peshawar",
    ranking: "Top 15-20 (National)",
    description: "Specialized medical university focused on health sciences, medicine, and allied programs."
  },
  {
    name: "Dow University of Health Sciences (DUHS)",
    city: "Karachi",
    ranking: "Top 15-20 (National)",
    description: "Prominent health sciences university offering medical, dental, and biomedical programs."
  },
  {
    name: "Air University",
    city: "Islamabad",
    ranking: "Top 15-20 (National)",
    description: "A respected institution with strengths in aerospace, engineering, management, and computing."
  }
];

const universityList = document.getElementById("universityList");
const searchInput = document.getElementById("searchInput");

/**
 * Creates and renders card items into the popup list.
 * @param {Array} items - Universities to render.
 */
function renderUniversities(items) {
  if (!items.length) {
    universityList.innerHTML =
      '<div class="empty-state">No universities found. Try a different name.</div>';
    return;
  }

  const cardsMarkup = items
    .map(
      (uni) => `
      <article class="card">
        <h2>${uni.name}</h2>
        <div class="meta">
          <span class="badge">${uni.city}</span>
          <span class="badge">${uni.ranking}</span>
        </div>
        <p class="description">${uni.description}</p>
      </article>
    `
    )
    .join("");

  universityList.innerHTML = cardsMarkup;
}

/**
 * Filters universities by name as user types.
 */
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = universities.filter((uni) =>
    uni.name.toLowerCase().includes(query)
  );
  renderUniversities(filtered);
}

searchInput.addEventListener("input", handleSearch);

// Initial render on popup load.
renderUniversities(universities);
