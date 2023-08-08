import { axiosClient } from '@/api/base/axios'

export const fetchLandingData = async (locale: string) => {
  const { data } = await axiosClient.get(
    `landing?populate=navigation,cookie_policy,cookie_policy.items,privacy_pollicy,privacy_pollicy.items,terms_of_use,terms_of_use.items,story,story.part1_image,story.part2_image,mission,mission.image,vision,vision.items,vision.items.icon,app,app.need_help,app.want_help,team,app.want_volunteer,app.offer,app.offer,app.for_who,app.how_to,app.how_to.steps,app.how_to.steps.picture,app.testimonials,app.testimonials.items,app.testimonials.items.video,team.members,team.members.picture,location,prtner,partner.partners,partner.partners.logo,gallery,volunteering,volunteering,volunteering.cards,volunteering.cards.image,partnership,partnership.cards,partnership.cards.image,who_can_help,who_can_help.image,how_to_help,gallery.items,gallery.items.media,data_and_transparency,data_and_transparency.files&locale=${locale}`,
  )
  return data?.data?.attributes
}
