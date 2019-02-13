import JobService from "./jobService.js";

//Private
let _js = new JobService();

function draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(job => {
    template += job.getTemplate()
  });
  document.getElementById('available-jobs').innerHTML = template
}

function logJobs() {
  console.log("jobs updated too")
}


//public
export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
    _js.addSubscriber('jobs', logJobs)
    draw();
  }
  addJob(event) {
    event.preventDefault();
    let form = event.target;
    let newJob = {
      title: form.title.value,
      salary: form.salary.value,
      description: form.description.value,
      img: form.img.value
    }
    _js.addJob(newJob);
    form.reset();
  }
  deleteJob(id) {
    _js.deleteJob(id)
  }
}