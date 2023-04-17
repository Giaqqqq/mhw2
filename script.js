const X_IMAGE_URL = 'images/checked.png';
const Y_IMAGE_URL = 'images/unchecked.png'; 
let precedente=[];
const freeBoxes = [];
const takeBoxes=[];
let selected=0;


const boxes = document.querySelectorAll('.choice-grid div');
for (const box of boxes)
{
  box.addEventListener('click', changeToX);
  freeBoxes.push(box);
}





function changeToX(event)
{
  const container = event.currentTarget;
  container.classList.add("selected");

  
   switch(container.dataset.questionId) {
  	case 'one':
          if(precedente[0]){
			precedente[0].childNodes[3].src=Y_IMAGE_URL;
			precedente[0].classList.remove("selected");
			selected=selected-1;
	   }
	   for(let i=0;i<9;i++){ 
			if(freeBoxes[i]!==container){
				freeBoxes[i].classList.add("nselected");
			}
	   }
	precedente[0]=container;
      	container.childNodes[3].src=X_IMAGE_URL;
	selected=selected+1;
	takeBoxes[0]=container;	
    	break;


  	case 'two':
		if(precedente[1]){
			precedente[1].childNodes[3].src=Y_IMAGE_URL;
			precedente[1].classList.remove("selected");
			selected=selected-1;
		}
		for(let i=9;i<18;i++){ 
			if(freeBoxes[i]!==container){
				freeBoxes[i].classList.add("nselected");
			}
		}
	precedente[1]=container;
      	container.childNodes[3].src=X_IMAGE_URL;
	selected=selected+1;
	takeBoxes[1]=container;
    	break;


 	case 'three':
      		if(precedente[2]){
			precedente[2].childNodes[3].src=Y_IMAGE_URL;
			precedente[2].classList.remove("selected");
			selected=selected-1;
		}
		for(let i=18;i<27;i++){ 
			if(freeBoxes[i]!==container){
				freeBoxes[i].classList.add("nselected");
			}
		}
		
	precedente[2]=container;
      	container.childNodes[3].src=X_IMAGE_URL;
	selected=selected+1;
	takeBoxes[2]=container;
    	break;

       default:
	
   }
	if(selected==3){getresult();}
}



function getresult(){

	for (const box of boxes){
  		box.removeEventListener('click', changeToX);
	}


	var section=document.createElement('section');
	section.id='result';
	section.className='question-name';
	var div = document.createElement('div');
	var h1 = document.createElement('h1');
	var refresh = document.createElement('div');
	refresh.id='button';
	refresh.textContent="Ripeti il quiz";

	if(takeBoxes[1].dataset.choiceId===takeBoxes[2].dataset.choiceId){
    		div.textContent = RESULTS_MAP[takeBoxes[1].dataset.choiceId].contents;
    		h1.textContent=RESULTS_MAP[takeBoxes[1].dataset.choiceId].title;
	}
	else{
    		div.textContent = RESULTS_MAP[takeBoxes[0].dataset.choiceId].contents;
    		h1.textContent=RESULTS_MAP[takeBoxes[0].dataset.choiceId].title;
	}
	document.querySelector('article').appendChild(section);
	section.appendChild(h1);
	section.appendChild(div);
	section.appendChild(refresh);
	document.querySelector('#button').addEventListener('click',reset);


}



function reset(event){
  	document.querySelector('article').removeChild(document.querySelector('#result'));
  	selected=0;
  	let i=0;
  	precedente=[];
  	for (box of boxes){
		box.addEventListener('click', changeToX);
  		freeBoxes[i].classList.remove("nselected","selected");
  		freeBoxes[i].childNodes[3].src=Y_IMAGE_URL;
  		i=i+1;
	}
}
















  