export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'eddies-pool-service-studio',
                  apiId: '9473b992-8756-4c8b-abd4-4ad3838b0897'
                },
                {
                  buildHookId: '5f9778b38f905930322e51ad',
                  title: 'Events Website',
                  name: 'eddies-pool-service',
                  apiId: '416cbb1d-63d3-4511-8c3b-e5f723a946ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hutch78/eddies-pool-service',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://eddies-pool-service.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
