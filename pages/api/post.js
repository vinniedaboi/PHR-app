const { MongoClient, ServerApiVersion } = require("mongodb");

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const client = new MongoClient(
			process.env.MONGODB_URI,
			{
				serverApi: {
					version: ServerApiVersion.v1,
					strict: true,
					deprecationErrors: true,
				},
			},
		)

		try {
			await client.connect()
			const db = client.db("Projects")
			const posts = await db.collection('Properties').find({}).toArray()

			res.status(200).json(posts)
		} catch (error) {
			res.status(500).json({ error: 'Unable to connect to database' })
		} finally {
			await client.close()
		}
	} else {
		res.status(405).json({ error: 'Unsupported HTTP method' })
	}
}

