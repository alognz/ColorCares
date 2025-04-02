import '../styles/icContainer.css'
import InfoCard from './infoCard.jsx'

function IcContainer() {
    const data1 = ["🏥", "Culturally competent care improves patient outcomes", "Patients who receive culturally competent care report higher satisfaction, better adherence to treatment, and improved health outcomes.", "Betancourt et al., Cultural Competence and Healthcare Disparities"]
    const data2 = ["⚖️", "Racial and ethnic minorities receive lower-quality healthcare", "Even when insured at the same level, racial and ethnic minorities often receive lower-quality care compared to white patients.", "Institute of Medicine, Unequal Treatment: Confronting Racial and Ethnic Disparities in Healthcare"]
    const data3 = ["🌎", "Language and cultural barriers negatively impact healthcare access.", "Patients with language and cultural barriers experience delayed care, lower healthcare access, and poorer health outcomes.", "U.S. Office of Minority Health, National Standards for Culturally and Linguistically Appropriate Health Care Services"]
    return (
        <>
        <div className="info-cards">
            <InfoCard emoji={data1[0]} fact={data1[1]} desc={data1[2]} ref={data1[3]} />
            <InfoCard emoji={data2[0]} fact={data2[1]} desc={data2[2]} ref={data2[3]} />
            <InfoCard emoji={data3[0]} fact={data3[1]} desc={data3[2]} ref={data3[3]} />
        </div>
        </>
    )
}

export default IcContainer