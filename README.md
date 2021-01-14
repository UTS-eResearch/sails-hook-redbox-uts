### Sails Hook Redbox UTS

A plugin to install uts customisations.


#### Development on redbox-portal

Add to package.json
```json
"@uts-eresearch/sails-hook-redbox-uts": "file:../hooks/sails-hook-redbox-uts",
```

or install it via github

```shell
npm install --save https://github.com/UTS-eResearch/sails-hook-redbox-uts.git
```

#### Plugins

PDF-GEN
```shell
npm install --save @researchdatabox/sails-hook-redbox-pdfgen
```

Workspace Hooks

- GitLab Hook
- OMERO Hook
- LabArchives Hook
- Redcap Hook
- Catalog Hook

```json
"sails-hook-redbox-gitlab": "git+https://github.com/moisbo/sails-hook-redbox-gitlab.git",
"sails-hook-redbox-omero": "git+https://github.com/moisbo/sails-hook-redbox-omero.git",
"sails-hook-redbox-catalog": "git+https://github.com/uts-eresearch/sails-hook-redbox-catalog.git",
"sails-hook-redbox-redcap": "git+https://code.research.uts.edu.au/eresearch/sails-hook-redbox-redcap.git",
"sails-hook-redbox-labarchives": "git+https://code.research.uts.edu.au/eresearch/sails-hook-redbox-labarchives.git",
```

Then do 
```shell
npm install 
```
