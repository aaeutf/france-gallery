
# France Gallery Frontend

This is the frontend for the France Gallery web application. It is a Vue.js single-page application designed to be deployed as a static website in Azure Blob Storage.

## Prerequisites
- Node.js and npm installed
- An Azure account
- Azure CLI installed and logged in (`az login`)

## Build the Project
1. Open a terminal in the `/frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the static files:
   ```bash
   npm run build
   ```
   The production-ready files will be generated in the `dist/` folder.

## Deploy to Azure Blob Storage as Static Website
1. **Create a Storage Account** (if you don't have one):
   ```bash
   az storage account create \
     --name <yourstorageaccount> \
     --resource-group <yourresourcegroup> \
     --location <yourlocation> \
     --sku Standard_LRS
   ```
2. **Enable Static Website Hosting:**
   ```bash
   az storage blob service-properties update \
     --account-name <yourstorageaccount> \
     --static-website \
     --index-document index.html \
     --404-document index.html
   ```
3. **Upload Files:**
   ```bash
   az storage blob upload-batch \
     --account-name <yourstorageaccount> \
     --destination '$web' \
     --source ./dist
   ```
4. **Access Your Site:**
   - Get the static website URL:
     ```bash
     az storage account show \
       --name <yourstorageaccount> \
       --query "primaryEndpoints.web" \
       --output tsv
     ```
   - Open the URL in your browser.

## Notes
- Replace `<yourstorageaccount>`, `<yourresourcegroup>`, and `<yourlocation>` with your actual Azure values.
- You can automate deployment with GitHub Actions or Azure DevOps for CI/CD.

For more details, see the [Azure documentation on static website hosting](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website).
