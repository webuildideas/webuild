// Packages
import { useCallback } from 'react'
import { useCookies } from 'react-cookie'

// Common
import {
  NF_COOKIE,
  NF_FORM_SUBMISSION_URI,
  NF_TOKEN
} from '@common/constants/newfangled'
import { NFFormPayload, NFForms } from '@common/types/NewFangled'
import { AOFormPayload } from '@common/types/ActOn'
import { urlEncodeData } from '@common/utils/forms'
import { AO_DEPLOYMENT_ID, AO_DOMAIN, AO_ID } from '@common/constants/actOn'
import { actOnProcessForm } from '@common/utils/actOn'

interface Props {
  actOnFormId: NFForms['actOnId']
  formName: NFForms['name']
  pageLink?: string
  pageTitle?: string
}

const useSubmitNfForm = ({
  formName,
  actOnFormId,
  pageLink,
  pageTitle
}: Props) => {
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
    (
      email: string,
      values
    ): { nfPayload: NFFormPayload; aoPayload: AOFormPayload } => {
      const cookie = cookies[NF_COOKIE]
      const paramsString = window.location.search
      const searchParams = new URLSearchParams(paramsString)
      const aoPayload: AOFormPayload = {
        aid: AO_ID,
        fid: actOnFormId,
        did: AO_DEPLOYMENT_ID,
        server: AO_DOMAIN,
        formName,
        protocol: window.location.protocol
      }
      const nfPayload: NFFormPayload = {
        token: NF_TOKEN,
        sessionid: cookie || '',
        conversiondesc: formName,
        email,
        fields: JSON.stringify(values),
        pagelink: pageLink || window.location.href,
        pagetitle: pageTitle || document.title,
        utm_campaign: searchParams.get('utm_campaign') || '',
        utm_content: searchParams.get('utm_content') || '',
        utm_source: searchParams.get('utm_source') || '',
        utm_medium: searchParams.get('utm_medium') || '',
        formtype: 1234,
        formid: 1234
      }
      return { nfPayload, aoPayload }
    },
    [actOnFormId, cookies, formName, pageLink, pageTitle]
  )

  const submitToInsightEngine = useCallback(
    async (email: string, formValues) => {
      const { nfPayload, aoPayload } = prepareDataForSubmission(
        email,
        formValues
      )
      const encodedNfPayload = urlEncodeData(nfPayload)
      const response = await fetch(NF_FORM_SUBMISSION_URI, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedNfPayload
      })
      const updatedCookieValue = await response.text()
      setNfCookie(updatedCookieValue)
      setTimeout(
        () => actOnProcessForm(aoPayload.fid, aoPayload.formName, aoPayload),
        0
      )
    },
    [prepareDataForSubmission, setNfCookie]
  )

  return submitToInsightEngine
}

export default useSubmitNfForm
