/* eslint-disable no-param-reassign */
export function actOnProcessForm(formId, formName, payload) {
  const payloadArray = [payload]
  for (let AoI = 0; AoI < payloadArray.length; AoI += 1) {
    if (
      payloadArray[AoI].aid &&
      payloadArray[AoI].fid &&
      payloadArray[AoI].did &&
      payloadArray[AoI].server &&
      (payloadArray[AoI].formId || payloadArray[AoI].formName)
    ) {
      const d = document
      const thisFormId = formId
      const thisFormName = formName
      const bi = (i) => {
        return d.getElementById(i)
      }
      const bn = (i) => {
        return d.getElementsByName(i)[0]
      }
      const names = []
      const values = []
      const params = {}
      const w = window
      const targetIdOrName = payloadArray[AoI].formName
        ? bn(payloadArray[AoI].formName)
        : bi(payloadArray[AoI].formId)
      const len = targetIdOrName.elements.length
      let isLoaded = false
      const st = (f, i) => {
        w.setTimeout(f, i)
      }
      const ce = (t) => {
        return d.createElement(t)
      }
      const gid = (p) => {
        let i = 0
        const n = Math.random
        const r = []
        const c = '0123456789abcdef'.split('')
        // eslint-disable-next-line no-bitwise
        for (; i < 16; i += 1) r[i] = c[(0 | (n() * 16)) & 0xf]
        const j = p + r.join('')
        return bi(j) == null ? j : gid(p)
      }
      const addInput = (form, name, value) => {
        const el = ce('input')
        el.name = name
        el.value = value
        form.appendChild(el)
      }
      const idifr = gid('aoCapT')

      if (
        payloadArray[AoI].formName === thisFormName ||
        payloadArray[AoI].formId === thisFormId
      ) {
        const dTarget = ce('div')
        dTarget.style.display = 'none'
        d.body.appendChild(dTarget)
        dTarget.innerHTML = `<iframe name="${idifr}" id="${idifr}"></iframe>` // generate iframe

        const dForm = ce('form')
        const idform = gid('aoCapD')
        dForm.id = idform
        dForm.style.display = 'none'
        dForm.method = 'POST'
        dForm.enctype = 'multipart/form-data'
        dForm.acceptCharset = 'UTF-8'
        dForm.target = idifr // form targets iframe
        dForm.action = `${payload.protocol || w.location.protocol}//${
          payload.server
        }/acton/forms/userSubmit.jsp`
        d.body.appendChild(dForm) // generate form

        for (let i = 0; i < len; i += 1) {
          const el = targetIdOrName.elements[i]
          let name = el.name ? el.name : null
          let value = el.value ? el.value : null
          const tagName = el.nodeName.toLowerCase()
          if (
            tagName === 'input' &&
            (el.type === 'radio' || el.type === 'checkbox') &&
            !el.checked
          ) {
            name = null
          } else if (
            tagName === 'select' &&
            el.selectedIndex &&
            el.selectedIndex !== -1 &&
            el.options[el.selectedIndex] &&
            el.options[el.selectedIndex].value
          ) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            value = el.options[el.selectedIndex].value
          }
          if (name != null && name !== '') {
            names.push(name)
            values.push(el.value)
            // eslint-disable-next-line no-console
            console.log(`Element name: ${el.name} / Element value: ${el.value}`)
            params[name] = el.value
          }
          addInput(dForm, el.name, el.value)
        }

        payload.pid = 0
        payload.cuid = payload.cuid || ''
        payload.srcid = payload.srcid || ''
        payload.camp = payload.camp || ''
        addInput(dForm, 'ao_a', payloadArray[AoI].aid)
        addInput(dForm, 'ao_f', payloadArray[AoI].fid)
        addInput(
          dForm,
          'ao_d',
          `${payloadArray[AoI].fid}:${payloadArray[AoI].did}`
        )
        addInput(dForm, 'ao_p', 0)
        addInput(dForm, 'ao_jstzo', new Date().getTimezoneOffset())
        addInput(dForm, 'ao_form_neg_cap', '')
        addInput(dForm, 'ao_refurl', d.referrer)
        addInput(dForm, 'ao_cuid', payload.cuid)
        addInput(dForm, 'ao_srcid', payload.srcid)
        addInput(dForm, 'ao_camp', payload.camp)
        bi(idform).submit()

        const dTargetFrame = bi(idifr)
        // eslint-disable-next-line func-names
        dTargetFrame.onload = function () {
          isLoaded = true
        }
        // eslint-disable-next-line func-names
        const waitForSubmit = function () {
          this.count = ''
          if (!(isLoaded || dTargetFrame.readyState === 'complete')) {
            st(waitForSubmit, 200)
            this.count += 1
          } else if (this.count > 7) {
            return true
          } else {
            d.body.removeChild(dForm)
            d.body.removeChild(dTarget)
          }
        }
        st(waitForSubmit, 100)
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('payload property missing')
    }
  }
}
