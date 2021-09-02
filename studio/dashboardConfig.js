export default {
  widgets: [
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
                  buildHookId: '6130d8c52dcf0cdbd8720294',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1o9cqqip',
                  apiId: '4e59f193-b1ad-4ff8-9331-77868c1fa5be'
                },
                {
                  buildHookId: '6130d8c5739c3de103cf1eeb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wwu5j3ap',
                  apiId: 'a807a105-269d-4efe-9e18-5519214d2250'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjvdende/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wwu5j3ap.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
