"use client";

// Dynamic base URL - works on both local and production
function getBaseURL() {
  if (typeof window !== "undefined") {
    // Client-side - use current origin
    return window.location.origin;
  }
  // Server-side fallback
  return "http://localhost:3000";
}

function getData(currentTab) {
  try {
    const API_BASE = getBaseURL();
    const url = `${API_BASE}/api/${currentTab}/get`;
    console.log("Fetching from:", url);

    return fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        return data;
      })
      .catch((e) => {
        console.error("Fetch error:", e);
        return { success: false, error: e.message };
      });
  } catch (e) {
    console.error("getData error:", e);
    return { success: false, error: e.message };
  }
}

function addData(currentTab, formData) {
  try {
    const API_BASE = getBaseURL();
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
        return { success: false, error: e.message };
      });
  } catch (e) {
    console.error("addData error:", e);
    return { success: false, error: e.message };
  }
}

function updateData(currentTab, formData) {
  try {
    const API_BASE = getBaseURL();
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
        return { success: false, error: e.message };
      });
  } catch (e) {
    console.error("updateData error:", e);
    return { success: false, error: e.message };
  }
}

function login(formData) {
  try {
    const API_BASE = getBaseURL();
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
        return { success: false, error: e.message };
      });
  } catch (e) {
    console.error("login error:", e);
    return { success: false, error: e.message };
  }
}

module.exports = { getData, addData, updateData, login };
