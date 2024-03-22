import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";


const JobCard = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="w-32 h-14"><img src={logo} alt="logo" className=" object-cover p-3" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-4 mt-3">
                    <button className="border border-[#7E90FE] px-5 py-2 rounded font-bold text-secondary">{remote_or_onsite}</button>
                    <button className="border border-[#7E90FE] px-5 py-2 rounded font-bold text-secondary">{job_type}</button>
                </div>

                <div className="flex items-center gap-5 my-3">
                    <div className="flex gap-1 items-center">
                        <IoLocationOutline className="text-xl" />
                        <p>{location}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                    <AiOutlineDollar className="text-xl"/>
                    <p>Salary: {salary}</p>
                    </div>
                </div>

                <div className="card-actions justify-start">
                    <button className="btn btn-primary bg-secondary font-bold border-none hover:bg-primary duration-500">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;