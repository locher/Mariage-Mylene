// Ajouter class JS
$('body').addClass('js');

// Parallaxe du header
$(document).ready(function() {

    $(window).scroll(function(e){
        parallax();
    });
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',128-(scrolled*0.2)+'px');
  $('.top-banner h2').css('top',32-(scrolled*0.15)+'%');
}

//Menu sticky
var sticky = new Waypoint.Sticky({
  element: $('.top-banner nav')[0]
})


//Virer l'image 

function image_scroll(){
    if(window.pageYOffset > 1000){
        $('.bg').hide();
        console.log('caché');

    }
    else{
        $('.bg').show();
        console.log('affiché');
    }
}

$(document).scroll(function(){
    image_scroll();
});



// Animation

$(document).ready(function() {

    $('.raccourci-rep .wrapper').each(function() {
        $(this).waypoint(function() {
          $('.raccourci-rep .wrapper').addClass('fadeIn');    
        }, {
          offset: '80%'
        });
    });

    $('.evt1').each(function() {
        $(this).waypoint(function() {
          $('.evt1').addClass('fadeInLeft animated');    
        }, {
          offset: '80%'
        });
    });

    $('.evt3').each(function() {
        $(this).waypoint(function() {
          $('.evt3').addClass('fadeInLeft animated');    
        }, {
          offset: '80%'
        });
    });

    $('.evt2').each(function() {
        $(this).waypoint(function() {
          $('.evt2').addClass('fadeInRight animated');    
        }, {
          offset: '80%'
        });
    });

    $('.evt4').each(function() {
        $(this).waypoint(function() {
          $('.evt4').addClass('fadeInRight animated');    
        }, {
          offset: '80%'
        });
    });

    $('.etape1').each(function() {
        $(this).waypoint(function() {
          $('.etape1').addClass('fadeInLeft animated');    
        }, {
          offset: '80%'
        });
    });

    $('.etape2').each(function() {
        $(this).waypoint(function() {
          $('.etape2').addClass('fadeInRight animated');    
        }, {
          offset: '80%'
        });
    });


    $('.dormir').each(function() {
        $(this).waypoint(function() {
          $('.dormir').addClass('fadeIn animated');    
        }, {
          offset: '80%'
        });
    });
});


// Choper la hauteur de lovestory pour l'appliquer sur la ligne et le parent

$(document).ready(function() {
    position_haut = $('.evt1').offset();
    hauteur_haut = position_haut.top;

    position_bas = $('.evt4').offset();
    hauteur_last = $('.evt4').height();
    hauteur_bas = position_bas.top + hauteur_last;

    $('.ligne').css('height', hauteur_bas - hauteur_haut);
    $('.wrapper-lovestory').css('height', hauteur_bas - hauteur_haut);

});


// Compteur

countdownManager = {
    // Configuration
    targetTime: new Date('September 19 15:00:00 2015'), // Date cible du compte à rebours (00:00:00)
    displayElement: { // Elements HTML où sont affichés les informations
        day:  null,
        hour: null,
        min:  null,
        sec:  null
    },
     
    // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
    init: function(){
        // Récupération des références vers les éléments pour l'affichage
        // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
        this.displayElement.day  = jQuery('#countdown_day');
        this.displayElement.hour = jQuery('#countdown_hour');
        this.displayElement.min  = jQuery('#countdown_min');
        this.displayElement.sec  = jQuery('#countdown_sec');
         
        // Lancement du compte à rebours
        this.tick(); // Premier tick tout de suite
        window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
    },
     
    // Met à jour le compte à rebours (tic d'horloge)
    tick: function(){
        // Instant présent
        var timeNow  = new Date();
         
        // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
        if( timeNow > this.targetTime ){
            timeNow = this.targetTime;
        }
         
        // Calcul du temps restant
        var diff = this.dateDiff(timeNow, this.targetTime);
         
        this.displayElement.day.text(  diff.day  );
        this.displayElement.hour.text( diff.hour );
        this.displayElement.min.text(  diff.min  );
        this.displayElement.sec.text(  diff.sec  );
    },
     
    // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
    dateDiff: function(date1, date2){
        var diff = {}                           // Initialisation du retour
        var tmp = date2 - date1;
 
        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes
        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes
        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures
        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;
 
        return diff;
    }
};
 
jQuery(function($){
    // Lancement du compte à rebours au chargement de la page
    countdownManager.init();
});

// Resize des textarea
autosize($('.reponse textarea'));

// Apparition formulaire

// Je vérifie si c'est checké, si oui des trucs apparaissent, si non ils disparaissent

function verif_participation(){

    if($('#acceptation_participation').prop('checked')){
        $('.checkbox_accompagnant').slideDown();
        $('.resa').slideDown();

    }

    else{
        $('.checkbox_accompagnant').slideUp();
        $('.nom-accompagnants').slideUp();
        $('.resa').slideUp();
    }
}

function verif_accompagnants(){

    if($('#accompagne').prop('checked') && $('#acceptation_participation').prop('checked')){
        $('.nom-accompagnants').slideDown();
    }

    else{
        $('.nom-accompagnants').slideUp();
    }
}

 // Je lance la vérif une fois au chargement (si refresh)
    verif_participation();
    verif_accompagnants();

// Et au changement dans le formulaire
$('.reponse').change(function(){
    verif_participation();
    verif_accompagnants();
});
    
//Scroll menu

$('nav a').click(function(){
    var cible = $(this).attr('href');
    $(window).scrollTo(cible, 1100);
});

$('.raccourci-rep a').click(function(){
    var cible = $(this).attr('href');
    $(window).scrollTo(cible, 1100);
});