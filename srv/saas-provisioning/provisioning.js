module.exports = (service) => {
	
	service.on("UPDATE", "tenant", async (req, next) => {
		const res = await next(); // first call default implementation which is doing the HDI container creation
		let url = `https://${req.data.subscribedSubdomain}-portall-mtt-approuter.cfapps.eu10.hana.ondemand.com`;
		console.log("[INFO ][ON_UPDATE_TENANT] " + "Application URL is " + url);
		return url;
	});

	service.on( "dependencies", (req) => {
		console.log("dependency will run or not???");
		const xsenv = require("@sap/xsenv");
		const services = xsenv.getServices({
			portal: {
				tag: "portal"
			}
		});

		const dependencies = [{
			xsappname: services.portal.uaa.xsappname
		}];
		//console.log("porta name is " + services.portal.uaa.xsappname);
		//console.log("dependency are" +  JSON.stringify(dependencies));
		
		return dependencies;
	});

};