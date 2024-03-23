import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeaturedJob = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    // console.log(jobs)
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">Featured Jobs</h2>
                <p className="text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0, dataLength).map(job => <JobCard key={job.id} job={job}></JobCard>)
                }
            </div>
            <div className="flex items-center justify-center">
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="btn text-white bg-secondary font-bold border-none hover:bg-primary duration-500 my-4">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;