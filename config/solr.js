module.exports.solr = {
  createOrUpdateJobName: 'SolrSearchService-CreateOrUpdateIndex',
  deleteJobName: 'SolrSearchService-DeleteFromIndex',
  options: sails.config.solr.options,
  maxWaitTries: 12,
  waitTime: 5000,
  schema: {
    'add-field': [
      {
        name: "full_text",
        type: "text_general",
        indexed: true,
        stored: false,
        multiValued: true
      },
      {
        name: "title",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "dc_identifier",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "contributor_ci.email",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "contributor_data_manager.email",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "description",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "grant_number_name",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: true
      },
      {
        name: "finalKeywords",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: true
      },
      {
        name: "text_title",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: true
      },
      {
        name: "text_description",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: true
      },
      {
        name: "authorization_view",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: true
      },
      {
        name: "authorization_edit",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: true
      },
      {
        name: "authorization_viewRoles",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: true
      },
      {
        name: "authorization_editRoles",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: true
      },
      {
        name: "metaMetadata_brandId",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "metaMetadata_type",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "workflow_stageLabel",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "workflow_step",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "foaf_fundedBy_vivo_Grant.0.dc_title",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "grant_number_name.0",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "namespace",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "startDate",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "endDate",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      },
      {
        name: "agls_policy_dc_identifier",
        type: "text_general",
        indexed: true,
        stored: true,
        multiValued: false
      }
    ],
    'add-dynamic-field': [
      {
        name: "date_*",
        type: "pdate",
        indexed: true,
        stored: true
      },
      {
        name: "foaf_*",
        type: "text_general",
        indexed: true,
        stored: true
      },
      {
        name: "related_publications*",
        type: "text_general",
        indexed: true,
        stored: true
      },
      {
        name: "dc_coverage_vivo_*",
        type: "text_general",
        indexed: true,
        stored: true
      },
      {
        name: "creators.*",
        type: "text_general",
        indexed: true,
        stored: true
      },
      {
        name:"dc_subject_*",
        type: "text_general",
        indexed: true,
        stored: true
      }
    ],
    'add-copy-field': [
      {
        source: "*",
        dest: "full_text"
      },
      {
        source: 'title',
        dest: 'text_title'
      },
      {
        source: 'description',
        dest: 'text_description'
      }
    ]
  },
  // note that the original object will be cloned
  // all 'source' values will refer to the path in the original object
  preIndex: {
    // remove the 'metadata' nested key
    move: [
      {
        source: 'metadata',
        dest: '' // the root object when empty, otherwise a path value used in _.set()
      }
    ],
    copy: [
      {
        source: 'dateCreated',
        dest: 'date_object_created'
      },
      {
        source: 'lastSaveDate',
        dest: 'date_object_modified'
      }
    ],
    flatten: {
      // uncomment below to pass in specific options when flattening using https://www.npmjs.com/package/flat
      // options: {
      //
      // },
      special: [
        {
          source: 'workflow',
          options: {
            safe: false,
            delimiter: '_'
          }
        },
        {
          source: 'authorization',
          options: {
            safe: true,
            delimiter: '_'
          }
        },
        {
          source: 'metaMetadata',
          options: {
            safe: false,
            delimiter: '_'
          }
        },
        {
          source: 'metadata.finalKeywords',
          dest: 'finalKeywords',
          options: {
            safe: true
          }
        }
      ]
    }
  },
  initSchemaFlag: {
    name: 'schema_initialised',
    type: 'text_general',
    stored: false,
    required: false
  }
};
