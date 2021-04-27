initStartPage();

function initStartPage() {
    document.getElementById("body")!.innerHTML = `
    <div class="startPage">
      <div class="constrainedStartPage">
        <h1 id="startTitle">Explore New Town High</h1>
        <div class="startPagePadding"></div>
        <div class="paddedButton">
          <button onclick="startExploring()" type="startButton" class="button">Start Exploring</button>
        </div>
      </div>
    </div>
    `;
}

function startExploring() {
    document.getElementById("body")!.innerHTML = `

    `;
}
