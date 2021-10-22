import React, {  useContext } from "react";
import JobListItem from "../components/JobListItem";
import { UserContext } from "../contexts/UserContextProvider";
import SearchInput from "../components/SearchInput";
import "../App.css";

export default function JobListPage() {
  const { jobList, setJobList, getJobList } = useContext(UserContext);

  let jobListContainer;
  if (Object.keys(jobList).length > 0) {
    jobListContainer =
      jobList &&
      jobList.map((job) => {
        return (
          <div key={job.id}>
            <JobListItem job={job} id={job.id} />
          </div>
        );
      });
  } else if (
    jobList === undefined ||
    jobList === null ||
    Object.keys(jobList).length === 0
  ) {
    jobListContainer = <div className="noJobMessage">No jobs found</div>;
  }

  return (
    <div className="jobFinder">
      <h1>Job finder</h1>
      <label>Search for a job?</label>
      <SearchInput />
      <button className="myButton" onClick={getJobList}>
        Find jobs
      </button>

      <div>{jobListContainer}</div>
    </div>
  );
}
