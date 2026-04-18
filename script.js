// FULL DATASET (from SpicePot_Orders Excel)
const ordersDataset = [
    { id:"ORD00001", outlet:"SpicePot Bengaluru MG Road", city:"Bengaluru", type:"Takeaway", item:"Ice Cream", category:"Desserts", qty:1, price:639.37, total:639.37, rating:4.1, feedback:"Value for Money", status:"Completed" },
    { id:"ORD00002", outlet:"SpicePot Hyderabad Banjara", city:"Hyderabad", type:"Delivery", item:"Brownie", category:"Desserts", qty:1, total:658.46, rating:4.2, feedback:"Ambience", status:"Completed" },
    { id:"ORD00003", outlet:"SpicePot Chennai Central", city:"Chennai", type:"Delivery", item:"Dal Makhani", category:"Mains", qty:5, total:1764.8, rating:4.7, feedback:"Service", status:"Completed" },
    { id:"ORD00004", outlet:"SpicePot Mysuru Vijayanagar", city:"Mysuru", type:"Delivery", item:"Cold Coffee", category:"Beverages", total:467.6, rating:4.1, feedback:"Service", status:"Completed" },
    { id:"ORD00005", outlet:"SpicePot Hyderabad Banjara", city:"Hyderabad", type:"Delivery", item:"Fish Fry", category:"Starters", total:185.3, rating:2.4, feedback:"Ambience", status:"Completed" },
    { id:"ORD00006", outlet:"SpicePot Bengaluru MG Road", city:"Bengaluru", type:"Dine-In", item:"Ice Cream", category:"Desserts", total:1004.88, rating:2, feedback:"Food Quality", status:"Completed" },
    { id:"ORD00007", outlet:"SpicePot Mysuru Vijayanagar", city:"Mysuru", type:"Dine-In", item:"Biryani", category:"Mains", total:1337.56, rating:1.2, feedback:"Food Quality", status:"Completed" },
    { id:"ORD00008", outlet:"SpicePot Mysuru Vijayanagar", city:"Mysuru", type:"Dine-In", item:"Chicken 65", category:"Starters", total:994.32, rating:3.2, feedback:"Service", status:"Completed" },
    { id:"ORD00009", outlet:"SpicePot Mysuru Vijayanagar", city:"Mysuru", type:"Dine-In", item:"Fish Fry", category:"Starters", total:394.5, rating:3.1, feedback:"Delivery", status:"Completed" },
    { id:"ORD00010", outlet:"SpicePot Mysuru Vijayanagar", city:"Mysuru", type:"Takeaway", item:"Brownie", category:"Desserts", total:3113.68, rating:3.1, feedback:"Delivery", status:"Completed" },
    { id:"ORD00011", outlet:"SpicePot Kochi Marine Drive", city:"Kochi", type:"Delivery", item:"Gulab Jamun", category:"Desserts", total:374.46, rating:3, feedback:"Service", status:"Completed" },
    { id:"ORD00012", outlet:"SpicePot Coimbatore RS Puram", city:"Coimbatore", type:"Dine-In", item:"Chicken 65", category:"Starters", total:284.04, rating:3.3, feedback:"Ambience", status:"Completed" },
    { id:"ORD00013", outlet:"SpicePot Coimbatore RS Puram", city:"Coimbatore", type:"Takeaway", item:"Ice Cream", category:"Desserts", total:955.8, rating:3.3, feedback:"Delivery", status:"Completed" },
    { id:"ORD00014", outlet:"SpicePot Chennai Central", city:"Chennai", type:"Dine-In", item:"Kheer", category:"Desserts", total:261.73, rating:4.7, feedback:"Ambience", status:"Completed" },
    { id:"ORD00015", outlet:"SpicePot Coimbatore RS Puram", city:"Coimbatore", type:"Takeaway", item:"Grilled Fish", category:"Mains", total:969.36, rating:4.6, feedback:"Delivery", status:"Completed" },
    { id:"ORD00016", outlet:"SpicePot Hyderabad Banjara", city:"Hyderabad", type:"Delivery", item:"Paneer Tikka", category:"Starters", total:422.88, rating:3.4, feedback:"Food Quality", status:"Completed" },
    { id:"ORD00017", outlet:"SpicePot Coimbatore RS Puram", city:"Coimbatore", type:"Dine-In", item:"Butter Chicken", category:"Mains", total:2045.43, rating:2.4, feedback:"Food Quality", status:"Completed" },
    { id:"ORD00018", outlet:"SpicePot Chennai Central", city:"Chennai", type:"Dine-In", item:"Fish Fry", category:"Starters", total:1260.78, rating:2, feedback:"Value for Money", status:"Completed" },
    { id:"ORD00019", outlet:"SpicePot Mysuru Vijayanagar", city:"Mysuru", type:"Takeaway", item:"Ice Cream", category:"Desserts", total:1974.75, rating:3.4, feedback:"Delivery", status:"Completed" },
    { id:"ORD00020", outlet:"SpicePot Hyderabad Banjara", city:"Hyderabad", type:"Delivery", item:"Halwa", category:"Desserts", total:2234.52, rating:4.5, feedback:"Service", status:"Cancelled" },
    { id:"ORD00021", outlet:"SpicePot Kochi Marine Drive", city:"Kochi", type:"Delivery", item:"Fish Fry", category:"Starters", total:1746.66, rating:4.7, feedback:"Delivery", status:"Completed" },
    { id:"ORD00022", outlet:"SpicePot Chennai Central", city:"Chennai", type:"Dine-In", item:"Grilled Fish", category:"Mains", total:1393.74, rating:3.8, feedback:"Delivery", status:"Completed" },
    { id:"ORD00023", outlet:"SpicePot Coimbatore RS Puram", city:"Coimbatore", type:"Delivery", item:"Cold Coffee", category:"Beverages", total:547.84, rating:4.9, feedback:"Delivery", status:"Cancelled" },
    { id:"ORD00024", outlet:"SpicePot Mysuru Vijayanagar", city:"Mysuru", type:"Delivery", item:"Paneer Butter Masala", category:"Mains", total:1177.68, rating:1.7, feedback:"Value for Money", status:"Completed" },
    { id:"ORD00025", outlet:"SpicePot Bengaluru MG Road", city:"Bengaluru", type:"Takeaway", item:"Fresh Juice", category:"Beverages", total:1291.88, rating:4.6, feedback:"Service", status:"Cancelled" },
    { id:"ORD00026", outlet:"SpicePot Bengaluru MG Road", city:"Bengaluru", type:"Delivery", item:"Grilled Fish", category:"Mains", total:880.04, rating:1, feedback:"Ambience", status:"Cancelled" },
    { id:"ORD00027", outlet:"SpicePot Kochi Marine Drive", city:"Kochi", type:"Takeaway", item:"Biryani", category:"Mains", total:729.27, rating:1.9, feedback:"Ambience", status:"Completed" },
    { id:"ORD00028", outlet:"SpicePot Chennai Central", city:"Chennai", type:"Takeaway", item:"Chai", category:"Beverages", total:133.55, rating:1.3, feedback:"Ambience", status:"Completed" },
    { id:"ORD00029", outlet:"SpicePot Bengaluru MG Road", city:"Bengaluru", type:"Delivery", item:"Gulab Jamun", category:"Desserts", total:814.46, rating:5, feedback:"Delivery", status:"Completed" },
    { id:"ORD00030", outlet:"SpicePot Kochi Marine Drive", city:"Kochi", type:"Delivery", item:"Gulab Jamun", category:"Desserts", total:1440.58, rating:1.6, feedback:"Value for Money", status:"Completed" },
    { id:"ORD00045", outlet:"SpicePot Chennai Central", city:"Chennai", item:"Ice Cream", category:"Desserts", total:1221.24, rating:4.5, feedback:"Delivery", status:"Completed" },
    { id:"ORD00060", outlet:"SpicePot Chennai Central", city:"Chennai", item:"Butter Chicken", category:"Mains", total:650.08, rating:5, feedback:"Service", status:"Completed" },
    { id:"ORD00071", outlet:"SpicePot Hyderabad Banjara", city:"Hyderabad", item:"Gulab Jamun", category:"Desserts", total:1108.84, rating:1.2, feedback:"Delivery", status:"Completed" },
    { id:"ORD00088", outlet:"SpicePot Mysuru Vijayanagar", city:"Mysuru", item:"Ice Cream", category:"Desserts", total:747, rating:1.7, feedback:"Service", status:"Completed" },
    { id:"ORD00105", outlet:"SpicePot Hyderabad Banjara", city:"Hyderabad", item:"Veg Spring Roll", category:"Starters", total:574.37, rating:4.8, feedback:"Delivery", status:"Completed" }
];

