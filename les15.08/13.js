async function dogs() {
    let url = 'https://dog.ceo/api/breeds/image/random'
     await fetch(url,{
        method:"GET"
     }).then(res => res.json())
     .then(res=> console.log(res))
}
dogs()

const objFoto = {
    key: '45512330-484db49ac0f71da03909effd4',
    container:document.getElementsByClassName('container')[0],
    pages:document.getElementsByClassName('pages')[0],
    input: document.getElementsByClassName('input'),
    btn:document.getElementsByClassName('btn'),
    getAll(value, p=0){
        let url = `https://pixabay.com/api/?key=${this.key}&q=${value}yellow+flowers&
        image_type=photo&lang=uk&page${p}&per_page=40`
        fetch(url,{method:"GET"}).then(res=>res.json())
        .then(res=>console.log(res))
    },
    create(data){
        this.container.innerHTML=''
        data.forEach(element => 
            this.container.insertAdjacentHTML('beforeend',`
                <img src="" alt="">
                
                `)
        );
    },
    render(){
        this.btn.addEventListener('click',()=>this.getAll(this.input.value))
    }
}
objFoto.render()