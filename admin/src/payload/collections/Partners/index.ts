import type { CollectionConfig } from 'payload/types'
import { users } from '../../access/users'
import { admins } from '../../access/admins'

export const Partners: CollectionConfig = {
  slug: 'partners',
  labels: {
    singular: {
      en: 'Partner',
      fr: 'Partenaire',
    },
    plural: {
      en: 'Partners',
      fr: 'Partenaires',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'quote', 'comment'],
    hideAPIURL: true,
  },
  versions: false,
  access: {
    read: admins,
    create: users,
    update: users,
    delete: users,
  },
  fields: [
    {
      label: {
        en: 'Name',
        fr: 'Nom',
      },
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      label: {
        en: 'Quote',
        fr: 'Citation',
      },
      name: 'quote',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      label: {
        en: 'Comment',
        fr: 'Commentaire',
      },
      name: 'comment',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      label: {
        en: 'Logo',
        fr: 'Logo',
      },
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      label: {
        en: 'Banner',
        fr: 'Bannière',
      },
      name: 'banner',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}