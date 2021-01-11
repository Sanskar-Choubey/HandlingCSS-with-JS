const inputs = document.querySelectorAll(".control input");

function updateHandler(){
    const suffix = this.dataset.sizing || '';
    console.log(suffix);

    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change',updateHandler));
inputs.forEach(input => input.addEventListener('mousemove',updateHandler));