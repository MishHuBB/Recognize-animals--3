var cow = 0;
var cat = 0;
var dog = 0;
var lion = 0;
var background_noise = 0;


function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4iSjhou1M/', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
    
}
function gotResult(error, results){
    if (error) {
      console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    console.log("Red"+random_number_r);
    console.log("Green"+random_number_g);
    console.log("Blue"+random_number_b);

    document.getElementById("detected").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
   
    document.getElementById("voice").innerHTML = "I can hear - "+results[0].label;
    document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fdog-clipart&psig=AOvVaw1D4mitRjNzfmEHm6LCd_3Q&ust=1678136642135000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNCZzqXYxf0CFQAAAAAdAAAAABAD";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://www.nicepng.com/png/detail/206-2066497_cat-cat-icon-transparent-background.png";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roaring"){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6cE8KzCmmAJGzp9yFlf7UXEzUXdusnbDBkwcxitS9jNzEUqq4mYWQ1ydkPdUCMzyw848_DG9MZw&usqp=CAU&ec=48600112";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://media.istockphoto.com/id/1147476725/vector/vector-cow-icon-template.jpg?s=612x612&w=0&k=20&c=Xn8tFw7IWQowrjqaE5HXrJTrUUf_Z8gBC-LUNMrRSKE=";
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}