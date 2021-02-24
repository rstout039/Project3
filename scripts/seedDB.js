const mongoose = require("mongoose");
const db = require("../models");

// This file empties the the requirements for the job below //

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/stoutimusJobRequirementGeneration",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }
);

const jobSeed = [
    {
        title: "Engineer",
        owner: "Stout Goes Greener",
        description:
            "Analyze, develop, and evaluate large-scale, complex systems. Also maintain and improve current systems or create new projects.",
        job_requirements: ["Earn a bachelor's degree in engineering from an accredited Accreditation Board for Engineering and Technology (ABET) school", "Pass the Fundamentals of Engineering (FE) exam", "Complete at least four years of engineering experience"],
        job_responsibilities: ["Make plans using detailed drawings", "Prepare estimates and budgets", "Creating accurate project specifications", "Designing engineering experiments"]
    },
    {
        title: " Medical Coder",
        owner: "Stoutimus Astounding Technologies",
        description:
            "Analyze medical records and identifies documentation deficiencies. Reviews and verifies documentation support diagnoses, procedures and treatment results. Identifies diagnostic and procedural information.",
        job_requirements: ["Associate's Degree in Medical coding or successful completion of a certification program", "Stong knowledge of anatomy, physiology, and medical technology", "Excellent typing and 10-key speed and accuracy", "Commitment to a high level of customer service", "Superior mathematical skills"],
        job_responsibilities: ["Anayze medical records", "Identify document deficiencies", "Review and verify documentation support diagnoses, procedures, and treatment results", "Identifies diagnostic and procedural information"]
    },
    {
        title: "Web Developer",
        owner: "Ryans Theraputic Directorial Computational Systems",
        description:
            "Coding, designing, and laying out websites according to company or client specifications.",
        job_requirements: ["Knowledge of HTML, CSS, Javascript, PHP, and other coding kanguages", "Create and test applications for websites", "Collaborate", "Present design specs", "Work with graphics and other designers", "Troubleshoot website problems", "Maintain and update websites", "Monitor website traffic"],
        job_responsibilities: ["Designing engaging and responsive landing pages", "Integrating client CMS programs and data feeds into websites", "Optimising sites for maximum speed and scalability", "Employing industry and design best practice through website build process", "Conducting website testing"]
    },
    {
        title: "Architect",
        owner: "Stouts Architecting Solutions",
        description:
            "Planning, developing, and implementing building designs, environmental habitats, or other modern world structures.",
        job_requirements:["Bachelor's or master's degree in architecture from an accredited institution", "3+ years of architectual experience (preferably within a hiring firm's field)", "Understanding knowledge of building codes, zoning regulations, building construction, building systems, and site requirements"],
        job_responsibilities: ["Lead and develop projects from early concepts through design development", "Prepare drawings, specifications, and construction documents", "Design and document commercial and industrial building projects", "Consult with clients to determine their requirements"]
    },
    {
        title: "Pediatrician",
        owner: "Dr. Stout's Head and Neck Clinic",
        description:
            "Provide preventive and medical care for infants, toddlers, children, teenagers, and adults.",
        job_requirements: ["Graduate from medical school", "Complete four years of college, four years of medical school, and three years in an accredited residency pediatrician program"],
        job_responsibilities: ["Treat minor injuries, common illnesses, and infectious diseases", "Taking patient medical histories", "Creating treatment plans for the patient", "Examining and recording overall health history of the patient"]
    },
    {
        title: "Dentist",
        owner: "Mr. Stout's Dental Teethinatory",
        description:
            "Diagnose and treat dental issues and help patients develop better oral hygiene regimens.",
        job_requirements: ["DDS, or DMD from an accredited Comission od Dental Accreditation (CODA) dental program", "Bachelor's degree", "Complete biology and chemistry"],
        job_responsibilities: ["Diagnosing oral diseases", "Promoting oral health and disease prevention", "Interpreting x-rays and diagnostic tests", "Monitoring growth and development of teeth and jaws"]
    },
    {
        title: "Nurse Anesthesiologist",
        owner: "Stout's Medical Practice",
        description:
            "Administer anesthesia and provide care for patients before, during, and after theraputic, surgical, obstetrical, and diagnostic procedures.",
        job_requirements: ["Bachelor's of science in nursing (BSN)", "Master's of science in nursing (MSN)", "Pass the National Council License Examination-Registered Nurse (NCLEX-RN)", "Obtain a critical-care registered nurse (CCRN) certification", "Gain admission to an accredited nurse anesthesia program", "Earn a Doctor of Nursing Practice In Anesthesia (DNAP) Degree", " Obtain certification from the National Board of Certification and Recertification for Nurse Anesthetist (NBCRNA)", "Obtain Nurse Practitioner State License"],
        job_responsibilities: ["Preparing for anesthetic management", "Overseeing recovery from anesthesia", "Maintaining anesthesia intraoperatively", "Following patients' postoperative course from recovery room to patient care unit"]
    },
    {
        title: "Airplane Pilot",
        owner: "Stout's Aeronautics",
        description:
            "Fly passengers or cargo on long or short-haul flights for leisure, business, or commercial purposes.",
        job_requirements: ["Be at least 23 years old", "Hold a commercial pilot certificate with instrument rating", "Have recorded at least 1500 hours total time flying", "Have recorded 50 hours flying a multi-engine airplane"],
        job_responsibilities: ["Create flight plans, considering aircraft performance, altitude, and weather conditions", "Check the aircraft before every flight(engines, radars, navigation systems, etc.)", "Ensure cargo weight doesn't exceed aircraft limits", "Communicate with air traffic control to ensure safe takeoff and landing"]
    },
    {
        title: "Judge",
        owner: "Ryan Stout's Law Firm and Prosecution",
        description:
            "Interprets and applies laws and precedents to determine outcomes and make rulings on legal matters.",
        job_requirements: ["Earn a bachelor's degree", "Pass the Law School Administration Test", "Attend Law School and earn a Juris Doctorate", "Pass the bar exam"],
        job_responsibilities: ["Hear allogations of the prosecuting and defending parties", "Listen to witness testimony", "Rule on the admissibility of evidence", "Inform defendants of their rights"]
    },
    {
        title: "Orthodontist",
        owner: "Mr Stout's Orthodontics",
        description:
            "Specializes in diagnosis, prevention, and correction of teeth and jaw irregularities.",
        job_requirements: ["Bachelor's degree", "Dental Degree (DDS or DMD)", "Certification in orthodontics", "Masters in craniofacial biology"],
        job_responsibilities: ["Design, fabricate, or use orthodontic appliances to realign teeth and jaws", "Diagnose teeth, mouth, and jaw abnormalities", "Prepare mouths for braces or other treatments", "Apply spacers, arch wires, etc."]
    },
    {
        title: "Chief Executive Officer",
        owner: "Any Stout Corporation or Enterprise",
        description:
            "Highest-ranking executive in a company, corporation, or enterprise",
        job_requirements: ["Bachelor's or master's degree in a relevant discipline", "Experience in a senior management position", "Knowledge of profit and loss, balance sheet and cash flow management", "General finance and budgeting"],
        job_responsibilities: ["Make major corporate decisions", "Managing the overall operations and resources of a company", "Act as the main point of communication between the Board of Directors and corporate operations", "Being the public face of the company"]
    }

]

db.Job
    .remove({})
    .then(() => db.Job.collection.insertMany(jobSeed))
    .then(data =>{
        console.log(data.result.n + " jobs inserted");
        process.exit(0);
    })
    .catch(err =>{
        console.error(err)
        process.exit(1);
    });