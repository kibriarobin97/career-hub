import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    return (
        <div>
            <h1>job details</h1>
        </div>
    );
};

export default JobDetails;