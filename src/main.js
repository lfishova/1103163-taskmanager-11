import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createSortingTemplate} from "./components/sorting";
import {createFilterTemplate} from "./components/filter.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";
import {createBoardTemplate} from "./components/board.js";
import {generateFilter} from "./mock/filter";


const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderTasks = (countTasks) => {
  for (let i = 0; i < countTasks; i++) {
    render(taskListElement, createTaskTemplate(), `beforeend`);
  }
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilter();

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);
renderTasks(TASK_COUNT);
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
