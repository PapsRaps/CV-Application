import Header from './components/Header.jsx'
import Input from './components/Input.jsx'
import Display from './components/Display.jsx'

import { useState } from 'react'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phoneNum: '',
    address: ''
  });

  const [educationalBackground, setEducationalBackground] = useState([]);

  const [practicalExperience, setPracticalExperience] = useState([]);

  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [editingEducationId, setEditingEducationId] = useState(null);
  const [editingExperienceId, setEditingExperienceId] = useState(null);

  return (
    <div className='container'>
      <Header></Header>
      <Input
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        isEditingPersonalInfo={isEditingPersonalInfo}
        setIsEditingPersonalInfo={setIsEditingPersonalInfo}
        educationalBackground={educationalBackground}
        setEducationalBackground={setEducationalBackground}
        editingEducationId={editingEducationId}
        setEditingEducationId={setEditingEducationId}
        practicalExperience={practicalExperience}
        setPracticalExperience={setPracticalExperience}
        editingExperienceId={editingExperienceId}
        setEditingExperienceId={setEditingExperienceId}
      />
      <Display 
        personalInfo ={personalInfo}
        educationalBackground={educationalBackground}
        practicalExperience={practicalExperience}
      />
    </div>
  )
}

export default App
