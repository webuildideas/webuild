import { useCallback } from 'react'
import { useCookies } from 'react-cookie'
import {
  NF_COOKIE,
  NF_FORM_SUBMISSION_URI,
  NF_TOKEN
} from '../constants/newfangled'
import { NFFormPayload } from '../types/NewFangled'
import { urlEncodeData } from '../utils/forms'

interface Props {
  formName: string
  formDescription: string
  formId: number
  pageLink?: string
  pageTitle?: string
}

export default function useSubmitNfForm({
  formName,
  formDescription,
  formId,
  pageLink,
  pageTitle
}: Props) {
  const [cookies, setCookie] = useCookies()

  const setNfCookie = useCallback(
    (cookieValue: string) => {
      const days = 3650
      const hoursInDay = 24
      const minsInHour = 60
      const secsInMin = 60

      const date = new Date()
      date.setTime(
        date.getTime() + days * hoursInDay * minsInHour * secsInMin * 1000
      )

      setCookie(NF_COOKIE, cookieValue, {
        path: '/',
        expires: date
      })
    },
    [setCookie]
  )

  const prepareDataForSubmission = useCallback(
    (email: string, values): NFFormPayload => {
      const cookie = cookies[NF_COOKIE]
      const paramsString = window.location.search
      const searchParams = new URLSearchParams(paramsString)
      const payload: NFFormPayload = {
        token: NF_TOKEN,
        sessionid: cookie || '',
        formtype: formName,
        conversiondesc: formDescription,
        email,
        fields: JSON.stringify(values),
        pagelink: pageLink || window.location.href,
        pagetitle: pageTitle || document.title,
        utm_campaign: searchParams.get('utm_campaign') || '',
        utm_content: searchParams.get('utm_content') || '',
        utm_source: searchParams.get('utm_source') || '',
        utm_medium: searchParams.get('utm_medium') || '',
        formid: formId,
        contentid: formId
      }
      return payload
    },
    [cookies, formName, formId, formDescription, pageLink, pageTitle]
  )

  const submitToInsightEngine = useCallback(
    async (email: string, formValues) => {
      const encodedPayload = urlEncodeData(
        prepareDataForSubmission(email, formValues)
      )
      const response = await fetch(NF_FORM_SUBMISSION_URI, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedPayload
      })
      const udpatedCookieValue = await response.text()
      console.log('COOKIE RESP', udpatedCookieValue)
      setNfCookie(udpatedCookieValue)
    },
    [prepareDataForSubmission, setNfCookie]
  )

  return submitToInsightEngine
}
