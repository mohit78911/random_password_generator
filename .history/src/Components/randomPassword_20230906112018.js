import React, { useState } from 'react'

export default function randomPassword() {
    const [password,setPassword] = useState('')
    const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = ()=>{
    const charlist = (includeUppercase? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') + 
    (includeLowercase? 'abcdefghijklmnopqrstuvwxyz' : '') + 
    (includeNumbers? '0123456789' : '') + (includee)
  }
  return (
    <div>
      
    </div>
  )
}
