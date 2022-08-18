export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62fe69434a54cd005eaf25aa',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-h38ywznr',
                  apiId: '92c9fa47-9730-4f7d-9eb9-469ac1f37084'
                },
                {
                  buildHookId: '62fe6943c0317100623a23de',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-7mwzyvj9',
                  apiId: 'c6713b9c-d6f9-4bc9-abf3-561aa9b47f7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BrijeshBumrela/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-7mwzyvj9.netlify.app', category: 'apps'}
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
