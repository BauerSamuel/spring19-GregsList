import Job from "../models/job.js";

//Private
//state
let _state = {
  jobs: [
    new Job({ title: 'Dinglebop smoother', salary: 40000, description: 'You will work in an exciting assembly-line structure where you will smooth out the dinglebop with a bunch of schleem', img: 'https://coubsecure-s.akamaihd.net/get/b80/p/coub/simple/cw_timeline_pic/50c9307828e/4811a439137b8f9195daf/med_1473209554_image.jpg' }),
    new Job({ title: 'QA Schlamee', salary: 55000, description: 'You will work in an exciting assembly-line structure where you will ensure the quality of the fleeb by spitting on it.', img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/40/40eaa818733158a48e577d0e1d2e76fcfb09eb03_full.jpg' }),
    new Job({ title: 'Grumbo shaver', salary: 40000, description: 'You will work in an exciting assembly-line structure where you will chisel and away the plubis/grumbo, forming a plumbus', img: 'https://i.ytimg.com/vi/eYy-EJi7t2I/maxresdefault.jpg' })
  ]
}




//subs
let _subscribers = {
  jobs: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}

//public
export default class JobService {
  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Jobs() {
    return _state.jobs;
  }
  addJob(rawJob) {
    let newJob = new Job(rawJob);
    _state.jobs.push(newJob)
    setState('jobs', _state.jobs);
  }
  deleteJob(id) {
    for (let i = 0; i < _state.jobs.length; i++) {
      let job = _state.jobs[i];
      if (job.jobId == id) {
        _state.jobs.splice(i, 1);
        break;
      }
    }
    setState('jobs', _state.jobs)
  }
}