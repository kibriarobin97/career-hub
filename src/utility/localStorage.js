const getJobApplication = () => {
    const storedGetApplication = localStorage.getItem('job-applications');
    if (storedGetApplication) {
        return JSON.parse(storedGetApplication);
    }
    return [];
}

const saveJobApplications = (id) => {
    const storedSavedApplication = getJobApplication();
    const exists = storedSavedApplication.find(jobId => jobId === id);
    if(!exists){
        storedSavedApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedSavedApplication));
    }
}

export {getJobApplication, saveJobApplications}