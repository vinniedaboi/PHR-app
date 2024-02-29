import { Html, Head, Main, NextScript } from 'next/document'
import { ColorSchemeScript } from '@mantine/core'
export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='manifest' href='/manifest.json' />
				<link rel='apple-touch-icon' href='/icon-512x512.png' />
				<meta name='theme-color' content='#000' />
				<ColorSchemeScript
					defaultColorScheme='dark'
					localStorageKey='mantine-ui-color-scheme'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

// changes made here from mantine
