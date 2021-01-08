//Workspaces Definitions

module.exports.workspaces = {
  available: [
    {
      logo: '/angular/gitlab/assets/images/gitlab.png',
      name: 'gitlab',
      displayName: 'GITLAB',
      title: 'GitLab',
      desc: 'Code repository system with features to help with code management, version control, code review, and collaboration.',
      app: {
        id: 'gitlab'
      }
    },
    {
      logo: '/angular/omero/assets/images/omero.png',
      name: 'omero',
      displayName: 'OMERO',
      title: 'OMERO',
      desc: 'Microscopy images stored in a secure central repository, from the microscope to publication.',
      app: {
        id: 'omero'
      }
    },

    {
      logo: '/angular/catalog/assets/images/storage.png',
      name: 'storage',
      displayName: 'STORAGE',
      title: 'Storage',
      desc: 'The eResearch Store (aka Isilon) is a central networked drive specifically for research data.',
      app: {
        id: 'catalog',
        type: 'storage'
      }
    },
    {
      logo: '/angular/catalog/assets/images/uts_ihpc.png',
      name: 'hpc',
      displayName: 'iHPC',
      title: 'eResearch iHPC Project Volumes',
      desc: 'The iHPC facility provides an interactive high performance computing resource for all researchers within UTS.',
      app: {
        id: 'catalog',
        type: 'ihpc'
      }
    },
    {
      logo: '/angular/catalog/assets/images/uts_hpcc.png',
      name: 'hpcc',
      displayName: 'HPCC',
      title: 'eResearch HPCC Storage',
      desc: 'High Performance Computing Cluster (HPCC) that can be accessed by UTS researchers.',
      app: {
        id: 'catalog',
        type: 'hpcc'
      }
    },
    {
      logo: '/angular/labarchives/assets/images/la.png',
      name: 'labarchives',
      displayName: 'LABARCHIVES',
      title: 'LabArchives',
      desc: 'Web-based electronic notebooks (provided by LabArchives) are useful for managing research documentation, observations and data.',
      app: {
        id: 'labarchives'
      }
    },
    {
      logo: '/angular/redcap/assets/images/logo.png',
      name: 'redcap',
      displayName: 'REDCAP',
      title: 'RedCap',
      desc: 'Research Electronic Data Capture (REDCap) is a secure web-based database application located safely in our Data Centre.',
      app: {
        id: 'redcap'
      }
    }
  ]
}
