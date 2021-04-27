initiateStartPage();

function initiateStartPage() {
    document.getElementById("currentPage")!.innerHTML = `
    <div class="startPage">
        <h1>Explore New Town High</h1>
        <div class="paddedButton">
            <button onclick="startExploring()" type="startButton" class="button">Start Exploring</button>
        </div>
    </div>
    `;
}

function startExploring() {
    document.getElementById("currentPage")!.innerHTML = `
    <div class="explorePage">
        
    </div>
    `;
}
  
