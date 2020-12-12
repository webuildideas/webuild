/* eslint-disable camelcase */

/**
 * @property token - The NF api Token
 * @property sessionid - The NF cookie
 * @property conversiondesc - The name of the form
 * @property email - The Email of the user
 * @property fields - The field values of the form
 * @property pagelink - The url of the page the form was on
 * @property pagetitle - The document title of the page you were on
 * @property utm_campaign - Value from url if coming form an ad link
 * @property utm_content - Value from url if coming form an ad link
 * @property utm_source - Value from url if coming form an ad link
 * @property utm_medium - Value from url if coming form an ad link
 * @property formtype - Dummy int
 * @property formid - Dummy int
 */
export type NFFormPayload = {
  token: string
  sessionid: string
  conversiondesc: string
  email: string
  fields: string
  pagelink: string
  pagetitle: string
  utm_campaign: string
  utm_content: string
  utm_source: string
  utm_medium: string
  formtype: number
  formid: number
}

/**
 * Enum to handle Form names throughout the site
 * Once a name is added to the enum it is not to change
 * or will fuck up anayltics in new fangled as it will be
 * recognized as a different form compeltely.
 */
export enum NFForms {
  testForm = 'Test Form'
}
