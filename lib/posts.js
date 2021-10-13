import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
	url: "https://deslettres.digitalpress.blog",
	key: "b6fc846d3a71fc4ba9cbd698eb",
	version: "v3",
});

export async function getPosts() {
	return await api.posts
		.browse({
			include: "tags,authors",
			limit: "all",
		})
		.catch((err) => {
			console.error(err);
		});
}

export async function getPostBySlug(slug) {
	return await api.posts
		.read({
			slug,
		})
		.catch((err) => {
			console.error(err);
		});
}
