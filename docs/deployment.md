# Deployments

_Don't forget to update the date in Footer.js component_

## Internal

```bash
# Build the internal site
yarn build:internal

# Run build locally
npx serve public

# Test local production build of website
http://localhost:5000

# Login
cf login -a api.w3ibm.bluemix.net -o IBMDesign -s front-end

# Make sure you have blue-green-deploy installed as a plugin for cf
cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
cf install-plugin blue-green-deploy -r CF-Community

# Deploy the internal staging website
cf blue-green-deploy -f manifest.internal.staging.yml --delete-old-apps

# Deploy the internal staging website without bluegreen
cf push -f manifest.internal.staging.yml

# Deploy the internal website
cf blue-green-deploy -f manifest.internal.yml --delete-old-apps

# Deploy the internal website without bluegreen
cf push -f manifest.internal.yml
```

## External

```bash
# Build the external site
yarn build:external

# Run build locally
npx serve public

# Test local production build of website
http://localhost:5000

## Login and push
ibmcloud login --sso -a https://api.ng.bluemix.net -o carbon-design-system -s production

# Make sure you have blue-green-deploy installed as a plugin for cf
ibmcloud cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
ibmcloud cf install-plugin blue-green-deploy -r CF-Community

# Deploy the external website
ibmcloud cf blue-green-deploy carbon-website -f .circleci/manifest.external.yml --delete-old-apps

# Deploy external website without blue-green
ibmcloud cf push -f .circleci/manifest.external.yml

```
