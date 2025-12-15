tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',   /* Navy */
                secondary: 'var(--color-secondary)', /* Pink */
                glass: 'var(--glass-bg)',
            },
            fontFamily: {
                sans: ['"Noto Sans JP"', 'sans-serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            },
            animation: {
                'blob': 'blob 25s infinite linear', /* Slower, continuous loop */
            },
            keyframes: {
                blob: {
                    /* Moves in a wide irregular circular path, going off-screen */
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '25%': { transform: 'translate(400px, -300px) scale(1.2)' }, /* Far Top-Right */
                    '50%': { transform: 'translate(200px, 400px) scale(0.9)' },  /* Far Bottom-Right */
                    '75%': { transform: 'translate(-400px, 200px) scale(1.1)' }, /* Far Bottom-Left */
                    '100%': { transform: 'translate(0px, 0px) scale(1)' }, /* Returns to start seamlessly */
                }
            }
        }
    }
}