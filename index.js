
  import { monsters } from './monsters.js';
console.log(monsters);

for(let monster of monsters){

    showMonsters(monster);
}

showMonsters();

function showMonsters(monster){
    const monsterDiv = document.createElement('div');
    monsterDiv.className ='monster';

    const img = document.createElement('img');
    img.src=`https://robohash.org/60?set=set2`;
    img.alt='monster.name';



    const name =document.createElement('p');
    name.className ='name';
    name.innerText='Rakib';
    
    const email =document.createElement('p');
    email.className='email';
    email.innerText ='monster.email';

    monsterDiv.append(img,name,email);

    document.querySelector('.monsters').append(monsterDiv);


}

notfound();

function notfound(){
  const notFoundDiv = document.createElement('div');
  notFoundDiv.className='p-5 not-found';
  notFoundDiv.style.display='none';

  const span=document.createElement('span');
  span.innerText='404';

  const h1=document.createElement('h1');
  h1.innerText='🧟‍♂️ No Monster Found 🧟‍♂️';

  notFoundDiv.append(span,h1);

  document.querySelector('.monsters').append(notFoundDiv);

}
