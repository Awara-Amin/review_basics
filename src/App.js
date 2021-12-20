import "./styles.css";

export default function App() {
  // var today = new Date();
  var today = new Date(2021, 1, 1, 19); // you can give a date and time
  var time = today.getHours();
  console.log(time);

  const redColor = {
    color: "red"
  };

  let greeting;

  if (time < 12) {
    greeting = "Good Morning";
    redColor.color = "green";
  } else if (time < 18) {
    greeting = "good afternoon kaka";
    redColor.color = "blue";
  } else if (time > 18) {
    greeting = "good evening";
    redColor.color = "red";
  }
  console.log("Kaka greeting is " + greeting);

  return (
    <div>
      <h1 style={redColor}>{greeting}</h1>
      <p> I did this time myself, it is to remember myself the basics</p>
      <p> Here i rememeberd that we can do what we want outside of return </p>
    </div>
  );
}
