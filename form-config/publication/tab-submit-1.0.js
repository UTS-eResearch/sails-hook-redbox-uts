module.exports = [
  // -------------------------------------------------------------------
  // Submit Tab
  // -------------------------------------------------------------------
  {
    class: "Container",
    definition: {
      id: "publication",
      label: "@dataPublication-publication-tab",
      fields: [
        {
          class: 'Container',
          compClass: 'TextBlockComponent',
          definition: {
            value: '@dataPublication-publication-heading',
            type: 'h3'
          }
        },
        {
          class: 'Toggle',
          compClass: 'ToggleComponent',
          definition: {
            name: 'embargoByDate',
            defaultValue: false,
            label: '@dataPublication-embargoEnabled',
            help: '@dataPublication-embargoEnabled-help',
            controlType: 'checkbox',
            disabledExpression: '<%= _.isEmpty(relatedRecordId) %>',
            publish: {
              onValueUpdate: {
                modelEventSource: 'valueChanges'
              }
            },
            subscribe: {
              'form': {
                onFormLoaded: [
                  { action: 'publishValueLoaded' }
                ]
              }
            }
          }
        },
        {
          class: 'DateTime',
          definition: {
            name: "embargoUntil",
            label: "@dataPublication-embargoUntil",
            help: '@dataPublication-embargoUntil-help',
            disabledExpression: '<%= _.isEmpty(relatedRecordId) %>',
            datePickerOpts: {
              format: 'dd/mm/yyyy',
              icon: 'fa fa-calendar',
              autoclose: true
            },
            timePickerOpts: false,
            hasClearButton: false,
            valueFormat: 'YYYY-MM-DD',
            displayFormat: 'DD/MM/YYYY',
            publish: {
              onValueUpdate: {
                modelEventSource: 'valueChanges'
              }
            },
            subscribe: {
              'embargoByDate': {
                onValueLoaded: [
                  { action: 'setRequiredAndClearValueOnFalse' }
                ],
                onValueUpdate: [
                  { action: 'setRequiredAndClearValueOnFalse' }
                ]
              }
            }
          }
        },
        {
          class: 'TextArea',
          definition: {
            name: 'reviewerNote',
            label: '@dataPublication-reviewerNote',
            help: '@dataPublication-reviewerNote-help',
            disabledExpression: '<%= _.isEmpty(relatedRecordId) %>'
          }
        },
      ]
    }
  }
];
