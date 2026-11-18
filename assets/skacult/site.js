const filters = document.querySelectorAll('[data-filter]');
const projects = [...document.querySelectorAll('[data-category]')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let count = 0;
  projects.forEach(project => {
    const show = button.dataset.filter === 'all' || project.dataset.category === button.dataset.filter;
    project.hidden = !show;
    if (show) count++;
  });
  document.getElementById('filter-status').textContent = `Showing ${count} ${count === 1 ? 'project' : 'projects'}.`;
}));
const sermons = [
  'An idea doesn’t have to become a whole thing. A small useful thing will do.',
  'The best tool is the one that gives you your afternoon back.',
  'You may abandon a bad idea. You may also give it a very good domain name.',
  'Leave the instructions clearer than you found them.',
  'When in doubt, simplify. When still in doubt, add horns.',
  'Rest is part of making things. The project will keep.'
];
let sermon = 0;
document.getElementById('sermon-button').addEventListener('click', () => {
  sermon = (sermon + 1) % sermons.length;
  document.getElementById('sermon-text').textContent = `“${sermons[sermon]}”`;
});
document.getElementById('year').textContent = new Date().getFullYear();
