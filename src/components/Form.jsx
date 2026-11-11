import formConfig from "../data/formConfig.jsx";

function Form({ 
    formType,
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
    const config = formConfig[formType];
    console.log(formType, config.logo);

    if (!config) return null;

    const isEducation = formType === 'educationalBackground';

    const entries = isEducation ? educationalBackground : practicalExperience;
    const setEntries = isEducation ? setEducationalBackground : setPracticalExperience;
    const editingId = isEducation ? editingEducationId : editingExperienceId;
    const setEditingId = isEducation ? setEditingEducationId : setEditingExperienceId;

    function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        if (formType === 'personalInfo') {
            setPersonalInfo(
                Object.fromEntries(
                    config.fields.map(field => [field.id, data[field.name]])
                )
            );

            setIsEditingPersonalInfo(false);
        }
        
        if (formType === 'educationalBackground' || formType === 'practicalExperience') {
            if (editingId !== null) return;

            setEntries(prev => [
                ...prev,
                { ...data, id: crypto.randomUUID() }
            ]);
        }

        event.currentTarget.reset();
    }

    function handleEdit(event) {
        if (formType === 'personalInfo') {
            const form = event.currentTarget.closest('form');

            config.fields.forEach(field => {
                const input = form.querySelector(`#${field.id}`);
                input.value = personalInfo[field.id];
            });

            setIsEditingPersonalInfo(true);
        }

        if (formType === 'educationalBackground' || formType === 'practicalExperience') {
            const currentIndex = entries.findIndex(
                entry => entry.id === editingId
            );

            const nextIndex = currentIndex + 1;
            const form = event.currentTarget.closest('form');

            if (nextIndex >= entries.length) {
                setEditingId(null);
                form.reset();
                return;
            }

            const nextEntry = entries[nextIndex];

            config.fields.forEach(field => {
                const input = form.querySelector(`#${field.id}`);
                input.value = nextEntry[field.id];
            });

            setEditingId(nextEntry.id);
        }
    }

    function handleChange(event, fieldId) {
        if (formType === 'personalInfo') {
            setPersonalInfo(prev => ({
                ...prev,
                [fieldId]: event.target.value
            }));
        }

        if (formType === 'educationalBackground' || formType === 'practicalExperience') {
            const currentEntry = entries.find(entry => entry.id === editingId);

            if (!currentEntry) return;

            const updatedEntry = {
                ...currentEntry,
                [fieldId]: event.target.value
            };

            const isEmpty = config.fields.every(
                field => updatedEntry[field.id] === ''
            );

            if (isEmpty) {
                setEntries(prev => prev.filter(entry => entry.id !== editingId));
                setEditingId(null);
                return;
            }

            setEntries(prev =>
                prev.map(entry =>
                    entry.id === editingId ? updatedEntry : entry
                )
            );
        }
    }

    return (
        <form id={config.id} onSubmit={handleSubmit}>
            <div className="formHeader">
                {config.logo}
                <h2>{config.title}</h2>
            </div>
            

            <div className="inputArea">
                {config.fields.map(field => (
                    <div className="inputBox" key={field.id}>
                        <label htmlFor={field.id}>
                            {field.label}
                        </label>

                        <input 
                            {...field}
                            onChange={
                                (formType === 'personalInfo' && isEditingPersonalInfo) ||
                                (formType === 'educationalBackground' && editingEducationId !== null) ||
                                (formType === 'practicalExperience' && editingExperienceId !== null)
                                    ? (event) => handleChange(event, field.id)
                                    : undefined
                            }
                        />
                    </div>
                ))}
            </div>

            <div className="buttonContainer">
                <button className='editButton' type="button" onClick={handleEdit}><i className="fa-solid fa-pen"></i>Edit</button>
                <button className='submitButton' type="submit"><i className="fa-solid fa-upload"></i>Submit</button>
            </div>
        </form>
    );
}

export default Form;