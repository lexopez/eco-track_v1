import supabase from "./supabase.js";

async function signIn() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Login error:", error.message);
    alert("Login failed: " + error.message);
  } else {
    console.log("Signed in user:", data.user);
    alert("Successfully signed in!");
  }
}
