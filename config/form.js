/**
 * Form related configuration
 */
var _ = require('lodash');
var dataRecordForm = require('../form-config-new/dataRecord-1.0-draft.js');
var rdmpForm = require('../form-config-new/default-1.0-draft.js');
var dataPublicationForm = _.cloneDeep(require('../form-config-new/dataPublication-1.0-draft.js'));
var dataPublicationEmbargoedForm = _.cloneDeep(require('../form-config-new/dataPublication-1.0-embargoed.js'));
var dataPublicationPublishedForm = _.cloneDeep(require('../form-config-new/dataPublication-1.0-published.js'));
var dataPublicationRetiredForm = _.cloneDeep(require('../form-config-new/dataPublication-1.0-retired.js'));
var dataPublicationReviewingForm = _.cloneDeep(require('../form-config-new/dataPublication-1.0-reviewing.js'));
var genericWorkspaceForm = require('../form-config-new/genericWorkspace-1.0-draft.js');

module.exports.form = {
  defaultForm: "default-1.0-draft",
  forms: {
    "default-1.0-draft": rdmpForm,
    "dataRecord-1.0-draft": dataRecordForm,
    "dataPublication-1.0-draft": dataPublicationForm,
    "dataPublication-1.0-embargoed": dataPublicationEmbargoedForm,
    "dataPublication-1.0-published": dataPublicationPublishedForm,
    "dataPublication-1.0-retired": dataPublicationRetiredForm,
    "dataPublication-1.0-reviewing": dataPublicationReviewingForm,
    "genericWorkspace-1.0-draft": genericWorkspaceForm
  }
};
