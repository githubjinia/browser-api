const maComing = () => {
    alert('Ammu is coming..Open the door')
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic??')
    console.log(response);
    if (response === true) {
        alert('Amr fee ta diye deo')
    }
    else {
        console.log('Ami jabo na')
    }
}

const askName = () => {
    const name = prompt('What is your name')
    if (name) {
        console.log(name)
    }
}