import { NFForms } from './NewFangled'

/**
 * @property aid - Account ID found in the 'Account' section of the Act-On start page
 * @property fid - Form ID found in the URL of the form composer
 * @property did - Deployment ID this will always be d-0001
 * @property server - Your server domain and subdomain, if applicable (such as
 * yourcompanyname.actonsoftware.com or marketing.companyname.com) if  you use a custom URL for
 * your account - do not include http or www before the domain or any characters after .com or .org
 * @property formName - your external form name found within that form HTML. For example, if you view
 * the source of your form you should see something similar to <form ="formName">
 * @property protocol - http / https
 */
export type AOFormPayload = {
  aid: string
  fid: NFForms['actOnId']
  did: 'd-0001'
  server: string
  formName: NFForms['name']
  protocol: string
  pid?: number
  cuid?: string
  srcid?: string
  camp?: string
}
