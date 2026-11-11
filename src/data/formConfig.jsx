const formConfig = {
    personalInfo: {
        id: 'personalInfoInput',
        title: 'Personal Information',
        logo: <i className="fa-solid fa-user"></i>,
        fields: [
            {
                id: 'fullName',
                name: 'fullName',
                label: 'Full Name',
                type: 'text',
                placeholder: 'e.g. Juan Dela Cruz',
                maxLength: 50,
                required: true
            },
            {
                id: 'email',
                name: 'email',
                label: 'Email',
                type: 'email',
                placeholder: 'e.g. juan@email.com',
                maxLength: 50,
                required: true
            },
            {
                id: 'phoneNum',
                name: 'phoneNum',
                label: 'Phone',
                type: 'tel',
                placeholder: 'e.g. 0912 345 6789',
                required: true
            },
            {
                id: 'address',
                name: 'address',
                label: 'Address',
                type: 'text',
                placeholder: 'e.g. Cebu, Philippines',
                maxLength: 100,
                required: true
            }
        ]
    },

    educationalBackground: {
        id: 'educationalBackgroundInput',
        title: 'Educational Background',
        logo: <i className="fa-solid fa-graduation-cap"></i>,
        fields: [
            {
                id: 'school',
                name: 'school',
                label: 'School / University',
                type: 'text',
                placeholder: 'e.g. University of the Philippines',
                maxLength: 50,
                required: true
            },
            {
                id: 'course',
                name: 'course',
                label: 'Degree / Course',
                type: 'text',
                placeholder: 'e.g. BS Computer Science',
                maxLength: 50,
                required: true
            },
            {
                id: 'schoolYear',
                name: 'schoolYear',
                label: 'Year',
                type: 'text',
                placeholder: 'e.g. 2019-2023',
                maxLength: 11,
                required: true
            }
        ]
    },

    practicalExperience: {
        id: 'practicalExperienceInput',
        title: 'Practical Experience',
        logo: <i className="fa-solid fa-briefcase"></i>,
        fields: [
            {
                id: 'role',
                name: 'role',
                label: 'Position / Role',
                type: 'text',
                placeholder: 'e.g. Janitor',
                maxLength: 50,
                required: true
            },
            {
                id: 'company',
                name: 'company',
                label: 'Company',
                type: 'text',
                placeholder: 'e.g. Cleaning Inc.',
                maxLength: 50,
                required: true
            },
            {
                id: 'roleDesc',
                name: 'roleDesc',
                label: 'Description',
                type: 'text',
                placeholder: 'e.g. Cleaned Stuff',
                maxLength: 50,
                required: true
            },
            {
                id: 'roleYear',
                name: 'roleYear',
                label: 'Year',
                type: 'text',
                placeholder: 'e.g. 2019-2023',
                maxLength: 11,
                required: true
            }
        ]
    }
};

export default formConfig;