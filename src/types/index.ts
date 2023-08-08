export const HUMAN_VILLAGE_APP_URL = process.env.NEXT_PUBLIC_APP_URL

export enum Section {
  Story = 'story',
  Mission = 'mission',
  GettingServices = 'getting-services',
  HumanVillage = 'human-village',
  Help = 'help',
  Locations = 'locations',
  Partners = 'partners',
  Team = 'team',
  DataAndTransparency = 'data-and-transparency',
}

export enum FileExt {
  Doc = '.doc',
  Docx = '.docx',
  Pdf = '.pdf',
  Xls = '.xls',
  Xlsx = '.xlsx',
}

export enum RoutePath {
  HOME = '/',
  PARTNERS = '/partners',
  I_NEED_HELP = '/i-need-help',
  HOW_TO_HELP = '/how-to-help',
  BECOME_PARTNER = '/become-partner',
  BECOME_VOLUNTEER = '/become-volunteer',
  PRIVACY_POLICY = '/privacy-policy',
  TERMS_OF_USE = '/terms-of-use',
  COOKIE_POLICY = '/cookie-policy',
}

export enum QueryKeys {
  Locales = 'locales',
  Landing = 'landing',
  Dimensions = 'dimensions',
  Cities = 'cities',
  Languages = 'languages',
  Countries = 'countries',
  Footer = 'footer',
  BecomePartner = 'become-partner',
  BecomeVolunteer = 'become-volunteer',
  Translations = 'translations',
  Configurations = 'configurations',
}

export interface ILink {
  id: string
  label: string
}

export interface IStory {
  id: number
  part1: string
  part2: string
  title: string
  part1_image: {
    data: {
      attributes: {
        name: string
        ext: string
        url: string
      }
      id: string
    }
  }
  part2_image: {
    data: {
      attributes: {
        name: string
        ext: string
        url: string
      }
      id: string
    }
  }
}

export interface IMission {
  id: number
  description: string
  title: string
  image: {
    data: {
      attributes: {
        name: string
        ext: string
        url: string
      }
      id: string
    }
  }
}

export interface IVision {
  id: number
  title: string
  items: IVisionItem[]
}

export interface IVisionItem {
  id: number
  order: number
  content: string
  position: string
  enhanced: boolean
  title: string
  icon: {
    data: {
      id: number
      attributes: {
        name: string
        ext: string
        url: string
      }
    }
  }
}

export interface IApp {
  id: number
  link: string
  description: string
  title: string
  want_help: {
    id: number
    title: string
    content: string
    link: string
    read_more_button_title: string
    go_to_button_title: string
  }
  need_help: {
    id: number
    title: string
    content: string
    link: string
    read_more_button_title: string
    go_to_button_title: string
  }
  want_volunteer: {
    id: number
    title: string
    content: string
    link: string
    read_more_button_title: string
    go_to_button_title: string
  }
  for_who: IForWho
  how_to: IHowTo
  offer: IOffer
  testimonials: ITestimonials
}

export interface ILocation {
  id: number
  title: string
  description: string | null
  number_organisations: string
  number_cities: string
  number_countries: string
  organisations_label: string
  cities_label: string
  countries_label: string
}

export interface IPartner {
  id: number
  title: string
  content: string
  see_more_link_label: string
  partners: {
    id: number
    name: string
    description: string | null
    logo: {
      data: any | null
    } | null
  }[]
}

export interface ITeam {
  id: number
  title: string
  description: string
  number_employees: string
  number_volunteers: string
  members: IMember[]
  employees_label: string
  volunteers_label: string
}

export interface IMember {
  id: number
  first_name: string
  last_name: string | null
  email: string | null
  description: string | null
  facebook: string | null
  twitter: string | null
  linked_in: string | null
  instagram: string | null
  position: string | null
  quote: string | null
  picture: {
    data: {
      attributes: {
        name: string
        ext: string
        url: string
      }
      id: string
    }
  }
}

export interface IGallery {
  id: number
  title: string
  items: {
    id: number
    description: string | null
    media: {
      data: any | null
    } | null
  }[]
}

export interface IDataAndTransparency {
  id: number
  title: string
  content: string
  files: {
    data: {
      id: number
      attributes: {
        name: string
        ext: string
        url: string
      }
    }[]
  }
}

export interface ISharedProperties {
  id: number
  title: string
  description: string | null
}

export type IForWho = ISharedProperties

