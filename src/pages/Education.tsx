import EduEntry from "../components/EduEntry.tsx";
import { education, leadership } from "../data/resume.ts";
import type { Entry } from "../interfaces/Resume.ts";

export default function Education() {
    return (
        <>
            <h3>Education</h3>
            {
                education.map((entry: Entry) =>
                    <EduEntry
                        key={entry.place}
                        place={entry.place}
                        dates={entry.dates}
                        details={entry.details}
                    />
                )
            }

            <h3>Leadership Experience</h3>
            {
                leadership.map((entry: Entry) =>
                    <EduEntry
                        key={entry.place}
                        place={entry.place}
                        role={entry.role}
                        dates={entry.dates}
                        details={entry.details}
                    />
                )
            }
        </>
    );
}
