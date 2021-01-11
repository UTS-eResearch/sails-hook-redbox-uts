module.exports = {
  workspaces: {
    portal: {
      authorization: 'Bearer XXXXXX'
    },
    provisionerUser: 'admin',
    parentRecord: 'rdmp',
    omero: {
      parentRecord: 'rdmp',
      formName: 'omero-1.0-draft',
      workflowStage: 'draft',
      appName: 'omero',
      appId: 'omero-xxx',
      recordType: 'omero',
      host: 'https://xxx.research.uts.edu.au',
      domain: 'xxx.research.uts.edu.au',
      serverId: '1',
      defaultGroupId: 1
    },
    gitlab: {
      parentRecord: 'rdmp',
      formName: 'gitlab-1.0-draft',
      workflowStage: 'draft',
      appName: 'gitlab',
      appId: 'git-xxx',
      recordType: 'gitlab',
      host: 'https://xxx.research.uts.edu.au',
    },
    labarchives: {
      parentRecord: 'rdmp',
      formName: 'labarchives-1.0-draft',
      workflowStage: 'draft',
      appName: 'labarchives',
      appId: 'xxx',
      recordType: 'labarchives',
      workspaceFileName: 'README.md',
      key: {
        "akid": "xxx_xxx",
        "password": "XXXXXX",
        "baseurl": "https://xxx.labarchives.com",
        "api": "/api"
      },
      location: 'https://xxx.labarchives.com',
      description: 'eNotebook Workspace'
    },
    redcap: {
      parentRecord: 'rdmp',
      formName: 'redcap-1.0-draft',
      workflowStage: 'draft',
      appName: 'redcap',
      appId: 'xxx',
      recordType: 'redcap',
      location: 'https://xxx.research.uts.edu.au',
      description: 'REDCap Workspace'
    },
    catalog: {
      parentRecord: 'rdmp',
      formName: 'catalog-1.0-draft',
      workflowStage: 'draft',
      appName: 'catalog',
      appId: 'xxx',
      recordType: 'catalog',
      description: 'eResearch Service',
      domain: 'https://xxx.service-now.com',
      taskURL: '/serviceconnect/?id=sc_request&is_new_order=true&table=sc_request&sys_id=',
      requestTable: 'sc_request',
      user: 'xxx',
      password: 'XXXXXX',
      openedById: 'xxxxxx',
      assignedToEmail: 'anselm.motha@uts.edu.au',
      testRequestorId: null,
      items: [
        {name: 'ihpc', id: 'xxx'},
        {name: 'hpcc', id: 'xxx'},
        {name: 'storage', id: 'xxx'}
      ]
    }
  }
}
