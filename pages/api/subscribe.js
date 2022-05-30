// import GhostAdminAPI from "@tryghost/admin-api";

const GhostAdminAPI = require("@tryghost/admin-api");

const admin = new GhostAdminAPI({
	url: `${process.env.GHOST_API_URL}`,
	key: `${process.env.GHOST_ADMIN_API_KEY}`,
	version: "v3",
});

export default async function addMember(req, res) {
	const { email } = req.body;

	// console.log("Request Obj ===> ", req.body.email);

	// console.log("Request Object ===> ", typeof JSON.parse(req.body));
	// console.log("Request Name ===> ", name);

	console.log("Request Email ===> ", email);

	try {
		let member = await admin.members
			.add({ email }, { send_email: false, email_type: "subscribe" })
			.catch((error) => console.log(error));

		return res.status(200).json({ error: "" });
	} catch (error) {
		return res
			.status(500)
			.json({ error: error.message || error.toString() });
	}
}
