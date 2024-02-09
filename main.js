Webcam.set({
  width: 350,
  height: 300,
  image_format:"png",
  png_quality: 90
})
  camera= document.getElementById("camera")
Webcam.attach("#camera")
console.log(ml5.version)
function takeSnapshot(){
  Webcam.snap (function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
  })
}
function modelLoaded(){
  console.log("modelo carregado")
}
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/C2876hkn6/model.json",modelLoaded);
function check(){
  img=document.getElementById("captured_image")
  classifier.classify(img,gotresult)
}
function gotresult(error,results){
if (error){
  console.log(error)
}
else {
  console.log(results)
  document.getElementById("resultObjectName").innerHTML=results[0].label
  document.getElementById("resultObjectAccuracy").innerHTML=(results[0].confidence.toFixed(1)*100)+"%"
}
}