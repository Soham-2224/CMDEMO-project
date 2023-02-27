import React, { useState } from "react";
import { projects1, projects2, projects3 } from "./../utils/constants";

import { Card } from "./";

const ProjectSection = () => {
    const [projectType, setProjectType] = useState("AICHYK");

    return (
        <div className="w-full relative pt-20 px-[120px]">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-7">
                    <h2
                        onClick={() => setProjectType("AICHYK")}
                        className={` ${
                            projectType === "AICHYK" && "text-accent"
                        } text-base font-medium cursor-pointer hover:text-accent`}
                    >
                        AICHYK
                    </h2>
                    <h2
                        onClick={() => setProjectType("CCMTProjects")}
                        className={` ${
                            projectType === "CCMTProjects" && "text-accent"
                        } text-base font-medium cursor-pointer hover:text-accent`}
                    >
                        CCMT Projects
                    </h2>
                    <h2
                        onClick={() => setProjectType("SandeepanyHimalayas")}
                        className={` ${
                            projectType === "SandeepanyHimalayas" && "text-accent"
                        } text-base font-medium cursor-pointer hover:text-accent`}
                    >
                        Sandeepany Himalayas
                    </h2>
                </div>
                <div className="relative px-3 cursor-pointer rounded-md border w-[161px]">
                    <select
                        name="time"
                        id="time"
                        className="py-[14px] w-full cursor-pointer outline-none focus:ring-0"
                    >
                        <option value="recent">Recent</option>
                        <option value="recent">Oldest</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-9 my-8">
                {projectType === "AICHYK"
                    ? projects1.map((project) => <Card data={project} />)
                    : projectType === "CCMTProjects"
                    ? projects2.map((project) => <Card data={project} />)
                    : projectType === "SandeepanyHimalayas"
                    ? projects3.map((project) => <Card data={project} />)
                    : ""}
            </div>
        </div>
    );
};

export default ProjectSection;
