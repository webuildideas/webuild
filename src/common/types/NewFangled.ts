/* eslint-disable camelcase */

import { ObjectValues } from './Utilities'

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
 * Union Type to handle Form names and the Form's Act-On ID throughout the site.
 *
 * Once a name is added here it is not to change
 * or will fuck up anayltics in new fangled as it will be
 * recognized as a different form compeltely.
 *
 * The Name of a Form must match what the Form Name is in Act-On
 */

export const NFForms = {
  TestForm: {
    name: 'Test Form',
    actOnId: 'faa1d9d1-8e70-4de8-9f35-02ef47666c7f'
  },
  EmailSignup: {
    name: 'Email Signup',
    actOnId: 'c4bde8a0-2c73-417c-9bf3-b5c4f5e07dc4'
  },
  Opportunity: {
    name: 'Opportunity Form',
    actOnId: '4854e7c5-bf7c-46f9-ba29-0d29d1c472e1'
  },
  GatedPost: {
    name: 'Gated Post',
    actOnId: '3f9d7223-b62d-4dd5-83ea-0cff5a18d615'
  },
  ContentUpgrade: {
    name: 'Content Upgrade',
    actOnId: 'c7797ee2-36e9-4c02-b215-2189f15ee3c7'
  }
} as const

export type NFForms = ObjectValues<typeof NFForms>
