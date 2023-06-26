export default App = () => {


const object = {
    name: "Immanuel",
    ig: "none",
    category: {
        title: "Appetizers"
    }
}

const data = async() => {
    const datatest = await object();

    console.log(datatest);
}

data();

}
const object = {
    name: "Immanuel",
    ig: "none",
    category: {
        title: "Appetizers"
    }
}

function replacer(key, value) {
    if(key === "ig") return undefined

    return value
}

const test = JSON.stringify(object, replacer, 2)

console.log(test)
