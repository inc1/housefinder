// JavaScript Document

// Creates an array of the LGAs in Abia State
var abia = ["Aba North", "Aba South", "Arochukwu",
             "Bende", "Ikwuan", "Isiala Ngwa North",
			 "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa",
			 "Ohafia", "Osisioma Ngwa", "Ugwunagbo",
			 "Ukwa East", "Ukwa West", "Umuahia North",
			 "Umuahia South","Umu Nneochi"
			 ];


// Create an array of the LGAs in Adamawa State
var adamawa = [ "Demsa", "Fufore", "Ganye", 
                "Girei", "Gombi", "Guyuk",
                "Hong", "Jada", "Lamurde",
				"Madagali", "Maiha", 
				"Mayo-Belwa", "Michika",
				"Mubi North", "Mubi South",
				"Numan", "Shelleng", "Song",
				"Toungo","Yola North",
				"Yola South"
				];

// Creates an array of the LGAs in Akwa Ibom State
var akwaibom = [ "Abak", "Eastern Obolo", "Eket",
				 "Esit-Eket", "Essien Udim", "Etim-Ekpo",
				 "Etinan", "Ibeno", "Ibesikpo-Asutan", 
				 "Ibiono-Ibom", "Ika", "Ikono", 
				 "Ikot Abasi", "Ikot Ekpene", "Ini",
				 "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai",
				 "Nsit-Ibom", "Nsit-Ubium", "Obot-Akara", 
				 "Okobo", "Onna ", "Oron", "Oruk Anam",
				 "Ukanafun", "Udung-Uko", "Uruan", 
				 "Urue-Offong", "Uyo"
				 ];
				 

function addLGA(lga){
	
	var sel = document.createElement('select');
	var tr = document.getElementById("lga");
	
	for(var i = 0; i < lga.length; i++){
		
		var text = document.createTextNode(lga[i]);
		var option = document.createElement("option");
		option.appendChild(text);
		sel.appendChild(option);
	}
}

