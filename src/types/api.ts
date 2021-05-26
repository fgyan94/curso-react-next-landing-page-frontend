export type ImageProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type TechIconProps = {
  id: number
  title: string
  icon: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconProps[]
}

export type ConceptsProps = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptsProps[]
}

export type ModuleProps = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: ModuleProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLinksProps = {
  title: string
  url: string
}

export type AuthorProps = {
  photo: {
    url: string
    alternativeText: string
  }
  name: string
  role: string
  socialLinks: SocialLinksProps[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type ReviewProps = {
  id: number
  name: string
  text: string
  photo: {
    url: string
    alternativeText: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewProps[]
}

export type QuestionProps = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
