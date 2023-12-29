const countries = [
  { label: "Afghanistan", id: "Afghanistan" },
  { label: "Åland Islands", id: "Åland Islands" },
  { label: "Albania", id: "Albania" },
  { label: "Algeria", id: "Algeria" },
  { label: "American Samoa", id: "American Samoa" },
  { label: "Andorra", id: "Andorra" },
  { label: "Angola", id: "Angola" },
  { label: "Anguilla", id: "Anguilla" },
  { label: "Antarctica", id: "Antarctica" },
  { label: "Antigua and Barbuda", id: "Antigua and Barbuda" },
  { label: "Argentina", id: "Argentina" },
  { label: "Armenia", id: "Armenia" },
  { label: "Aruba", id: "Aruba" },
  { label: "Australia", id: "Australia" },
  { label: "Austria", id: "Austria" },
  { label: "Azerbaijan", id: "Azerbaijan" },
  { label: "Bahamas", id: "Bahamas" },
  { label: "Bahrain", id: "Bahrain" },
  { label: "Bangladesh", id: "Bangladesh" },
  { label: "Barbados", id: "Barbados" },
  { label: "Belarus", id: "Belarus" },
  { label: "Belgium", id: "Belgium" },
  { label: "Belize", id: "Belize" },
  { label: "Benin", id: "Benin" },
  { label: "Bermuda", id: "Bermuda" },
  { label: "Bhutan", id: "Bhutan" },
  { label: "Bolivia", id: "Bolivia" },
  { label: "Bosnia and Herzegovina", id: "Bosnia and Herzegovina" },
  { label: "Botswana", id: "Botswana" },
  { label: "Bouvet Island", id: "Bouvet Island" },
  { label: "Brazil", id: "Brazil" },
  {
    label: "British Indian Ocean Territory",
    id: "British Indian Ocean Territory",
  },
  { label: "Brunei Darussalam", id: "Brunei Darussalam" },
  { label: "Bulgaria", id: "Bulgaria" },
  { label: "Burkina Faso", id: "Burkina Faso" },
  { label: "Burundi", id: "Burundi" },
  { label: "Cambodia", id: "Cambodia" },
  { label: "Cameroon", id: "Cameroon" },
  { label: "Canada", id: "Canada" },
  { label: "Cape Verde", id: "Cape Verde" },
  { label: "Cayman Islands", id: "Cayman Islands" },
  { label: "Central African Republic", id: "Central African Republic" },
  { label: "Chad", id: "Chad" },
  { label: "Chile", id: "Chile" },
  { label: "China", id: "China" },
  { label: "Christmas Island", id: "Christmas Island" },
  { label: "Cocos (Keeling) Islands", id: "Cocos (Keeling) Islands" },
  { label: "Colombia", id: "Colombia" },
  { label: "Comoros", id: "Comoros" },
  { label: "Congo", id: "CG" },
  {
    label: "Congo, The Democratic Republic of the",
    id: "Congo, The Democratic Republic of the",
  },
  { label: "Cook Islands", id: "Cook Islands" },
  { label: "Costa Rica", id: "Costa Rica" },
  { label: "Cote D'Ivoire", id: "Cote D'Ivoire" },
  { label: "Croatia", id: "Croatia" },
  { label: "Cuba", id: "Cuba" },
  { label: "Cyprus", id: "Cyprus" },
  { label: "Czech Republic", id: "Czech Republic" },
  { label: "Denmark", id: "Denmark" },
  { label: "Djibouti", id: "Djibouti" },
  { label: "Dominica", id: "Dominica" },
  { label: "Dominican Republic", id: "Dominican Republic" },
  { label: "Ecuador", id: "Ecuador" },
  { label: "Egypt", id: "Egypt" },
  { label: "El Salvador", id: "El Salvador" },
  { label: "Equatorial Guinea", id: "Equatorial Guinea" },
  { label: "Eritrea", id: "Eritrea" },
  { label: "Estonia", id: "Estonia" },
  { label: "Ethiopia", id: "Ethiopia" },
  { label: "Falkland Islands (Malvinas)", id: "Falkland Islands (Malvinas)" },
  { label: "Faroe Islands", id: "Faroe Islands" },
  { label: "Fiji", id: "Fiji" },
  { label: "Finland", id: "Finland" },
  { label: "France", id: "France" },
  { label: "French Guiana", id: "French Guiana" },
  { label: "French Polynesia", id: "French Polynesia" },
  { label: "French Southern Territories", id: "French Southern Territories" },
  { label: "Gabon", id: "Gabon" },
  { label: "Gambia", id: "Gambia" },
  { label: "Georgia", id: "Georgia" },
  { label: "Germany", id: "Germany" },
  { label: "Ghana", id: "Ghana" },
  { label: "Gibraltar", id: "Gibraltar" },
  { label: "Greece", id: "Greece" },
  { label: "Greenland", id: "Greenland" },
  { label: "Grenada", id: "Grenada" },
  { label: "Guadeloupe", id: "Guadeloupe" },
  { label: "Guam", id: "Guam" },
  { label: "Guatemala", id: "Guatemala" },
  { label: "Guernsey", id: "Guernsey" },
  { label: "Guinea", id: "Guinea" },
  { label: "Guinea-Bissau", id: "Guinea-Bissau" },
  { label: "Guyana", id: "Guyana" },
  { label: "Haiti", id: "Haiti" },
  {
    label: "Heard Island and Mcdonald Islands",
    id: "Heard Island and Mcdonald Islands",
  },
  {
    label: "Holy See (Vatican City State)",
    id: "Holy See (Vatican City State)",
  },
  { label: "Honduras", id: "Honduras" },
  { label: "Hong Kong", id: "Hong Kong" },
  { label: "Hungary", id: "Hungary" },
  { label: "Iceland", id: "Iceland" },
  { label: "India", id: "India" },
  { label: "Indonesia", id: "Indonesia" },
  { label: "Iran, Islamic Republic Of", id: "Iran, Islamic Republic Of" },
  { label: "Iraq", id: "Iraq" },
  { label: "Ireland", id: "Ireland" },
  { label: "Isle of Man", id: "Isle of Man" },
  { label: "Israel", id: "Israel" },
  { label: "Italy", id: "Italy" },
  { label: "Jamaica", id: "Jamaica" },
  { label: "Japan", id: "Japan" },
  { label: "Jersey", id: "Jersey" },
  { label: "Jordan", id: "Jordan" },
  { label: "Kazakhstan", id: "Kazakhstan" },
  { label: "Kenya", id: "Kenya" },
  { label: "Kiribati", id: "Kiribati" },
  {
    label: "Korea, Democratic People'S Republic of",
    id: "Korea, Democratic People'S Republic of",
  },
  { label: "Korea, Republic of", id: "Korea, Republic of" },
  { label: "Kuwait", id: "Kuwait" },
  { label: "Kyrgyzstan", id: "Kyrgyzstan" },
  {
    label: "Lao People'S Democratic Republic",
    id: "Lao People'S Democratic Republic",
  },
  { label: "Latvia", id: "Latvia" },
  { label: "Lebanon", id: "Lebanon" },
  { label: "Lesotho", id: "Lesotho" },
  { label: "Liberia", id: "Liberia" },
  { label: "Libyan Arab Jamahiriya", id: "Libyan Arab Jamahiriya" },
  { label: "Liechtenstein", id: "Liechtenstein" },
  { label: "Lithuania", id: "Lithuania" },
  { label: "Luxembourg", id: "Luxembourg" },
  { label: "Macao", id: "Macao" },
  {
    label: "Macedonia, The Former Yugoslav Republic of",
    id: "Macedonia, The Former Yugoslav Republic of",
  },
  { label: "Madagascar", id: "Madagascar" },
  { label: "Malawi", id: "Malawi" },
  { label: "Malaysia", id: "Malaysia" },
  { label: "Maldives", id: "Maldives" },
  { label: "Mali", id: "Mali" },
  { label: "Malta", id: "Malta" },
  { label: "Marshall Islands", id: "Marshall Islands" },
  { label: "Martinique", id: "Martinique" },
  { label: "Mauritania", id: "Mauritania" },
  { label: "Mauritius", id: "Mauritius" },
  { label: "Mayotte", id: "Mayotte" },
  { label: "Mexico", id: "Mexico" },
  {
    label: "Micronesia, Federated States of",
    id: "Micronesia, Federated States of",
  },
  { label: "Moldova, Republic of", id: "Moldova, Republic of" },
  { label: "Monaco", id: "Monaco" },
  { label: "Mongolia", id: "Mongolia" },
  { label: "Montserrat", id: "Montserrat" },
  { label: "Morocco", id: "Morocco" },
  { label: "Mozambique", id: "Mozambique" },
  { label: "Myanmar", id: "Myanmar" },
  { label: "Namibia", id: "Namibia" },
  { label: "Nauru", id: "Nauru" },
  { label: "Nepal", id: "Nepal" },
  { label: "Netherlands", id: "Netherlands" },
  { label: "Netherlands Antilles", id: "Netherlands Antilles" },
  { label: "New Caledonia", id: "New Caledonia" },
  { label: "New Zealand", id: "New Zealand" },
  { label: "Nicaragua", id: "Nicaragua" },
  { label: "Niger", id: "Niger" },
  { label: "Nigeria", id: "Nigeria" },
  { label: "Niue", id: "Niue" },
  { label: "Norfolk Island", id: "Norfolk Island" },
  { label: "Northern Mariana Islands", id: "Northern Mariana Islands" },
  { label: "Norway", id: "Norway" },
  { label: "Oman", id: "Oman" },
  { label: "Pakistan", id: "Pakistan" },
  { label: "Palau", id: "Palau" },
  {
    label: "Palestinian Territory, Occupied",
    id: "Palestinian Territory, Occupied",
  },
  { label: "Panama", id: "Panama" },
  { label: "Papua New Guinea", id: "Papua New Guinea" },
  { label: "Paraguay", id: "Paraguay" },
  { label: "Peru", id: "Peru" },
  { label: "Philippines", id: "Philippines" },
  { label: "Pitcairn", id: "Pitcairn" },
  { label: "Poland", id: "Poland" },
  { label: "Portugal", id: "Portugal" },
  { label: "Puerto Rico", id: "Puerto Rico" },
  { label: "Qatar", id: "Qatar" },
  { label: "Reunion", id: "Reunion" },
  { label: "Romania", id: "Romania" },
  { label: "Russian Federation", id: "Russian Federation" },
  { label: "Rwanda", id: "Rwanda" },
  { label: "Saint Helena", id: "Saint Helena" },
  { label: "Saint Kitts and Nevis", id: "Saint Kitts and Nevis" },
  { label: "Saint Lucia", id: "Saint Lucia" },
  { label: "Saint Pierre and Miquelon", id: "Saint Pierre and Miquelon" },
  {
    label: "Saint Vincent and the Grenadines",
    id: "Saint Vincent and the Grenadines",
  },
  { label: "Samoa", id: "Samoa" },
  { label: "San Marino", id: "San Marino" },
  { label: "Sao Tome and Principe", id: "Sao Tome and Principe" },
  { label: "Saudi Arabia", id: "Saudi Arabia" },
  { label: "Senegal", id: "Senegal" },
  { label: "Serbia and Montenegro", id: "Serbia and Montenegro" },
  { label: "Seychelles", id: "Seychelles" },
  { label: "Sierra Leone", id: "Sierra Leone" },
  { label: "Singapore", id: "Singapore" },
  { label: "Slovakia", id: "Slovakia" },
  { label: "Slovenia", id: "Slovenia" },
  { label: "Solomon Islands", id: "Solomon Islands" },
  { label: "Somalia", id: "Somalia" },
  { label: "South Africa", id: "South Africa" },
  {
    label: "South Georgia and the South Sandwich Islands",
    id: "South Georgia and the South Sandwich Islands",
  },
  { label: "Spain", id: "Spain" },
  { label: "Sri Lanka", id: "Sri Lanka" },
  { label: "Sudan", id: "Sudan" },
  { label: "Surilabel", id: "Surilabel" },
  { label: "Svalbard and Jan Mayen", id: "Svalbard and Jan Mayen" },
  { label: "Swaziland", id: "Swaziland" },
  { label: "Sweden", id: "Sweden" },
  { label: "Switzerland", id: "Switzerland" },
  { label: "Syrian Arab Republic", id: "Syrian Arab Republic" },
  { label: "Taiwan, Province of China", id: "Taiwan, Province of China" },
  { label: "Tajikistan", id: "Tajikistan" },
  { label: "Tanzania, United Republic of", id: "Tanzania, United Republic of" },
  { label: "Thailand", id: "Thailand" },
  { label: "Timor-Leste", id: "Timor-Leste" },
  { label: "Togo", id: "Togo" },
  { label: "Tokelau", id: "Tokelau" },
  { label: "Tonga", id: "Tonga" },
  { label: "Trinidad and Tobago", id: "Trinidad and Tobago" },
  { label: "Tunisia", id: "Tunisia" },
  { label: "Turkey", id: "Turkey" },
  { label: "Turkmenistan", id: "Turkmenistan" },
  { label: "Turks and Caicos Islands", id: "Turks and Caicos Islands" },
  { label: "Tuvalu", id: "Tuvalu" },
  { label: "Uganda", id: "Uganda" },
  { label: "Ukraine", id: "Ukraine" },
  { label: "United Arab Emirates", id: "United Arab Emirates" },
  { label: "United Kingdom", id: "United Kingdom" },
  { label: "United States", id: "United States" },
  {
    label: "United States Minor Outlying Islands",
    id: "United States Minor Outlying Islands",
  },
  { label: "Uruguay", id: "Uruguay" },
  { label: "Uzbekistan", id: "Uzbekistan" },
  { label: "Vanuatu", id: "Vanuatu" },
  { label: "Venezuela", id: "Venezuela" },
  { label: "Viet Nam", id: "Viet Nam" },
  { label: "Virgin Islands, British", id: "Virgin Islands, British" },
  { label: "Virgin Islands, U.S.", id: "Virgin Islands, U.S." },
  { label: "Wallis and Futuna", id: "Wallis and Futuna" },
  { label: "Western Sahara", id: "Western Sahara" },
  { label: "Yemen", id: "Yemen" },
  { label: "Zambia", id: "Zambia" },
  { label: "Zimbabwe", id: "Zimbabwe" },
];

export default countries;
