import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
	url: "https://deslettres.digitalpress.blog",
	key: process.env.CONTENT_API_KEY,
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

export async function getPages() {
	return await api.pages.browse({}).catch((err) => console.error(err));
}

export async function getPageBySlug(pageslug) {
	return await api.pages
		.read({ slug: pageslug })

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

export async function getRelatedPosts(tags) {
	return await api.posts
		.browse({
			filter: "tag:fiction+tag:-fables",
		})
		.then((posts) => {
			posts.forEach((post) => {
				console.log(post.title);
			});
		})
		.catch((err) => {
			console.error(err);
		});
}
