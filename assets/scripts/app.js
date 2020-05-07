class Tooptip {}

class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    super(props);
    this.id = id;
    this.updateProjectListsFunction = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }
  connectMoreInfoButton() {

  }
  // button should switch between 'active' - 'finished' lists
  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector('button:last-of-type')
    switchBtn.addEventListener('click', this.updateProjectListsFunction)
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    // create array of project items by <li> id attr
    for(const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)))
    }
  }
  setSwitchHandler(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  // add project when switching from another list
  addProject() {
    console.log(this);
  }
  // remove project to another list 'active' - 'finished'
  // using callback function
  switchProject(projectId) {
    this.switchHandler(this.projects.find(p => p.id === projectId);
    // remove from this list
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active', );
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    )
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    )
  }
}

App.init();