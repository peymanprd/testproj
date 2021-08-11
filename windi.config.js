import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                green: {
                    500: '#006466',
                    600: '#065a60',
                    700: '#0b525b',
                },
            },
        },
    },
})
