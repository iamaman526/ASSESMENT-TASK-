const wrapper = document.querySelector(".wrapper");
const buzz = document.querySelector('.buzz');


async function fetchData(location) {
    const response = await fetch(`https://isro.vercel.app/api/${location}`);
    const data = await response.json();
    return data;
}

async function spacecraftData() {

    const data = await fetchData("spacecrafts");
    
    if(data!==null) {
        wrapper.innerHTML = data.spacecrafts.map(item => {
            return `
                <div class="spaceCraft">
                    ${item.name}
                </div>
            `
        }).join("");
    }
}

async function rocketsdata() {
    const data = await fetchData("launchers");

    if(data!==null) {
        buzz.innerHTML = data.launchers.map(item => {
            return `
                <div class="spaceCraft">
                    ${item.id}
                </div>
            `
        }).join("");
    }
}
rocketsdata();
spacecraftData();