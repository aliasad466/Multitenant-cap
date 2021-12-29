const cds = require("@sap/cds");

cds.on("bootstrap", async (app) => {
	await cds.mtx.in(app); // serve cds-mtx APIs
	const provisioning = await cds.connect.to("ProvisioningService");
	provisioning.impl(require("./srv/saas-provisioning/provisioning"));
});

// Delegate bootstrapping to built-in server.js
module.exports = cds.server;
