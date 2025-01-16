fetch("/api/resource", { //To write/create Data
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "John" }),
})
  .then((res) => res.json())
  .then(console.log);


fetch('/api/resource') //To get/fetch Data
  .then(res => res.json())
  .then(console.log); // Fetch all

fetch('/api/resource/1')
  .then(res => res.json())
  .then(console.log); // Fetch by ID



fetch("/api/resource/1", { //To update Data
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Jane" }),
})
  .then((res) => res.json())
  .then(console.log);



fetch("/api/resource/1", { method: "DELETE" }).then((res) => //To delete Data
  console.log(res.ok ? "Deleted" : "Failed")
);
