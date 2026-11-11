import '../styles/input.css'
import Form from './Form'

function Input({ 
    personalInfo, 
    setPersonalInfo, 
    isEditingPersonalInfo, 
    setIsEditingPersonalInfo, 
    educationalBackground,
    setEducationalBackground,
    editingEducationId,
    setEditingEducationId,
    practicalExperience,
    setPracticalExperience,
    editingExperienceId,
    setEditingExperienceId
    }){
    return(
        <div className='inputContainer'>
            <Form 
                formType='personalInfo' 
                personalInfo={personalInfo} 
                setPersonalInfo={setPersonalInfo}
                isEditingPersonalInfo={isEditingPersonalInfo}
                setIsEditingPersonalInfo={setIsEditingPersonalInfo}
            ></Form>
            <Form 
                formType='educationalBackground'
                educationalBackground={educationalBackground}
                setEducationalBackground={setEducationalBackground}
                editingEducationId={editingEducationId}
                setEditingEducationId={setEditingEducationId}
            ></Form>
            <Form 
                formType='practicalExperience'
                practicalExperience={practicalExperience}
                setPracticalExperience={setPracticalExperience}
                editingExperienceId={editingExperienceId}
                setEditingExperienceId={setEditingExperienceId}
            ></Form>
        </div>
    )
}

export default Input