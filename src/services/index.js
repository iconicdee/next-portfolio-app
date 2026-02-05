"use client";

// Dynamic base URL - works on both local and production
function getBaseURL() {
  if (typeof window !== "undefined") {
    // Client-side
    return process.env.NEXT_PUBLIC_API_BASE_URL || window.location.origin;
  }
  // Server-side
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
}

const API_BASE = getBaseURL();

function getData(currentTab) {
  try {
    const url = `${API_BASE}/api/${currentTab}/get`;
    console.log("Fetching from:", url);

    return fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    })
      .then((response) => response.json())
      .catch((e) => {
        console.error("Fetch error:", e);
        return null;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}

function addData(currentTab, formData) {
  try {
    const url = `${API_BASE}/api/${currentTab}/add`;
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      cache: "no-store",
    })
      .then((response) => response.json())
      .catch((e) => {
        console.error("Fetch error:", e);
        return null;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}

function updateData(currentTab, formData) {
  try {
    const url = `${API_BASE}/api/${currentTab}/update`;
    return fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      cache: "no-store",
    })
      .then((response) => response.json())
      .catch((e) => {
        console.error("Fetch error:", e);
        return null;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}

function login(formData) {
  try {
    const url = `${API_BASE}/api/login`;
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      cache: "no-store",
    })
      .then((response) => response.json())
      .catch((e) => {
        console.error("Fetch error:", e);
        return null;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = { getData, addData, updateData, login };
