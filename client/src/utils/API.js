import axios from "axios";

export default{
    // Get all jobs //
    getJobs: function(){
        return axios.get("/api/jobs");
    },

    // Gets the jobs with the given id //
    getJob: function(id){
        return axios.get("/api/jobs" + id);
    },

    // Deletes the jobs with the given id //
    deleteJob: function(id){
        return axios.delete("/api/jobs" + id);
    },

    // Saves a job to the database //
    saveJob: function(jobData){
        return axios.post("/api/jobs", jobData);
    }
};