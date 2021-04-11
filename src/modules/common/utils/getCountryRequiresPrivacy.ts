import { COUNTRIES } from '@common/constants/countries'

const getCountryRequiresPrivacy = (countryName: string): boolean => {
  const country = COUNTRIES.find((c) => c.value === countryName)
  return country?.privacyPolicy ? country.privacyPolicy : false
}

export default getCountryRequiresPrivacy
