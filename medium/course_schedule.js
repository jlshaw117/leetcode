function canFinish(numCourses, prerequisites) {
    let graph = {};
    for (let course = 0; course < numCourses; course++) {
        graph[course] = [];
    }
    for (let course of prerequisites) {
        graph[course[0]].push(`${course[1]}`);
    }

    let completed = new Set();
    let avalible = true;

    while (avalible) {
        avalible = false;

        for (let course in graph) {
            if (completed.has(course)) continue;
            if (graph[course].every(pre => completed.has(pre))) {
                completed.add(course);
                avalible = true;
            }
        }

    }

    return completed.size === numCourses;
}