export interface IHowTo extends ISharedProperties {
  steps: {
    description: string
    id: string
    order: string
    title: string
    picture: {
      data: {
        attributes: {
          name: string
          ext: string
          url: string
        }
        id: string
      }
    }
  }[]
}

export type IOffer = ISharedProperties

export type IHowToHelp = ISharedProperties

export interface IWhoCanHelp extends ISharedProperties {
  image: {
    data: {
      attributes: {
        name: string
        ext: string
        url: string
      }
      id: string
    }
  }
}

export interface ITestimonials extends ISharedProperties {
  items: {
    video: {
      data: {
        attributes: {
          name: string
          ext: string
          url: string
        }
      }
    }
  }[]
}

export interface IPartnership extends ISharedProperties {
  cards: {
    description: string
    id: string
    title: string
    image: {
      data: {
        attributes: {
          name: string
          ext: string
          url: string
        }
        id: string
      }
    }
  }[]
}

export interface ILanding {
  title: string
  subtitle: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  story: IStory
  vision: IVision
  app: IApp
  team: ITeam
  location: ILocation
  partner: IPartner
  gallery: IGallery
  data_and_transparency: IDataAndTransparency
  volunteering: IPartnership
  partnership: IPartnership
  who_can_help: IWhoCanHelp
  want_help_button_title: string
  need_help_button_title: string
  navigation: INavigation[]
  cookie_policy: IPolicy
  privacy_pollicy: IPolicy
  terms_of_use: IPolicy
  hero_title?: string
  hero_subtitle?: string
  how_to_help: IHowToHelp
}

export interface IPolicy {
  id: number
  title: string
  description: string
  items: {
    title: string
    description: string
  }[]
}

export interface INavigation {
  title: string
  url: string
}

export interface IDimension {
  id: number
  attributes: {
    createdAt: string
    description: string | null
    is_active: boolean
    locale: string
    title: string
    uid: string
    updatedAt: string
    icon: {
      data: {
        id: number
        attributes: {
          name: string
          ext: string
          url: string
        }
      }
    }
  }
}

export interface ICity {
  id: number
  createdAt: string
  geo_height: number
  geo_width: number
  title: string
  uid: string
  updatedAt: string
}

export interface ILanguage {
  id: number
  abbreviation: string
  createdAt: string
  title: string
  uid: string
  updatedAt: string
}

export interface ICountry {
  id: number
  mobile_prefix: string | null
  createdAt: string
  title: string
  uid: string
  updatedAt: string
  flag: {
    id: number
    name: string
    ext: string
    url: string
  }
}

export type ServiceProviderDto = {
  data: {
    title: string
    uid: string
    description?: string
    logo?: string
    address?: string
    post?: string
    languages: string[]
    contacts?: string[]
    telephone_number?: string
    email?: string
    dimensions: string[]
    verified?: boolean
    active?: boolean
    sign_up_message: string
    cities?: string[]
    locale?: string
  }
}

export type Option = {
  value: string
  label: string
}

export interface IFooter {
  id: number
  attributes: {
    about_us_label: string
    cookie_policy_label: string
    cookie_policy_url: string
    copy_rights_label: string
    createdAt: string
    data_and_transperency_label: string
    data_and_transperency_url: string
    email_labeel: string
    go_to_thrive_app_label: string
    go_to_thrivee_app_url: string
    learn_more_rights_label: string
    learn_more_rights_url: string
    leearn_more_label: string
    linked_in_url: string
    location_label: string
    location_url: string
    our_content_label: string
    partners_label: string
    partners_url: string
    phone_number_label: string
    privacy_policy_label: string
    privacy_policy_url: string
    publishedAt: string
    story_label: string
    story_url: string
    terms_of_use_label: string
    terms_of_use_url: string
    thrive_app_label: string
    updatedAt: string
    youtube_url: string
    human_village_desc_label: string
    join_us_label: string
    how_to_help_label: string
    how_to_help_url: string
    become_partner_label: string
    become_partner_url: string
    become_volunteer_label: string
    become_volunteer_url: string
    about_label: string
    about_url: string
  }
}

export interface ILocale {
  id: number
  code: string
  createdAt: string
  isDefault: boolean
  name: string
  updatedAt: string
  flag: {
    id: number
    name: string
    ext: string
    url: string
  }
}

export interface IBecomePartner {
  id: number
  attributes: {
    createdAt: string
    title: string
    description: string
    updatedAt: string
    locale: string
  }
}

export enum ContactOption {
  EMAIL = 'email',
  TELEPHONE_NUMBER = 'telephone_number',
}
