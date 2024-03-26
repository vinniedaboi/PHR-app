import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@mantine/core/styles.css';
import { dark } from '@clerk/themes';
import '@mantine/carousel/styles.css';
import '@/styles/globals.css';
import 'leaflet/dist/leaflet.css';
import { MantineProvider } from '@mantine/core';
import {ClerkProvider} from "@clerk/nextjs"

export default function App({ Component, pageProps }: AppProps) {
  return (
		<ClerkProvider appearance={{
			baseTheme: dark
		}}>
		<ThemeProvider attribute="class" defaultTheme="dark">
        <MantineProvider forceColorScheme='dark'>
          <Component {...pageProps} />
        </MantineProvider>
      </ThemeProvider>
			</ClerkProvider>
  )
}
