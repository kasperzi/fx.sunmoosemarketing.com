export const COUNTRY_NAMES: Record<string, string> = {
  NL:'Netherlands', GB:'United Kingdom', US:'United States', DE:'Germany', FR:'France',
  AU:'Australia', CA:'Canada', SG:'Singapore', AE:'United Arab Emirates', ZA:'South Africa',
  NG:'Nigeria', KE:'Kenya', IN:'India', MY:'Malaysia', TH:'Thailand', PH:'Philippines',
  ID:'Indonesia', BR:'Brazil', MX:'Mexico', IT:'Italy', ES:'Spain', PT:'Portugal',
  BE:'Belgium', NZ:'New Zealand', JP:'Japan', HK:'Hong Kong', SE:'Sweden', NO:'Norway',
  DK:'Denmark', CH:'Switzerland', AT:'Austria', PL:'Poland', RO:'Romania', CZ:'Czechia',
  BA:'Bosnia and Herzegovina', RS:'Serbia', HR:'Croatia', SI:'Slovenia', MK:'North Macedonia',
  ME:'Montenegro', AL:'Albania', XK:'Kosovo', BG:'Bulgaria', SK:'Slovakia', HU:'Hungary',
  UA:'Ukraine', BY:'Belarus', MD:'Moldova', GR:'Greece', TR:'Turkey', CY:'Cyprus',
  SA:'Saudi Arabia', QA:'Qatar', KW:'Kuwait', BH:'Bahrain', OM:'Oman', EG:'Egypt',
  MA:'Morocco', TN:'Tunisia', GH:'Ghana', TZ:'Tanzania', UG:'Uganda',
  PK:'Pakistan', BD:'Bangladesh', LK:'Sri Lanka', VN:'Vietnam', CN:'China', KR:'South Korea', TW:'Taiwan',
  AR:'Argentina', CO:'Colombia', CL:'Chile', PE:'Peru',
  RU:'Russia', IR:'Iran', IQ:'Iraq',
}

export function countryName(code: string): string {
  return COUNTRY_NAMES[code.toUpperCase()] ?? code.toUpperCase()
}

export function flagUrl(code: string): string {
  return `https://flagcdn.com/w160/${code.toLowerCase()}.png`
}
