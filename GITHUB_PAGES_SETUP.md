# GitHub Pages Setup Instructions

## Issue Description
When visiting https://obieda-hussien.github.io/Codnetra/, the README file is displayed instead of the website.

## Root Cause
GitHub Pages is likely configured to deploy from a branch (e.g., `main` branch) instead of from GitHub Actions.

## Solution
To fix this issue, you need to configure GitHub Pages to use GitHub Actions as the deployment source:

### Steps to Fix:

1. **Go to Repository Settings**
   - Navigate to your repository: https://github.com/obieda-hussien/Codnetra
   - Click on "Settings" tab

2. **Configure Pages Settings**
   - In the left sidebar, click on "Pages"
   - Under "Source", select **"GitHub Actions"** instead of "Deploy from a branch"

3. **Verify the Change**
   - Once you select "GitHub Actions", the next push to the main branch will trigger the deployment workflow
   - The workflow will build the Next.js application and deploy the static files to GitHub Pages

### Current Setup Status:
✅ Next.js application is properly configured for static export  
✅ GitHub Actions workflow is correctly set up  
✅ Build process generates proper static HTML files  
✅ `.nojekyll` file is included to prevent Jekyll processing  
❌ **GitHub Pages source needs to be changed from "Branch" to "GitHub Actions"**

## Technical Details

### Current Configuration:
- **Next.js Config**: Configured with `output: 'export'` and proper `basePath: '/Codnetra'`
- **Workflow**: `.github/workflows/deploy.yml` builds and deploys to GitHub Pages
- **Build Output**: Generates static files in `out/` directory with `index.html`

### Expected Result:
After changing the Pages source to "GitHub Actions", visiting https://obieda-hussien.github.io/Codnetra/ will show the Codenetra website with:
- Arabic content
- Hero section with "مرحباً بك في Codenetra"
- Services section (خدماتنا)
- Portfolio section (أعمالنا)
- Contact section (تواصل معنا)
- Blog section (المدونة)

## Verification
After making the change, you can verify the deployment by:
1. Checking the Actions tab for successful deployment
2. Visiting https://obieda-hussien.github.io/Codnetra/
3. Confirming the website content appears instead of the README