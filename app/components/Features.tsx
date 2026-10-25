import { HiFolderOpen, HiUsers } from "react-icons/hi2"
import { PiListDashesFill } from "react-icons/pi"
import FeatureCards from "./FeatureCards"

const features = [
    {
        id: 1,
        title: "Project Management",
        description: "Plan, organize, and oversee every project from one central place.",
        icon: HiFolderOpen
    },



    {
        id: 2,
        title: "Task Management",
        description: "Assign ownership, set priorities, and keep deadlines in view.",
        icon: PiListDashesFill
    },



    {
        id: 3,
        title: "Team Collaboration",
        description: "Bring discussions, updates, and shared responsibilities together.",
        icon: HiUsers
    }
]
const Features = () => {
    return (
        <section id="features" className="bg-white py-20 sm:py-24">
        <div id="solutions-overview" className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="text-center">
            {/* User's Original Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.15] px-4">
                Everything works{" "} <br />
                <span className="text-primary font-dm-serif-display italic font-normal">
                    better
                </span>{" "}
                together.
            </h2>

            {/* Persuasive Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-5 px-4 font-normal leading-relaxed">
                From organizing complex projects to keeping everyday tasks moving, Veylo helps your team stay aligned without adding unnecessary complexity.
            </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:[&>:last-child:nth-child(odd)]:col-span-2 lg:[&>:last-child:nth-child(odd)]:col-span-1">
            {features.map((feature)=>(
                <FeatureCards key={feature.id} title={feature.title} description={feature.description} Icon={feature.icon}/>
            ))}
            </div>
        </div>
        </section>
    )
}

export default Features