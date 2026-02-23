/* Job Data */
const jobs = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "all",
    },

    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "all",
    },

    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "all",
    },

    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "all",
    },

    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "all",
    },

    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,00",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "all",
    },

    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.    ",
        status: "all",
    },

    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "all",
    },
];

let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
const emptyMessage = document.getElementById("emptyMessage");


/* Dashboard Tab Functionality */
function updateDashboard() {
    document.getElementById("totalCount").innerText = jobs.length;

    document.getElementById("interviewCount").innerText =
        jobs.filter(job => job.status === "interview").length;

    document.getElementById("rejectedCount").innerText =
        jobs.filter(job => job.status === "rejected").length;
}


/* Render Jobs */
function renderJobs() {
    jobContainer.innerHTML = "";

    let filtered = currentTab === "all" ? jobs : jobs.filter(job => job.status === currentTab);

    document.getElementById("tabCount").innerText = filtered.length + " jobs";

    if (filtered.length === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }

    filtered.forEach(job => {

        const div = document.createElement("div");
        div.className = "bg-white p-6 rounded-lg shadow relative";

        div.innerHTML = `
      <button onclick="deleteJob(${job.id})"
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500 px-2.5 py-1 rounded-[100%] border border-gray-400 hover:border-red-500">
        🗑
      </button>

      <h3 class="text-lg font-semibold text-[#002C5C]">${job.companyName}</h3>
      <p class="text-[#64748B] mb-5">${job.position}</p>

      <p class="text-sm text-[#64748B] mb-5">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <span class="inline-block px-3 py-2 text-xs font-medium rounded text-[#002C5C]
        ${job.status === "interview"
                ? "bg-green-100 text-green-700"
                : job.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-600"}">
        ${job.status === "interview"
                ? "INTERVIEW"
                : job.status === "rejected"
                    ? "REJECTED"
                    : "NOT APPLIED"}
      </span>

      <p class="text-sm text-[#323B49] mt-2">${job.description}</p>

      <div class="flex gap-2 mt-5">
        <button onclick="handleStatus(${job.id}, 'interview')"
          class="px-3 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50">
          Interview
        </button>

        <button onclick="handleStatus(${job.id}, 'rejected')"
          class="px-3 py-2 border border-red-500 text-red-600 rounded hover:bg-red-50">
          Rejected
        </button>
      </div>
    `;

        jobContainer.appendChild(div);
    });

    updateDashboard();
}

/* Handle Status Change */
function handleStatus(id, status) {
    const job = jobs.find(job => job.id === id);

    if (job.status === status) {
        job.status = "all";
    } else {
        job.status = status;
    }

    renderJobs();
}

/* Delete Job */
function deleteJob(id) {
    const index = jobs.findIndex(job => job.id === id);

    if (index !== -1) {
        jobs.splice(index, 1);
    }

    renderJobs();
}

/* Change Tab */
document.querySelectorAll(".tabBtn").forEach(btn => {
    btn.addEventListener("click", function () {

        document.querySelectorAll(".tabBtn").forEach(b => {
            b.classList.remove("bg-blue-500", "text-white");
            b.classList.add("bg-gray-200");
        });

        this.classList.add("bg-blue-500", "text-white");
        this.classList.remove("bg-gray-200");

        currentTab = this.dataset.tab;

        renderJobs();
    });
});

renderJobs();