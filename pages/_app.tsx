import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/styles/globals.css';
import 'leaflet/dist/leaflet.css';

import { MantineProvider } from '@mantine/core';
export default function App({ Component, pageProps }: AppProps) {
  return (
		<ThemeProvider attribute="class" defaultTheme="dark">
        <MantineProvider forceColorScheme='dark'>
          <Component {...pageProps} />
        </MantineProvider>
      </ThemeProvider>
  )
}
