export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fa290796c27d06f27bf3395',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qykycxn9',
                  apiId: '22aa7a8a-9ec0-4012-aa3e-2060e6a88cb3'
                },
                {
                  buildHookId: '5fa29079b144ef6841031172',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wo9861sb',
                  apiId: '38e89a4e-4720-46b0-b5ee-c15c3d7f51ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeffmanful/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wo9861sb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
