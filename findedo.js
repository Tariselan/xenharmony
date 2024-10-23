function findClosestSteps(edo) {
    // Step size in the given EDO
    const stepSize = 1200 / edo;
	 const notes = [0, 147.54, 349.82, 430.36, 592.35, 880.11];

    // Result array to store the closest step and the cent difference
    const result = notes.map(note => {
        // Find the closest step in EDO
        const closestStep = Math.round(note / stepSize);
        
        // Calculate the exact cent value of that step
        const exactCentValue = closestStep * stepSize;

        // Calculate the cent difference
        const centDifference = note - exactCentValue;

        return [closestStep, centDifference];
    });
    for (let i = 0; 
    console.log(result);
}