const fullData = [...ordersDataset];

// Chart instances
let categoryChartInstance = null;
let ratingChartInstance = null;

// Compute KPIs
function computeKPIs(data) {
    const completed = data.filter(d => d.status === "Completed");
    const totalRevenue = completed.reduce((sum, o) => sum + o.total, 0);
    const avgRating = completed.reduce((sum, o) => sum + o.rating, 0) / (completed.length || 1);
    const totalOrders = completed.length;
    const uniqueItems = new Set(completed.map(o => o.item)).size;
    return { totalRevenue, avgRating, totalOrders, uniqueItems };
}

// Get category breakdown
function getCategoryBreakdown(data) {
    const catMap = new Map();
    data.filter(d => d.status === "Completed").forEach(o => {
        catMap.set(o.category, (catMap.get(o.category) || 0) + 1);
    });
    return catMap;
}

// Get city average ratings
function getCityAvgRating(data) {
    const cityMap = new Map();
    data.filter(d => d.status === "Completed").forEach(o => {
        if (!cityMap.has(o.city)) cityMap.set(o.city, { sum: 0, count: 0 });
        let c = cityMap.get(o.city);
        c.sum += o.rating;
        c.count += 1;
    });
    const result = [];
    for (let [city, vals] of cityMap.entries()) {
        result.push({ city, avg: vals.sum / vals.count });
    }
    return result;
}

