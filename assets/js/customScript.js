

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'; // ✅ Browser-safe
const supabaseUrl = 'https://uihmonfrphwsvfljjfzs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaG1vbmZycGh3c3ZmbGpqZnpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NjA4NDMsImV4cCI6MjA2MzEzNjg0M30.dbHGgky31kEEaowJEP8Xj_Krpa6a0t0gpKmWvKfLWKg';
const supabase = createClient(supabaseUrl, supabaseKey)``

async function loadUsers() {

let { data: worker, error } = await supabase
.from('worker')
.select('*')

//   const { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.error("Error fetching users:", error);
    return;
  }

  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = ""; // Clear existing rows

  data.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
          <label class="checkboxs">
            <input type="checkbox" />
            <span class="checkmarks"></span>
          </label>
        </td>
        <td class="productimgname">
          <a href="javascript:void(0);" class="product-img">
            <img src="${
              user.profile || "assets/img/customer/customer1.jpg"
            }" alt="profile" />
          </a>
        </td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.occupation}</td>
        <td>
          <a class="me-3" href="edituser.html">
            <img src="assets/img/icons/edit.svg" alt="Edit" />
          </a>
          <a class="me-3 confirm-text" href="javascript:void(0);">
            <img src="assets/img/icons/delete.svg" alt="Delete" />
          </a>
        </td>
      `;
    tbody.appendChild(row);
  });
}

// Load users when the page is ready
document.addEventListener("DOMContentLoaded", loadUsers);
