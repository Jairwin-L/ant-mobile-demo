import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacyPlugin from '@vitejs/plugin-legacy';
const path = require('path');

export default defineConfig({
	plugins: [
		reactRefresh(),
		legacyPlugin({
			targets: [
				'Android > 39',
				'Chrome >= 60',
				'Safari >= 10.1',
				'iOS >= 10.3',
				'Firefox >= 54',
				'Edge >= 15',
			],
		}),
	],
	build: {
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
})
