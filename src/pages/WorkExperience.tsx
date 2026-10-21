import WorkEntry from "../components/WorkEntry.tsx";
import { work } from "../data/resume.ts";
import type { Entry } from "../interfaces/Resume.ts";

export default function WorkExperience() {
    return (
        <>
            <h3>Work Experience</h3>
            {
                work.map((entry: Entry) =>
                    <WorkEntry
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
