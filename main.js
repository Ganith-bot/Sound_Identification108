function start(){
navigator.mediaDevices.getUserMedia({audio : true});
classification = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YvVy9wXCX/model.json", modelReady);
}

function modelReady(){
    console.log("the ml version used in this project - ", ml5.version);
    classification.classify(gotResult);
}

function gotResult(error, results){
    if (error){
    console.error(error);
}
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("hear1").style.color = "rgb("+random_number_r +"," + random_number_g+","+ random_number_b + ")";
        document.getElementById("accuracy1").style.color = "rgb("+random_number_r+","+ random_number_g+","+ random_number_b + ")";
        document.getElementById("rgb101").style.color = "rgb("+random_number_r +"," + random_number_g+","+ random_number_b + ")";
        document.getElementById("rgb102").style.color = "rgb("+random_number_r+","+ random_number_g+","+ random_number_b + ")";
        document.getElementById("footer1").style.color = "rgb("+random_number_r+","+ random_number_r+","+ random_number_r + ")";
        document.getElementById("footer").style.backgroundColor = "rgb("+random_number_r+","+ random_number_g+","+ random_number_b + ")";

        document.getElementById("hear1").innerHTML =  results[0].label;
        document.getElementById("accuracy1").innerHTML = results[0].confidence.toFixed(2);

        image1 = document.getElementById("img_1");
        image2 = document.getElementById("img_2");
        image3 = document.getElementById("img_3");
        image4 = document.getElementById("img_4");

        if (results[0].label == "snap"){
        image1.src = "aliens-01.gif";
        image2.src = "aliens-02.png";
        image3.src = "aliens-03.png";
        image4.src = "aliens-04.png";
        }

        else if(results[0].label == "thud"){
            image1.src = "aliens-01.png";
            image2.src = "aliens-02.gif";
            image3.src = "aliens-03.png";
            image4.src = "aliens-04.png";
        }

        else if(results[0].label == "clap"){
            image1.src = "aliens-01.png";
            image2.src = "aliens-02.png";
            image3.src = "aliens-03.gif";
            image4.src = "aliens-04.png"; 
        }   
        else{
            image1.src = "aliens-01.png";
            image2.src = "aliens-02.png";
            image3.src = "aliens-03.png";
            image4.src = "aliens-04.gif";
        }
    }
}