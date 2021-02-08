const fromDefault = `${sails.config.email.app} < ${sails.config.email.admin}`;
const fromSettings = `noreply@${sails.config.email.appDomain}`;
// Server is configured to send emails via postfix

module.exports.emailnotification = {
    api: {
      send: {method: 'post', url: "/api/v1/messaging/emailnotification"}
    },
    settings: {
      enabled: true,
      from: fromSettings,
      templateDir: "views/emailTemplates/",
      serverOptions: {
        host: '127.0.0.1',
        port: 25,
        secure: false,
        tls: {
          rejectUnauthorized: false
        }
      }
    },
    defaults: {
      from: fromDefault,
      subject: "Stash Notification",
      format: "html"
    },
    templates: {
      transferOwnerTo: {subject: 'Ownership of DMP record/s has been transferred to you', template: 'transferOwnerTo'},
      publicationPublished: {subject: 'A data publication has been published', template: 'publicationPublished'},
      publicationReview: {subject: 'A data publication is ready for review', template: 'publicationReview'},
      publicationStaged: {subject: 'A data publication has been staged for publication', template: 'publicationStaged'},
      test: {subject: 'Test Email Message', template: 'test'}
    }
  };
