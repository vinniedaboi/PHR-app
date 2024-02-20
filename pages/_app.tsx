import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes' 
import '@/styles/globals.css'
import '@mantine/core/styles/Card.css';
import '@mantine/core/styles/global.css';
import { MantineProvider } from '@mantine/core'

export default function App({ Component, pageProps }: AppProps) {
  return (
		<MantineProvider>
        <Component {...pageProps} />
		</MantineProvider>
  )
}
