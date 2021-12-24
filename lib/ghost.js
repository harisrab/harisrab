import GhostAdminAPI from "@tryghost/admin-api";

const admin = new GhostAdminAPI({
	url: `${process.env.GHOST_API_URL}`,
	key: `${process.env.GHOST_ADMIN_API_KEY}`,
	version: "v3",
});

export function addMember(email, name) {
	return admin.members.add(
		{ email, name },
		{ send_email: true, email_type: "subscribe" }
	);
}
