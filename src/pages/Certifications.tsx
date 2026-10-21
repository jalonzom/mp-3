import CertItem from "../components/CertItem.tsx";
import { certifications } from "../data/resume.ts";
import type { Certification } from "../interfaces/Resume.ts";

export default function Certifications() {
    return (
        <>
            <h3>Certifications</h3>
            {
                certifications.map((cert: Certification) =>
                    <CertItem
                        key={cert.name}
                        name={cert.name}
                        description={cert.description}
                    />
                )
            }
        </>
    );
}
