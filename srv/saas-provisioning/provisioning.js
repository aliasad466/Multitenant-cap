module.exports = (service) => {
	service.on("UPDATE", "tenant", async (req, next) => {
		const res = await next();
		console.log(JSON.stringify(req.data));
		//TODO
		let url = `https://${req.data.subscribedSubdomain}-portall-${req.data.subscriptionAppName}.cfapps.eu10.hana.ondemand.com`; //replace with space name of your provider subaccount
		return url;
	});

	service.on("dependencies", (req) => {
		
		const xsenv = require("@sap/xsenv");
		const services = xsenv.getServices({
			portal: {
				tag: "portal" // to ensure this works, make sure to bind portal service to CAP service instance
			}
		});

		const dependencies = [{
			xsappname: services.portal.uaa.xsappname
		}];
		return dependencies;
	});
};