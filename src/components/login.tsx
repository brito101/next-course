"use client";

export default function Login() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) window.location.href = "/";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">User</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Pass</label>
      <input type="password" id="password" name="password" />
      <button>Login</button>
    </form>
  );
}
