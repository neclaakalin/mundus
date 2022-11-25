const COUNTRIES = [
  {
    id: "AF",
    name: "Afghanistan",
    region: "Asia",
  },
  {
    id: "AL",
    name: "Albania",
    region: "Europe",
  },
  {
    id: "DZ",
    name: "Algeria",
    region: "Africa",
  },
  {
    id: "AS",
    name: "American Samoa",
    region: "Oceania",
  },
  {
    id: "AO",
    name: "Angola",
    region: "Africa",
  },
  {
    id: "AI",
    name: "Anguilla",
    region: "America",
  },
  {
    id: "AG",
    name: "Antigua and Barbuda",
    region: "America",
  },
  {
    id: "AR",
    name: "Argentina",
    region: "America",
  },
  {
    id: "AM",
    name: "Armenia",
    region: "Asia",
  },
  {
    id: "AW",
    name: "Aruba",
    region: "America",
  },
  {
    id: "AU",
    name: "Australia",
    region: "Oceania",
  },
  {
    id: "AT",
    name: "Austria",
    region: "Europe",
  },
  {
    id: "AZ",
    name: "Azerbaijan",
    region: "Asia",
  },
  {
    id: "BS",
    name: "Bahamas",
    region: "America",
  },
  {
    id: "BH",
    name: "Bahrain",
    region: "Asia",
  },
  {
    id: "BD",
    name: "Bangladesh",
    region: "Asia",
  },
  {
    id: "BB",
    name: "Barbados",
    region: "America",
  },
  {
    id: "BY",
    name: "Belarus",
    region: "Europe",
  },
  {
    id: "BE",
    name: "Belgium",
    region: "Europe",
  },
  {
    id: "BZ",
    name: "Belize",
    region: "America",
  },
  {
    id: "BJ",
    name: "Benin",
    region: "Africa",
  },
  {
    id: "BM",
    name: "Bermuda",
    region: "America",
  },
  {
    id: "BT",
    name: "Bhutan",
    region: "Asia",
  },
  {
    id: "BO",
    name: "Bolivia (Plurinational State of)",
    region: "America",
  },
  {
    id: "BQ",
    name: "Bonaire, Sint Eustatius and Saba",
    region: "America",
  },
  {
    id: "BA",
    name: "Bosnia and Herzegovina",
    region: "Europe",
  },
  {
    id: "BW",
    name: "Botswana",
    region: "Africa",
  },
  {
    id: "BR",
    name: "Brazil",
    region: "America",
  },
  {
    id: "VG",
    name: "Virgin Islands (British)",
    region: "America",
  },
  {
    id: "VI",
    name: "Virgin Islands (U.S.)",
    region: "America",
  },
  {
    id: "BN",
    name: "Brunei Darussalam",
    region: "Asia",
  },
  {
    id: "BG",
    name: "Bulgaria",
    region: "Europe",
  },
  {
    id: "BF",
    name: "Burkina Faso",
    region: "Africa",
  },
  {
    id: "BI",
    name: "Burundi",
    region: "Africa",
  },
  {
    id: "KH",
    name: "Cambodia",
    region: "Asia",
  },
  {
    id: "CM",
    name: "Cameroon",
    region: "Africa",
  },
  {
    id: "CA",
    name: "Canada",
    region: "America",
  },
  {
    id: "CV",
    name: "Cabo Verde",
    region: "Africa",
  },
  {
    id: "KY",
    name: "Cayman Islands",
    region: "America",
  },
  {
    id: "CF",
    name: "Central African Republic",
    region: "Africa",
  },
  {
    id: "TD",
    name: "Chad",
    region: "Africa",
  },
  {
    id: "CL",
    name: "Chile",
    region: "America",
  },
  {
    id: "CN",
    name: "China",
    region: "Asia",
  },
  {
    id: "CO",
    name: "Colombia",
    region: "America",
  },
  {
    id: "KM",
    name: "Comoros",
    region: "Africa",
  },
  {
    id: "CG",
    name: "Congo",
    region: "Africa",
  },
  {
    id: "CD",
    name: "Congo (Democratic Republic of the)",
    region: "Africa",
  },
  {
    id: "CR",
    name: "Costa Rica",
    region: "America",
  },
  {
    id: "HR",
    name: "Croatia",
    region: "Europe",
  },
  {
    id: "CU",
    name: "Cuba",
    region: "America",
  },
  {
    id: "CW",
    name: "Curaçao",
    region: "America",
  },
  {
    id: "CY",
    name: "Cyprus",
    region: "Europe",
  },
  {
    id: "CZ",
    name: "Czech Republic",
    region: "Europe",
  },
  {
    id: "DK",
    name: "Denmark",
    region: "Europe",
  },
  {
    id: "DJ",
    name: "Djibouti",
    region: "Africa",
  },
  {
    id: "DM",
    name: "Dominica",
    region: "America",
  },
  {
    id: "DO",
    name: "Dominican Republic",
    region: "America",
  },
  {
    id: "EC",
    name: "Ecuador",
    region: "America",
  },
  {
    id: "EG",
    name: "Egypt",
    region: "Africa",
  },
  {
    id: "SV",
    name: "El Salvador",
    region: "America",
  },
  {
    id: "GQ",
    name: "Equatorial Guinea",
    region: "Africa",
  },
  {
    id: "ER",
    name: "Eritrea",
    region: "Africa",
  },
  {
    id: "EE",
    name: "Estonia",
    region: "Europe",
  },
  {
    id: "ET",
    name: "Ethiopia",
    region: "Africa",
  },
  {
    id: "FK",
    name: "Falkland Islands (Malvinas)",
    region: "America",
  },
  {
    id: "FO",
    name: "Faroe Islands",
    region: "Europe",
  },
  {
    id: "FJ",
    name: "Fiji",
    region: "Oceania",
  },
  {
    id: "FI",
    name: "Finland",
    region: "Europe",
  },
  {
    id: "FR",
    name: "France",
    region: "Europe",
  },
  {
    id: "GF",
    name: "French Guiana",
    region: "America",
  },
  {
    id: "PF",
    name: "French Polynesia",
    region: "Oceania",
  },
  {
    id: "GA",
    name: "Gabon",
    region: "Africa",
  },
  {
    id: "GM",
    name: "Gambia",
    region: "Africa",
  },
  {
    id: "GE",
    name: "Georgia",
    region: "Asia",
  },
  {
    id: "DE",
    name: "Germany",
    region: "Europe",
  },
  {
    id: "GH",
    name: "Ghana",
    region: "Africa",
  },
  {
    id: "GR",
    name: "Greece",
    region: "Europe",
  },
  {
    id: "GL",
    name: "Greenland",
    region: "America",
  },
  {
    id: "GD",
    name: "Grenada",
    region: "America",
  },
  {
    id: "GP",
    name: "Guadeloupe",
    region: "America",
  },
  {
    id: "GU",
    name: "Guam",
    region: "Oceania",
  },
  {
    id: "GT",
    name: "Guatemala",
    region: "America",
  },
  {
    id: "GN",
    name: "Guinea",
    region: "Africa",
  },
  {
    id: "GW",
    name: "Guinea-Bissau",
    region: "Africa",
  },
  {
    id: "GY",
    name: "Guyana",
    region: "America",
  },
  {
    id: "HT",
    name: "Haiti",
    region: "America",
  },
  {
    id: "HN",
    name: "Honduras",
    region: "America",
  },
  {
    id: "HU",
    name: "Hungary",
    region: "Europe",
  },
  {
    id: "IS",
    name: "Iceland",
    region: "Europe",
  },
  {
    id: "IN",
    name: "India",
    region: "Asia",
  },
  {
    id: "ID",
    name: "Indonesia",
    region: "Asia",
  },
  {
    id: "CI",
    name: "Ivory Coast",
    region: "Africa",
  },
  {
    id: "IR",
    name: "Iran (Islamic Republic of)",
    region: "Asia",
  },
  {
    id: "IQ",
    name: "Iraq",
    region: "Asia",
  },
  {
    id: "IE",
    name: "Ireland",
    region: "Europe",
  },
  {
    id: "IL",
    name: "Israel",
    region: "Asia",
  },
  {
    id: "IT",
    name: "Italy",
    region: "Europe",
  },
  {
    id: "JM",
    name: "Jamaica",
    region: "America",
  },
  {
    id: "JP",
    name: "Japan",
    region: "Asia",
  },
  {
    id: "JO",
    name: "Jordan",
    region: "Asia",
  },
  {
    id: "KZ",
    name: "Kazakhstan",
    region: "Asia",
  },
  {
    id: "KE",
    name: "Kenya",
    region: "Africa",
  },
  {
    id: "KW",
    name: "Kuwait",
    region: "Asia",
  },
  {
    id: "KG",
    name: "Kyrgyzstan",
    region: "Asia",
  },
  {
    id: "LA",
    name: "Lao People's Democratic Republic",
    region: "Asia",
  },
  {
    id: "LV",
    name: "Latvia",
    region: "Europe",
  },
  {
    id: "LB",
    name: "Lebanon",
    region: "Asia",
  },
  {
    id: "LS",
    name: "Lesotho",
    region: "Africa",
  },
  {
    id: "LR",
    name: "Liberia",
    region: "Africa",
  },
  {
    id: "LY",
    name: "Libya",
    region: "Africa",
  },
  {
    id: "LT",
    name: "Lithuania",
    region: "Europe",
  },
  {
    id: "LU",
    name: "Luxembourg",
    region: "Europe",
  },
  {
    id: "MK",
    name: "North Macedonia",
    region: "Europe",
  },
  {
    id: "MG",
    name: "Madagascar",
    region: "Africa",
  },
  {
    id: "MW",
    name: "Malawi",
    region: "Africa",
  },
  {
    id: "MY",
    name: "Malaysia",
    region: "Asia",
  },
  {
    id: "MV",
    name: "Maldives",
    region: "Asia",
  },
  {
    id: "ML",
    name: "Mali",
    region: "Africa",
  },
  {
    id: "MT",
    name: "Malta",
    region: "Europe",
  },
  {
    id: "MH",
    name: "Marshall Islands",
    region: "Oceania",
  },
  {
    id: "MQ",
    name: "Martinique",
    region: "America",
  },
  {
    id: "MR",
    name: "Mauritania",
    region: "Africa",
  },
  {
    id: "MU",
    name: "Mauritius",
    region: "Africa",
  },
  {
    id: "YT",
    name: "Mayotte",
    region: "Africa",
  },
  {
    id: "MX",
    name: "Mexico",
    region: "America",
  },
  {
    id: "FM",
    name: "Micronesia (Federated States of)",
    region: "Oceania",
  },
  {
    id: "MD",
    name: "Moldova (Republic of)",
    region: "Europe",
  },
  {
    id: "MN",
    name: "Mongolia",
    region: "Asia",
  },
  {
    id: "ME",
    name: "Montenegro",
    region: "Europe",
  },
  {
    id: "MS",
    name: "Montserrat",
    region: "America",
  },
  {
    id: "MA",
    name: "Morocco",
    region: "Africa",
  },
  {
    id: "MZ",
    name: "Mozambique",
    region: "Africa",
  },
  {
    id: "MM",
    name: "Myanmar",
    region: "Asia",
  },
  {
    id: "NA",
    name: "Namibia",
    region: "Africa",
  },
  {
    id: "NR",
    name: "Nauru",
    region: "Oceania",
  },
  {
    id: "NP",
    name: "Nepal",
    region: "Asia",
  },
  {
    id: "NL",
    name: "Netherlands",
    region: "Europe",
  },
  {
    id: "NC",
    name: "New Caledonia",
    region: "Oceania",
  },
  {
    id: "NZ",
    name: "New Zealand",
    region: "Oceania",
  },
  {
    id: "NI",
    name: "Nicaragua",
    region: "America",
  },
  {
    id: "NE",
    name: "Niger",
    region: "Africa",
  },
  {
    id: "NG",
    name: "Nigeria",
    region: "Africa",
  },
  {
    id: "KP",
    name: "Korea (Democratic People's Republic of)",
    region: "Asia",
  },
  {
    id: "MP",
    name: "Northern Mariana Islands",
    region: "Oceania",
  },
  {
    id: "NO",
    name: "Norway",
    region: "Europe",
  },
  {
    id: "OM",
    name: "Oman",
    region: "Asia",
  },
  {
    id: "PK",
    name: "Pakistan",
    region: "Asia",
  },
  {
    id: "PW",
    name: "Palau",
    region: "Oceania",
  },
  {
    id: "PS",
    name: "Palestine, State of",
    region: "Asia",
  },
  {
    id: "PA",
    name: "Panama",
    region: "America",
  },
  {
    id: "PG",
    name: "Papua New Guinea",
    region: "Oceania",
  },
  {
    id: "PY",
    name: "Paraguay",
    region: "America",
  },
  {
    id: "PE",
    name: "Peru",
    region: "America",
  },
  {
    id: "PH",
    name: "Philippines",
    region: "Asia",
  },
  {
    id: "PL",
    name: "Poland",
    region: "Europe",
  },
  {
    id: "PT",
    name: "Portugal",
    region: "Europe",
  },
  {
    id: "PR",
    name: "Puerto Rico",
    region: "America",
  },
  {
    id: "QA",
    name: "Qatar",
    region: "Asia",
  },
  {
    id: "XK",
    name: "Republic of Kosovo",
    region: "Europe",
  },
  {
    id: "RE",
    name: "Réunion",
    region: "Africa",
  },
  {
    id: "RO",
    name: "Romania",
    region: "Europe",
  },
  {
    id: "RU",
    name: "Russian Federation",
    region: "Europe",
  },
  {
    id: "RW",
    name: "Rwanda",
    region: "Africa",
  },
  {
    id: "BL",
    name: "Saint Barthélemy",
    region: "America",
  },
  {
    id: "KN",
    name: "Saint Kitts and Nevis",
    region: "America",
  },
  {
    id: "LC",
    name: "Saint Lucia",
    region: "America",
  },
  {
    id: "MF",
    name: "Saint Martin (French part)",
    region: "America",
  },
  {
    id: "VC",
    name: "Saint Vincent and the Grenadines",
    region: "America",
  },
  {
    id: "ST",
    name: "Sao Tome and Principe",
    region: "Africa",
  },
  {
    id: "SA",
    name: "Saudi Arabia",
    region: "Asia",
  },
  {
    id: "SN",
    name: "Senegal",
    region: "Africa",
  },
  {
    id: "RS",
    name: "Serbia",
    region: "Europe",
  },
  {
    id: "SC",
    name: "Seychelles",
    region: "Africa",
  },
  {
    id: "SL",
    name: "Sierra Leone",
    region: "Africa",
  },
  {
    id: "SX",
    name: "Sint Maarten (Dutch part)",
    region: "America",
  },
  {
    id: "SK",
    name: "Slovakia",
    region: "Europe",
  },
  {
    id: "SI",
    name: "Slovenia",
    region: "Europe",
  },
  {
    id: "SB",
    name: "Solomon Islands",
    region: "Oceania",
  },
  {
    id: "SO",
    name: "Somalia",
    region: "Africa",
  },
  {
    id: "ZA",
    name: "South Africa",
    region: "Africa",
  },
  {
    id: "KR",
    name: "Korea (Republic of)",
    region: "Asia",
  },
  {
    id: "ES",
    name: "Spain",
    region: "Europe",
  },
  {
    id: "LK",
    name: "Sri Lanka",
    region: "Asia",
  },
  {
    id: "SD",
    name: "Sudan",
    region: "Africa",
  },
  {
    id: "SS",
    name: "South Sudan",
    region: "Africa",
  },
  {
    id: "SR",
    name: "Suriname",
    region: "America",
  },
  {
    id: "SJ",
    name: "Svalbard and Jan Mayen",
    region: "Europe",
  },
  {
    id: "SZ",
    name: "Swaziland",
    region: "Africa",
  },
  {
    id: "SE",
    name: "Sweden",
    region: "Europe",
  },
  {
    id: "CH",
    name: "Switzerland",
    region: "Europe",
  },
  {
    id: "SY",
    name: "Syrian Arab Republic",
    region: "Asia",
  },
  {
    id: "TW",
    name: "Taiwan",
    region: "Asia",
  },
  {
    id: "TJ",
    name: "Tajikistan",
    region: "Asia",
  },
  {
    id: "TZ",
    name: "Tanzania, United Republic of",
    region: "Africa",
  },
  {
    id: "TH",
    name: "Thailand",
    region: "Asia",
  },
  {
    id: "TL",
    name: "Timor-Leste",
    region: "Asia",
  },
  {
    id: "TG",
    name: "Togo",
    region: "Africa",
  },
  {
    id: "TO",
    name: "Tonga",
    region: "Oceania",
  },
  {
    id: "TT",
    name: "Trinidad and Tobago",
    region: "America",
  },
  {
    id: "TN",
    name: "Tunisia",
    region: "Africa",
  },
  {
    id: "TR",
    name: "Turkey",
    region: "Asia",
  },
  {
    id: "TM",
    name: "Turkmenistan",
    region: "Asia",
  },
  {
    id: "TC",
    name: "Turks and Caicos Islands",
    region: "America",
  },
  {
    id: "TV",
    name: "Tuvalu",
    region: "Oceania",
  },
  {
    id: "UG",
    name: "Uganda",
    region: "Africa",
  },
  {
    id: "UA",
    name: "Ukraine",
    region: "Europe",
  },
  {
    id: "AE",
    name: "United Arab Emirates",
    region: "Asia",
  },
  {
    id: "GB",
    name: "United Kingdom",
    region: "Europe",
  },
  {
    id: "US",
    name: "United States of America",
    region: "America",
  },
  {
    id: "UY",
    name: "Uruguay",
    region: "America",
  },
  {
    id: "UZ",
    name: "Uzbekistan",
    region: "Asia",
  },
  {
    id: "VU",
    name: "Vanuatu",
    region: "Oceania",
  },
  {
    id: "VE",
    name: "Venezuela (Bolivarian Republic of)",
    region: "America",
  },
  {
    id: "VN",
    name: "Vietnam",
    region: "Asia",
  },
  {
    id: "EH",
    name: "Western Sahara",
    region: "Africa",
  },
  {
    id: "YE",
    name: "Yemen",
    region: "Asia",
  },
  {
    id: "ZM",
    name: "Zambia",
    region: "Africa",
  },
  {
    id: "ZW",
    name: "Zimbabwe",
    region: "Africa",
  },
];

const ENDPOINT = "https://restcountries.com/v3.1/alpha/";

export { COUNTRIES, ENDPOINT };
