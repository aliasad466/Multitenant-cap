# Getting Started

Welcome to the sample for a multitenant cap project with apps usable in SCP central portal.

It contains these folders and files:

| File / Folder                                                    | Purpose                                                                                                    |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `db/schema.cds`                                                  | domain model with the single entity `AccessRights`                                                         |
| `srv/services.cds`                                               | service model for the entity `AccessRights`                                                                |
| `srv/saas-provisioning/provisioning.js`                          | service called during customer subaccount subscription, create the schema and return the url of the portal |
| `app/com.alteaup.solutions.accessrights/`                        | Fiori Elements very simple app for the `AccessRights` entity                                               |
| `cloud-foundry/`                                                 | Cloud Foundry related objects, services, and configuration                                                 |
| `cloud-foundry/approuter/xs-apps.json`                           | Configuration of the App Router routes                                                                     |
| `cloud-foundry/html5-deployer`                                   | Folder for generated ui5 apps                                                                              |
| `cloud-foundry/xsuaa/xs-security.json`                           | Authorization Scopes and Roles configuration                                                               |
| `cloud-foundry/portal-deployer\portal-site\CommonDataModel.json` | Configuration of the apps availables in the portal content manager                                         |
| `server.js`                                                      | Custom bootstrap script for overriding provisioning                                                        |
| `npm-install-all-apps.sh`                                        | Shell script to install ui5-task-zipper in apps folders                                                    |
| `mta.yaml`                                                       | MTA yaml configuration for the whole project                                                               |
| `package.json`                                                   | project metadata and configuration                                                                         |
| `README.md`                                                      | this getting started guide                                                                                 |

## Deploy in SAP Cloud Platform trial one time
* login in your trial subaccount
* create an instance of SAP HANA Cloud DB with the option `allow all IP address`
* map the instance of the db to the trial organization
* run `./npm-install-all-apps.sh`
* run `npm run build && npm run deploy`


## For each customer
* create a new subaccount
* subscribe to Mulitenant-Portal Application
* open provider subaccount
* create a route in and bind it to mtt-approuter using the following pattern {subdomain}-{space}-{appname}
* launch the application

## References and thanks
* https://blogs.sap.com/2020/08/20/getting-your-head-into-cloud-application-programming-model-multitenancy/
* https://blogs.sap.com/2021/02/18/understanding-dependencies-in-saas-provisioning/
* https://github.com/sbarzaghialteaup/cap-multitenant-portal

## Note
* saas AppName must be unique in Cloud Foundry?
