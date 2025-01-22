import React from "react";
import { render, screen } from '@testing-library/react';
import ProjectItem from '../ProjectItem';

const project = {
  id: 1,
  name: 'Reciplease',
  about: 'A recipe tracking app',
  technologies: ['Rails', 'Bootstrap CSS'],
};

test('each <span> element has a unique key prop', () => {
  render(<ProjectItem project={project} />);
  const spans = screen.getAllByText(/Rails|Bootstrap CSS/);
  expect(spans).toBeDefined();
});

test('renders a <span> for each technology passed in as a prop', () => {
  render(<ProjectItem project={project} />);
  const spans = screen.getAllByText(/Rails|Bootstrap CSS/);
  expect(spans).toHaveLength(project.technologies.length);
});
