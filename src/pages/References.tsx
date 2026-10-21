import ContactCard from "../components/ContactCard.tsx";
import ReferenceBox from "../components/ReferenceBox.tsx";
import { personalReferences, professionalReferences } from "../data/resume.ts";
import type { Contact } from "../interfaces/Resume.ts";

export default function References() {
    return (
        <>
            <h3>References</h3>
            <ReferenceBox title="Professional References">
                {
                    professionalReferences.map((contact: Contact) =>
                        <ContactCard
                            key={contact.email}
                            name={contact.name}
                            title={contact.title}
                            email={contact.email}
                            phone={contact.phone}
                        />
                    )
                }
            </ReferenceBox>
            <ReferenceBox title="Personal References">
                {
                    personalReferences.map((contact: Contact) =>
                        <ContactCard
                            key={contact.email}
                            name={contact.name}
                            title={contact.title}
                            email={contact.email}
                            phone={contact.phone}
                        />
                    )
                }
            </ReferenceBox>
        </>
    );
}
