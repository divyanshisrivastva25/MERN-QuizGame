import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Start in dark mode if the user's device prefers it
    const [dark, setDark] = useState(
        () =>
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    function handleSubmit(e) {
        e.preventDefault();
        // Replace this with your real login call
        console.log("Logging in with", { email, password });
    }

    // Shared style for both inputs (light + dark)
    const input =
        "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 " +
        "placeholder:text-stone-400 outline-none transition " +
        "focus:border-teal-700 focus:ring-4 focus:ring-teal-700/15 " +
        "dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 " +
        "dark:focus:border-teal-400 dark:focus:ring-teal-400/20";

    return (
        // The "dark" class switches every dark: style below on or off
        <div className={dark ? "dark" : ""}>
            <div className="min-h-screen grid lg:grid-cols-2 bg-stone-100 text-stone-900 transition-colors dark:bg-stone-950 dark:text-stone-100">
                {/* ---------- LEFT: brand panel (hidden on small screens) ---------- */}
                <aside className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-teal-950 p-12 text-teal-50">
                    <span className="pointer-events-none absolute -right-10 -top-24 select-none text-[28rem] font-black leading-none text-teal-900">
                        ?
                    </span>

                    <p className="relative text-xl font-bold tracking-tight">QuizGame</p>

                    <div className="relative max-w-md">
                        <p className="text-sm text-teal-300">Today's question</p>
                        <h2 className="mt-3 text-4xl font-bold leading-tight">
                            Which planet has the shortest day in our solar system?
                        </h2>

                        <div className="mt-8 space-y-3">
                            {["Earth", "Jupiter", "Mercury"].map((option, i) => (
                                <div
                                    key={option}
                                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${option === "Jupiter"
                                            ? "border-amber-300 bg-amber-300 text-teal-950 font-semibold"
                                            : "border-teal-800 text-teal-100"
                                        }`}
                                >
                                    <span className="text-sm opacity-70">{"ABC"[i]}</span>
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="relative text-sm text-teal-300">
                        Sign in to see if you got it right.
                    </p>
                </aside>

                <main className="relative flex items-center justify-center p-6 sm:p-12">

                    {/* for dark and light mode */}
                    <button
                        type="button"
                        role="switch"
                        aria-checked={dark}
                        aria-label="Toggle dark theme"
                        onClick={() => setDark(!dark)}
                        className="absolute right-6 top-6 flex h-9 w-16 items-center rounded-full border border-stone-300 bg-white px-1 transition dark:border-stone-700 dark:bg-stone-900"
                    >
                        <span
                            className={`grid h-7 w-7 place-items-center rounded-full bg-teal-900 text-sm transition-transform dark:bg-teal-400 ${dark ? "translate-x-7" : "translate-x-0"
                                }`}
                        >
                            {dark ? "🌙" : "☀️"}
                        </span>
                    </button>

                    <div className="w-full max-w-sm">
                        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                        <p className="mt-2 text-stone-600 dark:text-stone-400">
                            Sign in to continue your streak.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className={input}
                                />
                            </div>

                            <div>
                                <div className="mb-1.5 flex items-center justify-between">
                                    <label htmlFor="password" className="text-sm font-medium">
                                        Password
                                    </label>
                                    <a href="#" className="text-sm text-teal-800 hover:underline dark:text-teal-300">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className={`${input} pr-16`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-4 text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-teal-900 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-700/30 active:scale-[0.99] dark:bg-teal-400 dark:text-teal-950 dark:hover:bg-teal-300 dark:focus:ring-teal-400/30"
                            >
                                Sign in
                            </button>
                        </form>

                        <div className="my-6 flex items-center gap-4 text-sm text-stone-400 dark:text-stone-500">
                            <span className="h-px flex-1 bg-stone-300 dark:bg-stone-700" />
                            or
                            <span className="h-px flex-1 bg-stone-300 dark:bg-stone-700" />
                        </div>

                        <button
                            type="button"
                            className="w-full rounded-xl border border-stone-300 bg-white py-3 font-medium transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:bg-stone-800"
                        >
                            Continue with Google
                        </button>

                        <p className="mt-8 text-center text-sm text-stone-600 dark:text-stone-400">
                            New to QuizGame?{" "}
                            <a href="#" className="font-semibold text-teal-800 hover:underline dark:text-teal-300">
                                Create an account
                            </a>
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}
