// vite.config.ts (.nyc project)
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: false, // Allow Vite to use next available port
        hmr: {
            host: 'localhost',
            clientPort: 5173, // This ensures HMR connects to the right port
        },
        cors: {
            origin: [
                'http://localhost',
                'http://localhost:8000',
                // All your .test domains
                'http://dogtoys.test',
                'http://menus.test',
                'http://pet-stores.test',
                'http://wedding-gowns.test',
                'http://weddinggowns.test',
                'http://health-food-stores.test',
                'http://healthfoodstores.test',
                'http://mafia.test',
                // Allow any .test domain
                /^http:\/\/.*\.test(:\d+)?$/,
            ],
            credentials: true,
        },
        watch: {
            usePolling: true, // Helps with file watching in some environments
        },
    },
});
