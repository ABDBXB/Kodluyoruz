

/*************************************************************
* 					Initializing Variables
*************************************************************/

const API_KEY = 'api_key=389be6178a32f6dac4176b5cde41dada';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
var pageno=0;
var total_pages=0;
var searchword="";
//------------------------------------------------
//Get Search bar with id
const pagenumber=document.getElementById('pagenumber');
const searchBar=document.getElementById('searchinput');
//Add keyup Because We Will Search When User Typing 
searchBar.addEventListener('keyup' , (e) =>{
		searchword = e.target.value;
	if (searchword) {
		//Get Movies With query To Find it
		getMovies(searchURL+'&query='+searchword);
	}else{   //If Search bar is empty Get all Movies
		getMovies(API_URL);
	}
	
});

//Fetch Data From Url (We Will Give The Function Url To Fethch)
function getMovies(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        if(data.results.length !== 0){
			pageno = data.page;
			total_pages=data.total_pages;
			pagenumber.innerText=pageno;
            showMovies(data.results);
       }
    })
}

//Show All What we get From Fetch With Loop
function showMovies(data) {
	const userList = document.getElementById('cardlist');
	userList.innerHTML = '';
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id,release_date} = movie;
        const movieEl = document.createElement('div');
		//Cut Date With Split To Show it To User In Our Website
		if (release_date != undefined) {
			var datearray = release_date.split("-");
		} else {
			datearray=['No Date Here'];
		}
		if (title.length>11) {
			var subtitle = title.substring(0,11)+"...";
		} else{
			subtitle=title;
		}
		//Add Elements In Card Div 
        movieEl.className="card";
        movieEl.innerHTML = `
		<div class="cardphoto">
	  <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="">
	  </div>
	  <div class="cardname">
	  <p>${subtitle}</p>
		  	  <div class="cardevaluation">
		  <p>${vote_average}</p>
		  </div>
	  </div>
	  <div class="carddate">
	  <p>${datearray[0]}</p>
	  </div>
        
        `
		//Append it in Cardlist Div
		userList.appendChild(movieEl);
		
    })
}
//------------------------------------------------


//==================
//===  Buttons   ===
//==================
//Next Button Function
function next(){
	if (!searchword) {					//If User is not Search for Movie
		if (pageno<total_pages) {
		let nextpage=pageno+1;
		getMovies(API_URL+'&page='+nextpage);
		}else{
		alert("This is Last Page");
		getMovies(API_URL+'&page='+total_pages);
		}
	}else{			//If User Search for Movie
		if (pageno<total_pages) {   
		let nextpage=pageno+1;
		getMovies(searchURL+'&query='+searchword+'&page='+nextpage);
		}else{
		alert("This is Last Page");
		}
	}
}
//Prev Button Function
function prev(){
	if (!searchword) {
		if (pageno>1) {
		let prepage=pageno-1;
		getMovies(API_URL+'&page='+prepage);
		}else{
		alert("This is First Page");
		}
	}else{
		if (pageno>1) {
		let prepage=pageno-1;
		getMovies(searchURL+'&query='+searchword+'&page='+prepage);
		}else{
		alert("This is First Page");
		}
	}
}
//last Button Function
function last(){
	if (!searchword) {
	getMovies(API_URL+'&page='+total_pages);
	}else{
	getMovies(searchURL+'&query='+searchword+'&page='+total_pages);
	
	}
}
//first Button Function
function first(){
	if (!searchword) {
	getMovies(API_URL+'&page=1');
	}else{
	getMovies(searchURL+'&query='+searchword+'&page=1');
	
	}
}
//------------------------------------------------

// Get Elements id Bind With Function On Cilick
const nebutton= document.getElementById('next');
	nebutton.addEventListener('click',next);

const prbutton= document.getElementById('prev');
	prbutton.addEventListener('click',prev);

const lastbutton= document.getElementById('last');
	lastbutton.addEventListener('click',last);

const firstbutton= document.getElementById('first');
	firstbutton.addEventListener('click',first);
//------------------------------------------------
	//getMovies(API_URL+'&sort_by=vote_average.asc&page=50');
	//getMovies(API_URL+'&page=9');
//Run GitMobvies Function
getMovies(API_URL);

	
	
	

/*

	fetch('https://api.themoviedb.org/3/discover/movie?api_key=389be6178a32f6dac4176b5cde41dada')
  .then(response => response.json())
  .then((json)=>{
  	const jsonarray=json;
  	const filmarray = jsonarray.results
  	filmarray.forEach(element => console.log(element));
  	const userList = document.getElementById('cardlist');
  	filmarray.forEach((film) => {
                const div = document.createElement('div');
				div.className="card";
		
				const cardphoto = document.createElement('div');
				cardphoto.className="cardphoto";
		
		
				const cardname = document.createElement('div');
				cardname.className="cardname";
				const filmname = document.createElement('p');
				filmname.innerText = `${film.original_title}`
				
				const cardevaluation = document.createElement('div');
				cardevaluation.className="cardevaluation";
				const filmevaluation = document.createElement('p');
				filmevaluation.innerText = `${film.vote_average}`
				
				
				const carddate = document.createElement('div');
				carddate.className="carddate";
				const filmdate = document.createElement('p');
				filmdate.innerText = `${film.release_date}`
		
                //div.innerText = `${user.id} - ${user.name}`
				const image = document.createElement('img');
				image.setAttribute("src","https://image.tmdb.org/t/p/w500"+film.poster_path);
		
		
				
                userList.appendChild(div);
				div.appendChild(cardphoto);
				div.appendChild(cardname);
				div.appendChild(carddate);
				cardphoto.appendChild(image);
				cardname.appendChild(filmname);
				cardname.appendChild(cardevaluation);
				cardevaluation.appendChild(filmevaluation);
				carddate.appendChild(filmdate);
				
            })
  	console.log(filmarray);
  });
	
	*/