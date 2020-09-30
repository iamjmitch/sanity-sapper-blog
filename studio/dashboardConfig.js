export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5f74b7b506c67b089d46d963',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-2v2yjt1y',
                  apiId: 'fa525bbf-fa7c-431c-be84-4f132d87834c'
                },
                {
                  buildHookId: '5f74b7b53c245b0a88f3cc28',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-f9jox9a5',
                  apiId: '770d9340-27b1-46a7-855a-1960dd0966d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamjmitch/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-f9jox9a5.netlify.app', category: 'apps'}
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
