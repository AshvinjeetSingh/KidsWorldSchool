// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();


storage.ref('gallery/')
	.listAll()
	.then((result) => {
        const gallery = document.getElementById("gallery"); 
		result['items'].forEach((element) => {
			console.log(element);
			storageRef
				.child(element.fullPath)
				.getDownloadURL()
				.then((url) => {
                    // console.log(url)
					const div = document.createElement('div');
					div.className = 'gallery-item col-md-4 col-sm-6 col-xs-12';
					div.innerHTML =            
                    '<div class="inner-box">'+
                        '<div class="image-box"><img src='+url+' alt="">'+
                            '<div class="overlay-box">'
                                +'<div class="content">'
                                    '<a class="lightbox-image" href='+url+' title="Image Title Here" data-fancybox-group="example-gallery"><span class="icon flaticon-plus"></span></a>'
                                +'</div>'+'</div>'
                                +'</div>'+'</div>';
                            gallery.append(div);
                    
                   
            
				});
		});
    });
    

// FOR TEACHERS

let countCalls=0;
let imageCount=0;
storage.ref('teachers/')
	.listAll()
	.then((result) => {
        const teachers = document.getElementById("teachers"); 
        imageCount=result.items.length;
		result['items'].forEach((element) => {
            console.log(element);

            var name = element.name.substring(0, element.name.lastIndexOf('.'))
            var nameprof=name.split("_")
			storageRef
				.child(element.fullPath)
				.getDownloadURL()
				.then((url) => {
                    console.log(url)
					const div = document.createElement('div');
					div.className = 'teacher-block';
					div.innerHTML =            
                   
                    '<div class="inner-box owl-item">'+
                    	'<div class="image-box">'+
                        	'<img src='+url+' alt="" />'+
                        '</div>'+
                        '<h3>'+nameprof[0]+'</h3>'+'<h4>'+nameprof[1]+'</h4>'
                        +
                    '</div>'
                    teachers.append(div);
            
				});
		});
    });
    
    loadSlider = () => {
        countCalls++;
        console.log(imageCount)
        if (countCalls === imageCount) $.getScript('js/owl.js');
        // console.log('Slide');
        // loadSlider = () => {};
    };


    // firestore
    // db = firebase.firestore();
    // db.collection('Get involved')
	// .doc('Link')
	// .get()
	// .then((doc) => {
	// 	let link = document.getElementsByClassName('link');
	// 	for (let i = 0; i < link.length; i++) {
	// 		let title = link[i].innerHTML.slice(30);
	// 		if (title === 'Donate') link[i].classList.add('Donate');
	// 		if (title === 'Join Us') link[i].classList.add('JoinUs');
	// 	}
	// 	let info = doc.data();
	// 	let donate = document.getElementsByClassName('Donate');
	// 	for (let i = 0; i < donate.length; i++) {
	// 		donate[i].href = info['Donate'];
	// 	}
	// 	let joinus = document.getElementsByClassName('JoinUs');
	// 	for (let i = 0; i < joinus.length; i++) {
	// 		joinus[i].href = info['Join Us'];
	// 	}
	// });




	// for main gallery
	storage.ref('main_gallery/')
	.listAll()
	.then((result) => {
        const gallery = document.getElementById("main_gallery"); 
		result['items'].forEach((element) => {
			console.log(element);
			storageRef
				.child(element.fullPath)
				.getDownloadURL()
				.then((url) => {
                    // console.log(url)
					const div = document.createElement('div');
					div.className = 'gallery-item col-md-4 col-sm-6 col-xs-12';
					div.innerHTML =            
                    '<div class="inner-box">'+
                        '<div class="image-box"  onclick="f1(this)" id='+url+'><img  src='+url+' alt="">'+
                            '<div class="overlay-box">'
                                +'<div class="content">'
                                    '<a class="lightbox-image" href='+url+' title="Image Title Here" data-fancybox-group="example-gallery"><span class="icon flaticon-plus"></span></a>'
                                +'</div>'+'</div>'
                                +'</div>'+'</div>';
                            gallery.append(div);
                    
                   
            
				});
		});
    });