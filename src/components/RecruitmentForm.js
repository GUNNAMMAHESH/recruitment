import React from 'react';
import Header from './Header';

// List of countries for the dropdown
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

const RecruitmentForm = () => {
  return (
    <>
      <Header />

      <div className="p-4 bg-gray-100 min-h-screen">
        {/* Tabs */}
        <div>
          <ul className="flex border-b">
            <li className="mr-1">
              <a className="bg-green-700 inline-block p-2 text-white font-semibold border rounded" href="#">Basic Information</a>
            </li>
            <li className="mr-1">
              <a className="bg-blue-700 inline-block p-2 text-white font-semibold border rounded" href="#">Educational Information</a>
            </li>
            <li className="mr-1">
              <a className="bg-blue-700 inline-block p-2 text-white font-semibold border rounded" href="#">Past Experience</a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-8xl mx-auto">
          {/* Form */}
          <form className="space-y-4">
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">First Name *</label>
              <input type="text" className="flex-grow w-[70%] mt-2 p-2 border rounded " placeholder="First Name" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Last Name *</label>
              <input type="text" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="Last Name" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Email Address *</label>
              <input type="email" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="Email Address" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Phone *</label>
              <input type="tel" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="Phone" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Alternative Phone</label>
              <input type="tel" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="Alternative Phone" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">SSN</label>
              <input type="text" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="SSN" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Present Address</label>
              <input type="text" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="Present Address" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Permanent Address</label>
              <input type="text" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="Permanent Address" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Country</label>
              <select className="flex-grow w-[70%] mt-2 p-2 border rounded">
                <option value="Afghanistan">Select a country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">City</label>
              <input type="text" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="City" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Zip Code</label>
              <input type="text" className="flex-grow w-[70%] mt-2 p-2 border rounded" placeholder="Zip Code" />
            </div>
            <div className='flex items-center'>
              <label className="block text-gray-700 w-1/4 font-bold">Picture</label>
              <input type="file" className="flex-grow w-[70%] mt-2 p-2 border rounded" />
            </div>
            <div className="text-right">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecruitmentForm;

