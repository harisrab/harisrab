const Sitemap = () => {};

const GhostContentAPI = require("@tryghost/content-api");

export const getServerSideProps = async ({ res }) => {
	// Create API instance with site credentials
	const api = new GhostContentAPI({
		url: "https://deslettres.digitalpress.blog",
		key: process.env.CONTENT_API_KEY,
		version: "v3",
	});

	const getPosts = async () =>
		await api.posts
			.browse({
				include: "tags,authors",
				limit: "all",
			})
			.catch((err) => {
				console.error(err);
			});

	const posts = await getPosts();

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://harisrab.com</loc>
            </url>
            ${posts
				.map(
					(post) => `
            <url>
                <loc>https://harisrab.com/post/${post.slug}</loc>
            </url>`
				)
				.join("\n")}
        </urlset>
        `;

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return { props: {} };
};

export default Sitemap;