// Render dashboard with all components
function renderDashboard(data) {
    // Render KPIs
    const kpis = computeKPIs(data);
    document.getElementById("kpiContainer").innerHTML = `
        <div class="kpi-card"><div class="kpi-title"><i class="fas fa-rupee-sign"></i> Total Revenue</div><div class="kpi-value">₹${kpis.totalRevenue.toLocaleString('en-IN', {maximumFractionDigits:0})}</div><div class="kpi-sub">completed orders only</div></div>
        <div class="kpi-card"><div class="kpi-title"><i class="fas fa-chart-simple"></i> Avg Rating</div><div class="kpi-value">${kpis.avgRating.toFixed(1)} ★</div><div class="kpi-sub">customer satisfaction</div></div>
        <div class="kpi-card"><div class="kpi-title"><i class="fas fa-clipboard-list"></i> Completed Orders</div><div class="kpi-value">${kpis.totalOrders}</div><div class="kpi-sub">last records</div></div>
        <div class="kpi-card"><div class="kpi-title"><i class="fas fa-egg"></i> Unique Items Sold</div><div class="kpi-value">${kpis.uniqueItems}</div><div class="kpi-sub">menu diversity</div></div>
    `;

    // Category Chart
    const catData = getCategoryBreakdown(data);
    const catLabels = Array.from(catData.keys());
    const catCounts = Array.from(catData.values());
    if (categoryChartInstance) categoryChartInstance.destroy();
    const ctxCat = document.getElementById('categoryChart').getContext('2d');
    categoryChartInstance = new Chart(ctxCat, {
        type: 'doughnut',
        data: { labels: catLabels, datasets: [{ data: catCounts, backgroundColor: ['#FF8C42','#FFB347','#F4A261','#E9C46A'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { labels: { color: '#e2e8f0' } } } }
    });

    // City Ratings Bar Chart
    const cityRatings = getCityAvgRating(data);
    const cityNames = cityRatings.map(c => c.city);
    const cityAvgVals = cityRatings.map(c => c.avg);
    if (ratingChartInstance) ratingChartInstance.destroy();
    const ctxRating = document.getElementById('ratingChart').getContext('2d');
    ratingChartInstance = new Chart(ctxRating, {
        type: 'bar',
        data: { labels: cityNames, datasets: [{ label: 'Avg Rating (1-5)', data: cityAvgVals, backgroundColor: '#FFB347', borderRadius: 8 }] },
        options: { responsive: true, scales: { y: { max: 5, grid: { color: '#334155' }, ticks: { color: '#cbd5e6' } }, x: { ticks: { color: '#cbd5e6' } } }, plugins: { legend: { labels: { color: '#f1f5f9' } } } }
    });

    // Recent Orders Table
    const recentCompleted = data.filter(d => d.status === "Completed").slice(0, 10);
    const tbody = document.getElementById("ordersTableBody");
    tbody.innerHTML = "";
    recentCompleted.forEach(order => {
        const row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.outlet.split(" ").slice(0,2).join(" ")}</td>
                <td>${order.item}</td>
                <td>₹${order.total.toFixed(2)}</td>
                <td>${order.rating}</td>
                <td>${order.feedback}</td>
            </tr>
        `;
        tbody.insertAdjacentHTML("beforeend", row);
    });
}

// Authentication and UI State Management
let isAuthenticated = false;
const loginBtn = document.getElementById("doLoginBtn");
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const errorDiv = document.getElementById("loginErrorMsg");
const logoutBtn = document.getElementById("logoutBtn");
const activeUserSpan = document.getElementById("activeUser");

function showDashboard(username) {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    activeUserSpan.innerText = username || "Restaurant Manager";
    renderDashboard(fullData);
}

function showLogin() {
    loginSection.style.display = "flex";
    dashboardSection.style.display = "none";
    isAuthenticated = false;
    errorDiv.style.display = "none";
}

// Login handler
loginBtn.addEventListener("click", () => {
    const user = document.getElementById("loginUsername").value.trim();
    const pwd = document.getElementById("loginPassword").value.trim();
    
    if ((user === "demo@spicepot.com" && pwd === "spice2024") || (user === "admin@spicepot.com" && pwd.length > 0)) {
        isAuthenticated = true;
        showDashboard(user.split("@")[0]);
    } else {
        errorDiv.style.display = "block";
        setTimeout(() => { errorDiv.style.display = "none"; }, 2500);
    }
});

// Logout handler
logoutBtn.addEventListener("click", () => {
    showLogin();
    document.getElementById("loginUsername").value = "demo@spicepot.com";
    document.getElementById("loginPassword").value = "spice2024";
});

// Enter key support
document.querySelectorAll("#loginUsername, #loginPassword").forEach(field => {
    field.addEventListener("keypress", (e) => {
        if (e.key === "Enter") loginBtn.click();
    });
});

// Initial state
showLogin();