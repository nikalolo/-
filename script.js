document.querySelector(".solar-image").addEventListener("click", function (e) {
    window.location.href = "/gatestva/system.html";
});

// გამოყენებულია ფორმა(სარეგისტრაციო ან საკონტაქტო ან ავტორიზაციის) + javascript-იდან 
// ფორმის ვალიდაცია - აუცილებლად ყველა ველი უნდა იყოს შევსებული; show/ hide password;  regex
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  const type = passwordInput.getAttribute("type");
  passwordInput.setAttribute("type", type === "password" ? "text" : "password");
  this.textContent = type === "password" ? "Hide" : "Show";
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (username === "" || email === "" || password === "") {
    document.getElementById("formMessage").textContent = "Please fill in all fields.";
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("formMessage").textContent = "Invalid email format.";
    return;
  }


  
//   localstorage ან sessionstorage ან cookies( notification - 
//     accept ღილაკის დაჭერის შემდეგ რომ გაქრეს cookies notification )
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
//   localstorage ან sessionstorage ან cookies( notification - 
//     accept ღილაკის დაჭერის შემდეგ რომ გაქრეს cookies notification )


  document.getElementById("formMessage").textContent = "Successfully signed up!";
});
// გამოყენებულია ფორმა(სარეგისტრაციო ან საკონტაქტო ან ავტორიზაციის) + javascript-იდან 
// ფორმის ვალიდაცია - აუცილებლად ყველა ველი უნდა იყოს შევსებული; show/ hide password;  regex





// დამატებითი ჯს-ის ლოგიკა(multiselect, to do list, dropdown menu navigation, 
//     header bg change on scroll, scroll to top, section animation და ა.შ)
window.addEventListener("scroll", function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

document.getElementById("scrollTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// დამატებითი ჯს-ის ლოგიკა(multiselect, to do list, dropdown menu navigation, 
//     header bg change on scroll, scroll to top, section animation და ა.შ)





// სერვერიდან ინფორმაცია - (get methods) - ან  axios ან xml ან fetch ან async/await
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("show");
}

const factElement = document.getElementById("spaceFact");

fetch("https://api.le-systeme-solaire.net/rest/bodies/")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const bodies = data.bodies;
    const randomIndex = Math.floor(Math.random() * bodies.length);
    const randomBody = bodies[randomIndex];

    if (randomBody.englishName && randomBody.gravity) {
      factElement.textContent = 
        "Did you know? " + randomBody.englishName + " has gravity of " + randomBody.gravity + " m/s².";
    } else {
      factElement.textContent = "Couldn't find a fun fact.";
    }
  })
  .catch(function(error) {
    factElement.textContent = "Error loading space fact.";
    console.log(error);
  });
// სერვერიდან ინფორმაცია - (get methods) - ან  axios ან xml ან fetch ან async/await