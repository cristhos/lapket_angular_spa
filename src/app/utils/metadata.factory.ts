import { MetadataModule, MetadataLoader, MetadataStaticLoader, PageTitlePositioning } from 'ng2-metadata';
export function metadataFactory() {
  return new MetadataStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' | ',
    applicationName: 'lapket',
    defaults: {
      title: 'Lapket',
      description: 'Plateforme d\'echage de produits high tech',
      'og:image': 'favicon.jpg',
      'og:type': 'website',
      'og:locale': 'fr_Fr',
      'og:locale:alternate': 'fr_Fr'
    }
  });
}