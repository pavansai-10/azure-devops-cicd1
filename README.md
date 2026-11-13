# Azure DevOps Deployment Dashboard

A small Node.js + Express application serving a responsive HTML/CSS/JavaScript dashboard.

## Files
- `server.js`: Express web server; listens on `process.env.PORT`.
- `package.json`: application dependencies and start script.
- `web/index.html`: dashboard UI.

## Run locally
```bash
npm install
npm start
```
Open http://localhost:8080 and test http://localhost:8080/health.

## Azure App Service Linux
- Runtime stack: Node.js 24 LTS
- Startup command: `npm start`
- App setting: `SCM_DO_BUILD_DURING_DEPLOYMENT=true`
- Deploy the ZIP containing `server.js`, `package.json`, and `web/index.html`.

## Pipeline note
Review `azure-pipelines.yml` before using it:
- Set `resourceGroupName` to the actual resource group containing the App Service.
- Ensure the service connection has access to that resource group and the deployment slot.
- This YAML is for Azure Pipelines. If the pipeline is configured to use GitHub as its source, connect the GitHub repository in Azure DevOps; pushing to GitHub alone will not trigger a pipeline that still points to Azure Repos.
- The dashboard displays illustrative pipeline status labels; it does not call the Azure DevOps API or represent live run status.
