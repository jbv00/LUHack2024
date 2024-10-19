const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const getStartedButton = document.getElementById('get-started');
const animationBox = document.getElementById('animation-box');
const descriptionBox = document.getElementById('description-box');
const descriptionBox2 = document.getElementById('description-box2');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tab.classList.add('active')
        target.classList.add('active')
    })
})
getStartedButton.addEventListener('click', () => {
    descriptionBox2.innerHTML = "for example: lets start with the first 15 digits of pi. George A. Miller famously argued that the average human's short term memory can only hold around 7 objects or numbers and we are starting with over 2 TIMES that amount!";
    setTimeout(() => {
        descriptionBox2.classList.add('show');
    }, 10);
    
    descriptionBox.innerHTML = "To begin to memorize a list of numbers like pi, it is essential to have a key to translate numbers into letters. For now we will go by the one i provide below!";
    setTimeout(() => {
        descriptionBox.classList.add('show');
    }, 10);

    setTimeout(() => {
        animationBox.innerHTML = '';

        const table = document.createElement('table');
        table.classList.add('generated-table');

        const headerRow = table.insertRow();
        const headers = ['Number', 'Letter'];
        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });
        const data = [
            [1, 'i'],
            [2, 't'],
            [3, 'e'],
            [4, 'r'],
            [5, 'f'],
            [6, 's'],
            [7, 'n'],
            [8, 'o'],
            [9, 'p'],
        ];
        data.forEach(rowData => {
            const row = table.insertRow();
            rowData.forEach(cellData => {
                const cell = row.insertCell();
                cell.textContent = cellData;
            });
        });
        animationBox.appendChild(table);
        animationBox.classList.add('show');
        replaceButtonWithReplay();
    }, 1500);
});
function replaceButtonWithReplay() {
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Replay';
    replayButton.classList.add('replay-btn');
    replayButton.addEventListener('click', replayAnimations);
    getStartedButton.replaceWith(replayButton);
}

function replayAnimations() {
    descriptionBox2.classList.remove('show');
    descriptionBox.classList.remove('show');
    animationBox.classList.remove('show');
    descriptionBox.innerHTML = '';
    animationBox.innerHTML = '';
    getStartedButton.innerHTML = 'Get Started';
    getStartedButton.click();
}