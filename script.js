
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    generateResume();
});

document.getElementById('addSection').addEventListener('click', function() {
    addSection();
});

function addSection() {
    const sections = document.getElementById('sections');
    const sectionId = `section${sections.children.length + 1}`;
    const sectionDiv = document.createElement('div');
    sectionDiv.id = sectionId;
    sectionDiv.innerHTML = `
        <h2>Section</h2>
        <input type="text" placeholder="Section Title" class="sectionTitle">
        <textarea placeholder="Content (comma separated)"></textarea>
        <button type="button" onclick="removeSection('${sectionId}')">Remove Section</button>
    `;
    sections.appendChild(sectionDiv);
}

function removeSection(sectionId) {
    const sectionDiv = document.getElementById(sectionId);
    sectionDiv.remove();
}

function generateResume() {
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const phone = document.getElementById('phone').value;

    const btech = document.getElementById('btech').value;
    const btechSchool = document.getElementById('btechSchool').value;
    const btechYear = document.getElementById('btechYear').value;
    const twelve = document.getElementById('twelve').value;
    const twelveSchool = document.getElementById('twelveSchool').value;
    const twelveYear = document.getElementById('twelveYear').value;
    const ten = document.getElementById('ten').value;
    const tenSchool = document.getElementById('tenSchool').value;
    const tenYear = document.getElementById('tenYear').value;

    const sections = document.getElementById('sections').children;
    let sectionContent = '';

    for (let i = 0; i < sections.length; i++) {
        const sectionTitle = sections[i].querySelector('.sectionTitle').value;
        const sectionItems = sections[i].querySelector('textarea').value.split(',');
        sectionContent += `
            <div class="tcolorbox">${sectionTitle}</div>
            <ul>
                ${sectionItems.map(item => `<li>${item.trim()}</li>`).join('')}
            </ul>
        `;
    }

    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
        <div>
            <h1>${name}</h1>
            <p>${location} <span style="float: right;">Email: ${email}</span></p>
            <p><a href="${linkedin}">${linkedin}</a> <span style="float: right;">Phone: ${phone}</span></p>
            <hr>
            <div class="tcolorbox">Education</div>
            <table class="table">
                <tr>
                    <th>Year</th>
                    <th>Degree/Certificate</th>
                    <th>Institute</th>
                    <th>CPI/%</th>
                </tr>
                <tr>
                    <td>${btechYear}</td>
                    <td>Bachelor of Technology - Mechanical Engineering</td>
                    <td>${btechSchool}</td>
                    <td>${btech}</td>
                </tr>
                <tr>
                    <td>${twelveYear}</td>
                    <td>RBSE (XII)</td>
                    <td>${twelveSchool}</td>
                    <td>${twelve}</td>
                </tr>
                <tr>
                    <td>${tenYear}</td>
                    <td>RBSE (X)</td>
                    <td>${tenSchool}</td>
                    <td>${ten}</td>
                </tr>
            </table>
            ${sectionContent}
        </div>
    `;
}

document.getElementById('downloadPDF').addEventListener('click', function() {
    const resumePreview = document.getElementById('resumePreview');
    html2pdf().from(resumePreview).save('resume.pdf');
});
