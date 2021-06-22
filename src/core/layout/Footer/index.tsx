import i18n from 'plugins/i18n'
import { useState } from 'react'
import { LSManager } from 'core/utils/localstoragemanager'
import Select from 'core/components/common/Select'
import t from 'core/utils/translation'
import { langValues } from 'constants/language'
const Footer = () => {
  const defaultLang = LSManager.getLanguage()?.toString()
  const [defaultLanguage, setDefaultLanguage] = useState(defaultLang)

  const switchLanguage = (lang: string) => {
    setDefaultLanguage(lang)
    i18n.changeLanguage(lang)
    LSManager.setLanguage(lang)
    window.location.reload()
  }
  return (
    <div className="footer max-w-screen-2xl mx-auto">
      <div className="wrapper pt-6 px-20">
        <div className="footer__language-area">
          {t('content.footer.changeLocale')}:
          <Select
            className="ml-2 p-2"
            onChangeSelect={switchLanguage}
            options={langValues}
            selected={defaultLanguage}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
