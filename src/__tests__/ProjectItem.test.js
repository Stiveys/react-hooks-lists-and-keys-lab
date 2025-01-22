import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectItem from "../components/ProjectItem";

const project = {
    id: 1,
    name: "Project 1",
    about: "About Project 1",
    technologies: ["React", "JavaScript", "CSS"],
};

describe("ProjectItem component", () => {
    test("renders a <span> for each technology passed in as a prop", () => {
        render(<ProjectItem project={project} />);
        const spanElements = screen.getAllByRole("listitem");
        expect(spanElements.length).toBe(project.technologies.length);
    });

    test("each <span> element has a unique key prop", () => {
        let errorSpy = jest.spyOn(global.console, "error");
        render(<ProjectItem project={project} />);
        const spanElements = screen.getAllByRole("listitem");

       // Check if keys are present by checking the first span tag
       // Note: This test assumes that there are no duplicate spans.
       spanElements.forEach((span,index) =>{
           expect(span.getAttribute("key")).toBe(null)
       })

        expect(errorSpy).not.toHaveBeenCalled();
    });
});