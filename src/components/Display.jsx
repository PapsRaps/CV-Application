import '../styles/display.css'

function Display({ personalInfo,educationalBackground,practicalExperience }){
    return(
        <div className='displayContainer'>
            <h2>CV Preview</h2>
            <div className='personalInfoDisplay'>
                <h3>{personalInfo.fullName === ''?'Your Name':personalInfo.fullName}</h3>
                <div className='contacts'>
                    <p><i className="fa-solid fa-envelope"></i>{personalInfo.email === ''?'Your Email':personalInfo.email}</p>
                    <p><i className="fa-solid fa-phone"></i>{personalInfo.phoneNum === ''?'Your Phone Number':personalInfo.phoneNum}</p>
                    <p><i className="fa-solid fa-location-dot"></i>{personalInfo.address  === ''?'Your Address':personalInfo.address}</p>
                </div>
            </div>
            <hr/>
            {educationalBackground.length > 0 && (
                <div className="educationalBackgroundDisplay">
                    <h4><i className="fa-solid fa-graduation-cap"></i>EDUCATION</h4>

                    {educationalBackground.map((education, index) => (
                        <div className="schoolDisplay" key={index}>
                            <p className='school'>{education.school}</p>
                            <p className='course'>{education.course}</p>
                            <p className='schoolYear'>{education.schoolYear}</p>
                        </div>
                    ))}
                    <hr/>
                </div>
            )}
            {practicalExperience.length > 0 && (
                <div className="practicalExperienceDisplay">
                    <h4><i className="fa-solid fa-briefcase"></i>EXPERIENCE</h4>

                    {practicalExperience.map((exp, index) => (
                        <div className="expDisplay" key={index}>
                            <p className='role'>{exp.role}</p>
                            <p className='company'>{exp.company}</p>
                            <p className='roleDesc'>{exp.roleDesc}</p>
                            <p className='roleYear'>{exp.roleYear}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Display