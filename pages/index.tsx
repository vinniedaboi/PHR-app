import Page from '@/components/page'
import Section from '@/components/section'
import { useState } from 'react'
import { Button } from '@mantine/core'

export default function Index() {
	const handleSaveData = async () => {
		const response = await fetch('/api/saveData', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: 'hello world' }), // Saving 'hello world' as a string
		})

		if (response.ok) {
			alert('Data saved successfully!')
		} else {
			alert('Something went wrong!')
		}
	}

	return (
		<Page>
		<Button bg='blue' onClick={handleSaveData}>
			Click
		</Button>
		</Page>
	)
}
