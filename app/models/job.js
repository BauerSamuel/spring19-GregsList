let jobId = 1;

export default class Job {
  constructor(data) {
    this.jobId = jobId;
    this.title = data.title;
    this.salary = data.salary;
    this.img = data.img;
    this.description = data.description || 'No description provided';
    jobId++;
  }
  getTemplate() {
    return `
        <div class="card col-3">
          <img class="card-img-top" src="${this.img}" alt="Card image cap">
          <div class="card-body">
            <h6 class="card-title">${this.title}</h6>
            <p class="card-text">Competitive salary of $${this.salary} per year.  ${this.description}</p>
            <button onclick="app.controllers.jobController.deleteJob(${this.jobId})">Remove</button>
          </div>
        </div>
    `
  }
}