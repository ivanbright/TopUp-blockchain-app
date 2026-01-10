/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--primary))',
                'primary-dark': 'rgb(var(--primary-dark))',
                'primary-light': 'rgb(var(--primary-light))',
                'bg-primary': 'rgb(var(--bg-primary))',
                'bg-secondary': 'rgb(var(--bg-secondary))',
                'bg-tertiary': 'rgb(var(--bg-tertiary))',
                'text-primary': 'rgb(var(--text-primary))',
                'text-secondary': 'rgb(var(--text-secondary))',
                'text-tertiary': 'rgb(var(--text-tertiary))',
                'text-accent': 'rgb(var(--text-accent))',
                success: 'rgb(var(--success))',
                warning: 'rgb(var(--warning))',
                error: 'rgb(var(--error))',
                info: 'rgb(var(--info))',
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
            },
            boxShadow: {
                glow: 'var(--glow)',
                'glow-strong': 'var(--glow-strong)',
                'neon-glow': 'var(--neon-glow)',
            }
        },
    },
    plugins: [],
}
